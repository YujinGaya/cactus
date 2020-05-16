<template>
  <div id="account-book">
    <AccountBar/>
    <div id="divider"></div>
    <div id="contents">
      <TabBar/>
      <TabTransactions/>
    </div>
  </div>
</template>

<script lang="ts">
import AccountBar from '@/components/AccountBar.vue';
import TabBar from '@/components/TabBar.vue';
import TabTransactions from '@/components/TabTransactions.vue';

export default {
  components: { AccountBar, TabBar, TabTransactions },
};

</script>

<style lang="scss" scoped>
#account-book {
  display: flex;
  height: 100%;
  width: 100%;

  user-select: none;

  #divider {
    background-color: var(--border);
    cursor: col-resize;
    height: 100%;
    width: 1px;
  }

  #contents {
    flex-grow: 1;
  }
}
</style>
