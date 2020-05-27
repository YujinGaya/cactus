<template>
  <div class="container">
    <div class="columns is-gapless">
      <div class="column is-narrow">
        <AccountBar class="account-bar"/>
      </div>
      <div class="column">
        <TabBar/>
        <ContentNewAccount/>
        <br/>
        <ContentTransactions/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AccountBar from '@/components/AccountBar.vue';
import TabBar from '@/components/TabBar.vue';
import ContentNewAccount from '@/components/ContentNewAccount.vue';
import ContentTransactions from '@/components/ContentTransactions.vue';

export default {
  components: {
    AccountBar, TabBar, ContentNewAccount, ContentTransactions,
  },
};
</script>

<style lang="scss" scoped>
.column.is-narrow {
  min-width: 300px;
  border-right: 1px solid var(--border);
}
</style>
