<template>
  <div>
    <div>
      날짜: <input type="date" v-model="newTransaction.date"/>
    </div>
    <div>
      이름: <input type="text" v-model="newTransaction.name"/>
    </div>
    <div>
      금액: <input type="number" v-model="newTransaction.amount"/>
    </div>
    <div>
      차변:
      <select v-model="newTransaction.debit">
        <optgroup label="자산">
          <option v-for="account in accountsGroupedByKind.asset"
            :key="account.id"
            :value="account.id">
            {{ account.name }}+
          </option>
        </optgroup>
        <optgroup label="순자산">
          <option v-for="account in accountsGroupedByKind.equity"
            :key="account.id"
            :value="account.id">
            {{ account.name }}-
          </option>
        </optgroup>
        <optgroup label="부채">
          <option v-for="account in accountsGroupedByKind.liability"
            :key="account.id"
            :value="account.id">
            {{ account.name }}-
          </option>
        </optgroup>
        <optgroup label="비용">
          <option v-for="account in accountsGroupedByKind.expense"
            :key="account.id"
            :value="account.id">
            {{ account.name }}
          </option>
        </optgroup>
      </select>
    </div>
    <div>
      대변:
      <select v-model="newTransaction.credit">
        <optgroup label="자산">
          <option v-for="account in accountsGroupedByKind.asset"
            :key="account.id"
            :value="account.id">
            {{ account.name }}-
          </option>
        </optgroup>
        <optgroup label="순자산">
          <option v-for="account in accountsGroupedByKind.equity"
            :key="account.id"
            :value="account.id">
            {{ account.name }}+
          </option>
        </optgroup>
        <optgroup label="부채">
          <option v-for="account in accountsGroupedByKind.liability"
            :key="account.id"
            :value="account.id">
            {{ account.name }}+
          </option>
        </optgroup>
        <optgroup label="수입">
          <option v-for="account in accountsGroupedByKind.income"
            :key="account.id"
            :value="account.id">
            {{ account.name }}
          </option>
        </optgroup>
      </select>
    </div>
    현재 상태: {{ newTransaction }}
    <button @click="addTransaction(newTransaction)">거래 추가</button>
    <br/>
    <br/>
    <div>
      <ContentTransaction
        v-for="{ id, transaction } in transactions"
        @click="openTransaction(id)"
        :is-selected="selectedTransactions
          && selectedTransactions.kind === 'open'
          && selectedTransactions.id === id"
        :key="id"
        :transaction="transaction"
        :accounts="accounts"/>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';

import { useLedger, useTransactions } from '@/use/firestore';
import ContentTransaction from '@/components/ContentTransaction.vue';

export default {
  components: { ContentTransaction },
  setup() {
    const { accounts, accountsGroupedByKind } = useLedger();
    const {
      transactions,
      addTransaction,
      selectedTransactions,
      openTransaction,
    } = useTransactions();

    const newTransaction = reactive({
      date: 0,
      name: '',
      amount: 0,
      debit: '',
      credit: '',
    });

    return {
      accounts,
      accountsGroupedByKind,
      transactions,
      addTransaction,
      newTransaction,
      selectedTransactions,
      openTransaction,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
