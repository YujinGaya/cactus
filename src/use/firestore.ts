import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { groupBy } from 'lodash-es';
import {
  onMounted, onUnmounted, ref, Ref, computed,
} from 'vue';

import autoId from '@/../shared/autoId';

firebase.initializeApp({
  apiKey: 'AIzaSyA6IPcGnfIIeZ75frMLfYO3WRmXI3n_3RU',
  appId: '1:562568883582:web:e4df3ddf952ba82ebe972f',
  projectId: 'cactus-prime',
});

const db = firebase.firestore();
db.enablePersistence({ synchronizeTabs: true });

type AccountKind = 'asset' | 'liability' | 'equity' | 'income' | 'expense';

interface Account {
  name: string;
  balance: number;
  kind: AccountKind;
}

interface Ledger {
  name: string;
  accounts: {
    [key: string]: Account;
  };
}

// Component <─ useLedger <─ Firestore SDK <─> Firestore Server (/user/{}/ledger/{ledger_id})
// Component <─ useLedger <┘        ^
//     └──────────mutation──────────┘
export function useLedger(ledgerId: string) {
  const ledger: Ref<Ledger | undefined> = ref(undefined);
  const ledgerRef = db.doc(`/users/yujingaya/ledgers/${ledgerId}`);
  let unsubscribe: () => void;

  onMounted(async () => {
    unsubscribe = ledgerRef.onSnapshot((snapshot) => {
      ledger.value = snapshot.data() as Ledger;
    });
  });

  onUnmounted(() => {
    unsubscribe();
  });

  const categories = computed(() => {
    const accounts = Object.entries(ledger.value?.accounts || {}).map(([key, value]) => ({
      id: key,
      ...value,
    }));

    return groupBy(accounts, 'kind');
  });

  function addAccount({ name, kind }: { name: string; kind: AccountKind }) {
    return ledgerRef.update({
      [`accounts.${autoId()}`]: {
        name,
        balance: 0,
        kind,
      },
    });
  }

  return { ledger, categories, addAccount };
}

interface Transaction {
  date: number;
  name: string;
  amount: number;
  debit: string;
  credit: string;
}

export function useTxs(ledgerId: string) {
  const txs: Ref<Array<Transaction>> = ref([]);
  const txsRef = db.collection(`/users/yujingaya/ledgers/${ledgerId}/transactions`);
  let unsubscribe: () => void;

  onMounted(async () => {
    unsubscribe = txsRef.onSnapshot((snapshot) => {
      txs.value = snapshot.docs.map((tx) => tx.data() as Transaction);
    });
  });

  onUnmounted(() => {
    unsubscribe();
  });

  function addTx(tx: Transaction) {
    return txsRef.add(tx);
  }

  return { txs, addTx };
}
