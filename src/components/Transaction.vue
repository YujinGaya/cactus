<template>
  <div>{{ props.name }}</div>
</template>

<script lang="ts">
export default {
  props: {
    id: String,
    name: String,
    amount: Number,
    credit: String,
    debit: String,
  },
  setup(props) {
    console.log(props.name);
    return {
      props,
    };
  },
};

</script>

<style>

</style>
