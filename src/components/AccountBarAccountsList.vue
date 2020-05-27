<template>
  <div id="account-bar-accounts-list">
    <div v-for="kind in ['asset', 'liability', 'income', 'expense']"
      :key="kind"
      class="kind">
      <div class="kind-name">{{ kind.toUpperCase() }}</div>
      <Account v-for="{ id, account } in accountsGroupedByKind[kind]"
        :key="id"
        :name="account.name"
        :amount="account.balance"
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
import { setLedgerId, useLedger } from '@/use/firestore';

export default {
  components: { Account },
  setup() {
    setLedgerId('ledger1');
    const { accountsGroupedByKind } = useLedger();
    return { accountsGroupedByKind };
  },
};
</script>

<style lang="scss" scoped>
#account-bar-accounts-list {
  position: relative;
  overflow: visible scroll;

  .kind {
    margin-bottom: 20px;

    .kind-name {
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
