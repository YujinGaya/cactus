import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { groupBy } from 'lodash-es';
import {
  onMounted, onUnmounted, ref, Ref, computed, watchEffect,
} from 'vue';

import autoId from '@/../shared/autoId';
import Ledger from '@/types/Ledger';
import Account from '@/types/Account';
import Transaction from '@/types/Transaction';

firebase.initializeApp({
  apiKey: 'AIzaSyA6IPcGnfIIeZ75frMLfYO3WRmXI3n_3RU',
  appId: '1:562568883582:web:e4df3ddf952ba82ebe972f',
  projectId: 'cactus-prime',
});

const db = firebase.firestore();
db.enablePersistence({ synchronizeTabs: true });


const ledgerId: Ref<string | undefined> = ref(undefined);

/**
 * Set `ledgerId` on mount and clear on unmount.
 * Values of `uesLedger` will be updated according to the set ledgerId
 */
export function setLedgerId(newLedgerId: string) {
  onMounted(() => {
    ledgerId.value = newLedgerId;
  });

  onUnmounted(() => {
    ledgerId.value = undefined;
  });
}

/**
 * Get updated as ledgerId gets updated.
 */
const ledger: Ref<Ledger | undefined> = ref(undefined);
let unsubscribeLedger = () => { /* Nothing to unsubscribe as ledgerId is undefined */ };

watchEffect(() => {
  if (ledgerId.value) {
    const ledgerRef = db.doc(`/users/yujingaya/ledgers/${ledgerId.value}`);
    unsubscribeLedger = ledgerRef.onSnapshot((ledgerDoc) => {
      ledger.value = ledgerDoc.data() as Ledger;
    });
  } else {
    unsubscribeLedger();
  }
});

/**
 * Map accountId to account.
 */
const accounts = computed(() => ledger.value?.accounts ?? {});

/**
 * Accounts indexed by kind, i.e., asset, equity, income, etc.
 * Computed property of `ledger`.
 */
const accountsGroupedByKind = computed(() => {
  if (!ledger.value) {
    return {};
  }

  return groupBy(Object.entries(ledger.value.accounts).map(([id, account]) => ({
    id,
    account,
  })), 'account.kind');
});

/**
 * Add account to current ledger.
 */
function addAccount(account: Account) {
  const ledgerRef = db.doc(`/users/yujingaya/ledgers/${ledgerId.value}`);
  return ledgerRef.update({
    [`accounts.${autoId()}`]: account,
  });
}

const selectedAccount: Ref<string | undefined> = ref(undefined);

export function useLedger() {
  return {
    ledger,
    accounts,
    accountsGroupedByKind,
    addAccount,
    selectedAccount,
  };
}


// const transactionsQuery // 이게 ledgerId처럼 master? source variable?로 쓰여야할듯. setQuery도 잇어야할거구
const transactions: Ref<Array<{ id: string; transaction: Transaction }>> = ref([]);
let unsubscribeTransactions = () => { /* Nothing to unsubscribe */ };

watchEffect(() => {
  if (ledgerId.value) {
    const transactionsRef = selectedAccount.value
      ? db
        .collection(`/users/yujingaya/ledgers/${ledgerId.value}/transactions`)
        .where('debit', '==', selectedAccount.value)
      : db
        .collection(`/users/yujingaya/ledgers/${ledgerId.value}/transactions`);

    unsubscribeTransactions = transactionsRef
      .onSnapshot((transactionDocs) => {
        transactions.value = transactionDocs.docs.map((transactionDoc) => ({
          id: transactionDoc.id,
          transaction: transactionDoc.data() as Transaction,
        }));
      });
  } else {
    unsubscribeTransactions();
  }
});

function addTransaction(transaction: Transaction) {
  const transactionsRef = db.collection(`/users/yujingaya/ledgers/${ledgerId.value}/transactions`);
  return transactionsRef.add(transaction);
}

interface Open {
  kind: 'open';
  id: string;
}

interface Select {
  kind: 'select';
  ids: Array<string>;
}

const selectedTransactions: Ref<Open | Select | undefined> = ref(undefined);

function openTransaction(id: string) {
  selectedTransactions.value = { kind: 'open', id };
}

export function useTransactions() {
  return {
    transactions,
    addTransaction,
    selectedTransactions,
    openTransaction,
  };
}
