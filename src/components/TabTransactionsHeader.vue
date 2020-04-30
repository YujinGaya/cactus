<template>
  <div class="header">
    <div class="cell">날짜</div>
    <div class="cell">항목</div>
    <div class="cell">금액</div>
    <div class="cell">대변</div>
    <div class="cell">차변</div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  border-bottom: 1px solid var(--border);
  color: var(--text-secondary);

  .cell {
    padding: 4px 180px 4px 8px;
    border-right: 1px solid var(--border);
  }
}
</style>
