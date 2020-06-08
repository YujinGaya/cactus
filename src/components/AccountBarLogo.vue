<template>
  <div id="logo">
    <img v-if="colorScheme === 'light'" src="@/assets/cactus.png" alt="선인장 로고">
    <img v-else src="@/assets/cactus-dark.png" alt="선인장 로고">
    <div id="app-name">
      가계부
    </div>
  </div>
</template>

<script>
import { colorScheme } from '@/use/colorScheme';

export default {
  setup() {
    return {
      colorScheme,
    };
  },
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
