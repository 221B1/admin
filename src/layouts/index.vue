<template lang="">
  <!-- 整体结构 -->
  <a-layout class="layout-container-vertical">
    <!-- 左侧侧边栏 -->
    <LayoutSideBar class="layout-sidebar" :style="{width: false?'64px':'200px'}"/>
    <!-- 头部 -->
    <LayoutHeader class="layout-header" :style="{left: false?'64px':'200px'}"/>
    <!-- 页面主要内容 -->
    <a-layout class="layout-main" :style="{left: false?'64px':'200px'}">
      <LayoutContent calss="layout-content" />
      <LayoutFooter calss="layout-footer" />
    </a-layout>
  </a-layout>
</template>

<script setup>
import LayoutHeader from './Header/index.vue'
import LayoutSideBar from './SideBar/index.vue'
import LayoutContent from './Content/index.vue'
import LayoutFooter from './Footer/index.vue'
</script>
<style lang="less" scoped>
.layout-container-vertical {

  .layout-sidebar {
    position: fixed;
    left: 0;
    top: 0;
    width: 200px;
    height: 100%;
  }

  .layout-header {
    position: fixed;
    top: 0;
    right: 0;
    height: 48px;
  }

  .layout-main {
    position: fixed;
    top: 48px;
    right: 0;
  }
}
</style>
