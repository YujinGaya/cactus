<template>
  <div class="tab-bar">
    <div class="buttons">
      <button @click="userPreference = 'light'" class="button is-light">밝게</button>
      <button @click="userPreference = 'system'" class="button is-dark">시스템</button>
      <button @click="userPreference = 'dark'" class="button is-black">어둡게</button>
    </div>
  </div>
</template>

<script>
import { userPreference } from '@/use/colorScheme';

export default {
  setup() {
    return {
      userPreference,
    };
  },
};
</script>

<style lang="scss" scoped>
.tab-bar {
  padding: 1rem;
  color: var(--text-primary);
}
</style>
