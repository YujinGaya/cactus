<template>
  <div class="account-bar-account" :class="{ 'is-active': hasSelected }">
    <Icon class="icon"/>
    <div class="label">
      <div class="name">{{ name }}</div>
      <div class="amount">{{ amount }}</div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/AccountBarAccountIcon.vue';

export default {
  components: { Icon },
  props: {
    name: String,
    amount: Number,
    hasSelected: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.account-bar-account {
  margin: 0 32px;
  padding: 6px;
  border-radius: 12px;

  display: flex;

  cursor: default;

  .icon {
    margin-right: 8px;
  }

  .label {
    .amount {
      font-size: 14px;
      color: var(--text-secondary);
    }
  }

  &.is-active {
    background-color: var(--background-hover);
  }

  &:hover {
    .label {
      opacity: 0.6;
      transition: opacity 0.1s;
    }
  }
}
</style>
