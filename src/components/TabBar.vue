<template>
  <div id="tab-bar">
    <div class="tabs">
      <div class="tab is-active">거래</div>
      <div class="tab">예산</div>
      <div class="tab">보고서</div>
    </div>
    <div class="tabs account">
      <div class="tab is-active">
        yujingaya
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
#tab-bar {
  display: flex;
  justify-content: space-between;
  padding-left: 18px;
  border-bottom: 1px solid var(--border);

  .tabs {
    white-space: nowrap;
    font-size: 20px;

    .tab {
      display: inline-block;
      margin: 18px 24px;
      opacity: 0.5;

      cursor: default;

      &.is-active {
        opacity: 1;
      }
      &:not(.is-active):hover {
        opacity: 0.7;
        transition: 0.1s;
      }
    }

    &.account {
      font-size: 16px;
      .tab {
        margin: 20px 24px;
      }
    }
  }
}
</style>
