<template>
  <div class="account-bar-account" :class="{ 'is-active': hasSelected }">
    <AccountBarAccountIcon class="icon"/>
    <div class="detail">
      <div class="name">{{ name }}</div>
      <div class="amount">{{ amount }}</div>
    </div>
  </div>
</template>

<script>
import AccountBarAccountIcon from '@/components/AccountBarAccountIcon.vue';

export default {
  components: { AccountBarAccountIcon },
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

  .icon {
    margin-right: 8px;
  }

  .detail {
    line-height: 1;
    .name {
      margin-bottom: 4px;
      color: var(--text-primary);
    }
    .amount {
      font-size: 14px;
      color: var(--text-secondary);
    }
  }

  &.is-active {
    background-color: var(--background-hover);
    .icon {
      box-shadow: 0 2px 4px #00000025;
    }
  }

  &:hover {
    .label {
      opacity: 0.6;
      transition: opacity 0.1s;
    }
  }
}
</style>
