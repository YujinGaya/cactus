<template>
  <div>
    <div>
      이름: <input type="text" v-model="newAccount.name"/>
    </div>
    <div>
      종류:
      <select v-model="newAccount.kind">
        <option value="asset">자산</option>
        <option value="liability">부채</option>
        <option value="income">수입</option>
        <option value="expense">지출</option>
      </select>
    </div>
    현재 상태: {{ newAccount }}
    <button @click="addAccount(newAccount)">계좌 추가</button>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';

import { useLedger } from '@/use/firestore';

export default {
  setup() {
    const { ledger, addAccount } = useLedger('ledger1');
    const newAccount = reactive({
      name: '',
      balance: 0,
      kind: 'asset',
    });

    return { ledger, addAccount, newAccount };
  },
};
</script>

<style lang="scss" scoped>
</style>
