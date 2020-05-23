import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const db = admin.firestore();

function debitSign(kind: string) {
  if (kind === 'asset' || kind === 'expense') {
    return 1;
  } else {
    return -1;
  }
}

exports.aggregateBalances = functions.firestore
  .document('users/{userId}/ledgers/{ledgerId}/transactions/{transactionId}')
  .onWrite((change, context) => {
    const before = change.before.data();
    const after = change.after.data();
    const { userId, ledgerId } = context.params;

    const ledgerRef = db.doc(`users/${userId}/ledgers/${ledgerId}`);

    return db.runTransaction(transaction => {
      return transaction.get(ledgerRef).then(ledgerDoc => {
        const accounts = ledgerDoc.data()!.accounts;

        if (before) {
          accounts[before.debit].balance -= debitSign(accounts[before.debit].kind) * before.amount;
          accounts[before.credit].balance += debitSign(accounts[before.credit].kind) * before.amount;
        }

        if (after) {
          accounts[after.debit].balance += debitSign(accounts[after.debit].kind) * after.amount;
          accounts[after.credit].balance -= debitSign(accounts[after.credit].kind) * after.amount;
        }

        return transaction.update(ledgerRef, { accounts });
      });
    });
  });
