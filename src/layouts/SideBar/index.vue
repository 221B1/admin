<template lang="">
  <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
    <div class="logo" />
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <a-sub-menu v-for="item in menus" :key=item.id>
        <template #title>
          <span>
            <user-outlined />
            <span>{{item.name}}</span>
          </span>
        </template>
        <a-menu-item v-for="subItem in item.children" :key=subItem.id @click="handleClick(item, subItem)">{{subItem.name}}</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>
<script>
import { defineComponent, ref, unref, onMounted } from 'vue'
import { usePermissonStore } from '@/stores/modules/permission'
import router from '@/router';
export default defineComponent({
  setup(){
  const selectedKeys = ref(['1']);
  const collapsed = ref(false);
  let menus = ref('');
  function handleClick(item, subItem){
    console.log(unref(subItem))
    router.push(unref(item).path + '/' + unref(subItem).path)
  }


  onMounted(async() => {
    const permissionStore = usePermissonStore();
    const routes = await permissionStore.buildRoutesAction();
    console.log(routes)
    menus.value = permissionStore.getMenuList;
    routes.forEach((route)=>{
        router.addRoute(route)
    })
  })

  return {
    selectedKeys,
    collapsed,
    menus,
    handleClick
  }
}
})

</script>
<style lang="less" scoped>
.logo {
  height: 48px;
  background-color: pink;
}
</style>
