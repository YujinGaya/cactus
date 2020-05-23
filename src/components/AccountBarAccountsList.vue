<template>
  <div id="account-bar-accounts-list">
    <div v-for="category in ['asset', 'liability', 'income', 'expense']"
      :key="category"
      class="category">
      <div class="category-name">{{ category.toUpperCase() }}</div>
      <Account v-for="{ id, name, balance } in categories[category]"
        :key="id"
        :name="name"
        :amount="balance"
        :has-selected="false"/>
    </div>
    <div class="divider"></div>
    <div class="account-controls">
      <div class="account-add">
        <div class="plus">
          +
        </div>
      </div>
      <div class="spacer"></div>
      <div class="account-edit">
        <div class="edit">
          편집
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Account from '@/components/AccountBarAccount.vue';
import { useLedger } from '@/use/firestore';

export default {
  components: { Account },
  setup() {
    const { categories } = useLedger('ledger1');
    return { categories };
  },
};
</script>

<style lang="scss" scoped>
#account-bar-accounts-list {
  position: relative;
  overflow: visible scroll;

  .category {
    margin-bottom: 20px;

    .category-name {
      padding: 4px 38px;
      color: var(--text-secondary);
      font-size: 14px;
      font-family: monospace;
    }
  }

  .account-controls {
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 30px;
    padding: 16px 8px;
    display: flex;
    cursor: default;

    background-color: var(--background-primary);
    backdrop-filter: saturate(50%) blur(20px);

    border-top: 1px solid var(--border);

    %icon {
      height: 36px;
      background-color: var(--background-button);
      color: var(--text-primary);
      border-radius: 8px;
      display: flex;
    }

    .account-add {
      @extend %icon;
      width: 36px;
      .plus {
        position: relative;
        top: 5px;
        margin: 0 auto;
      }

      &:hover {
        opacity: 0.7;
      }
    }

    .spacer {
      flex-grow: 1;
    }

    .account-edit {
      @extend %icon;
      padding: 6px 12px;
      .edit {
        position: relative;
        margin: 0 auto;
      }

      &:hover {
        opacity: 0.7;
      }
    }
  }
}
</style>
