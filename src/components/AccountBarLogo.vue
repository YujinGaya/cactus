<template>
  <div id="logo">
    <picture>
      <!-- @TODO: 유저 설정에 따라서도 바뀌도록 -->
      <source srcset="@/assets/cactus-dark.png" media="(prefers-color-scheme: dark)">
      <img src="@/assets/cactus.png" alt="선인장 로고">
    </picture>
    <div id="app-name">
      가계부
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
#logo {
  display: flex;
  padding: 20px 32px;
  min-height: 76px;
  font-family: 'Gothic A1';

  img {
    height: 36px;
    width: 36px;
  }

  #app-name {
    margin: 3px;
    font-size: 20px;
    font-weight: bold;

    color: var(--text-primary);
  }
}
</style>
