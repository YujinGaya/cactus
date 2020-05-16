<template>
  <div id="tab-transactions">
    <Header/>
    <div class="transaction">
      @TODO 거래목록
    </div>
  </div>
</template>

<script>
import Header from '@/components/TabTransactionsHeader.vue';

export default {
  components: { Header },
};
</script>

<style lang="scss" scoped>
#tab-transactions {
  .transaction {
    padding: 2rem;
  }
}
</style>
