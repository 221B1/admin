<template lang="">
  <a-layout-header style="background: #fff; padding: 0">
    <menu-unfold-outlined
      v-if="collapsed"
      class="trigger"
      @click="() => (collapsed = !collapsed)"
    />
    <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
    <RouterView/>

  </a-layout-header>
</template>
<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
const collapsed = ref(false);
</script>
<style lang=""></style>
