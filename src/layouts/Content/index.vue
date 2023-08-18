<template lang="">
  <a-layout-content
    :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
  >
    <RouterView/>
  </a-layout-content>
</template>
<script setup>
import { RouterView } from 'vue-router';
</script>
<style lang=""></style>
