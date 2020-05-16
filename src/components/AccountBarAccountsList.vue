<template>
  <div id="account-bar-accounts-list">
    <div class="category">
      <div class="category-name">자산</div>
      <Account name="카카오뱅크" amount="1,620,350" :has-selected="true"/>
      <Account name="우리은행" amount="52,200,00" :has-selected="false"/>
      <Account name="국민은행" amount="273,160" :has-selected="false"/>
    </div>
    <div class="category">
      <div class="category-name">부채</div>
      <Account name="갚을 돈" amount="62,000" :has-selected="false"/>
    </div>
    <div class="category">
      <div class="category-name">수입</div>
      <Account name="월급" amount="2,502,680" :has-selected="false"/>
      <Account name="기타수익" amount="120,000" :has-selected="false"/>
    </div>
    <div class="category">
      <div class="category-name">지출</div>
      <Account name="식비" amount="480,000" :has-selected="false"/>
      <Account name="교통비" amount="120,360" :has-selected="false"/>
      <Account name="월세" amount="470,000" :has-selected="false"/>
      <Account name="통신비" amount="38,000" :has-selected="false"/>
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

export default {
  components: { Account },
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
