<template>
  <div>组件示例</div>
  <div>{{ count }}</div>
  <nd-button @click="handleClick">按钮</nd-button>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <Share></Share>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    handleClick() {
      this.count ++
    }
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
