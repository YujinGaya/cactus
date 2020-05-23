<template>
  <div>
    <div>
      날짜: <input type="date" v-model="newTx.date"/>
    </div>
    <div>
      이름: <input type="text" v-model="newTx.name"/>
    </div>
    <div>
      금액: <input type="number" v-model="newTx.amount"/>
    </div>
    <div>
      차변:
      <select v-model="newTx.debit">
        <optgroup label="자산">
          <option v-for="account in categories.asset" :key="account.id" :value="account.id">
            {{ account.name }}+
          </option>
        </optgroup>
        <optgroup label="부채">
          <option v-for="account in categories.liability" :key="account.id" :value="account.id">
            {{ account.name }}-
          </option>
        </optgroup>
        <optgroup label="비용">
          <option v-for="account in categories.expense" :key="account.id" :value="account.id">
            {{ account.name }}
          </option>
        </optgroup>
      </select>
    </div>
    <div>
      대변:
      <select v-model="newTx.credit">
        <optgroup label="자산">
          <option v-for="account in categories.asset" :key="account.id" :value="account.id">
            {{ account.name }}-
          </option>
        </optgroup>
        <optgroup label="부채">
          <option v-for="account in categories.liability" :key="account.id" :value="account.id">
            {{ account.name }}+
          </option>
        </optgroup>
        <optgroup label="수입">
          <option v-for="account in categories.income" :key="account.id" :value="account.id">
            {{ account.name }}
          </option>
        </optgroup>
      </select>
    </div>
    현재 상태: {{ newTx }}
    <button @click="addTx(newTx)">거래 추가</button>
    <div>
      {{ txs }}
    </div>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';

import { useLedger, useTxs } from '@/use/firestore';

export default {
  setup() {
    const { categories } = useLedger('ledger1');
    const { txs, addTx } = useTxs('ledger1');
    const newTx = reactive({
      date: 0,
      name: '',
      amount: 0,
      debit: '',
      credit: '',
    });

    return {
      categories, txs, addTx, newTx,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
