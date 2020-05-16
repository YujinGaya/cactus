<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { useColorScheme } from '@/use/colorScheme';

export default {
  setup() {
    useColorScheme();
  },
};
</script>

<style lang="scss">
@use '@/style/minireset';
@use 'bulma';
@use '@/style/color-scheme';
@use '@/style/root';
</style>
