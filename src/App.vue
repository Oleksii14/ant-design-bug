<template>
  <a-select style="min-width: 200px" v-model:value="selected">
    <Option value="1">Test 1</Option>
    <Option value="2">Test 2</Option>
  </a-select>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',

  setup() {
    const selected = ref("1")

    return {
      selected
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
