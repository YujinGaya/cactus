<template>
  <div class="container">
    <div class="columns is-gapless">
      <div class="column is-narrow">
        <AccountBar class="account-bar"/>
      </div>
      <div class="column">
        <TabBar/>
        <ContentTransactions/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AccountBar from '@/components/AccountBar.vue';
import TabBar from '@/components/TabBar.vue';
import ContentTransactions from '@/components/ContentTransactions.vue';

export default {
  components: { AccountBar, TabBar, ContentTransactions },
};
</script>

<style lang="scss" scoped>
.column.is-narrow {
  min-width: 300px;
  border-right: 1px solid var(--border);
}
</style>
