<template>
  <div id="account-bar">
    <Logo/>
    <AccountsList/>
  </div>
</template>

<script>
import Logo from '@/components/AccountBarLogo.vue';
import AccountsList from '@/components/AccountBarAccountsList.vue';

export default {
  components: { Logo, AccountsList },
};
</script>

<style lang="scss" scoped>
#account-bar {
  background-color: var(--background-secondary);
  min-width: 260px;
  display: flex;
  flex-direction: column;
}
</style>
