<template>
<div class="transaction">
  <div class="columns is-mobile is-gapless">
    <div class="column is-6-tablet is-6-mobile">
      {{ transaction.name }}
    </div>
    <div class="column is-2-tablet is-6-mobile">
      <div class="amount">
      {{ transaction.amount }}
      </div>
    </div>
    <div class="column is-2 is-hidden-mobile">
      {{ accounts[transaction.debit].name }}
    </div>
    <div class="column is-2 is-hidden-mobile">
      {{ accounts[transaction.credit].name }}
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    id: String,
    transaction: Object,
    accounts: Object,
  },
};
</script>

<style lang="scss" scoped>
.transaction {
  border-radius: 8px;
  margin: 0 16px;
  padding: 8px 16px;
  &:hover {
    background-color: var(--background-secondary);
  }
}
.amount {
  text-align: right;
  padding-right: 16px;
}
</style>
