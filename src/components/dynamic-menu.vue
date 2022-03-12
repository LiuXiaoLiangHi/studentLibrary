<!--
 * @Author: liang
 * @Date: 2022-03-07 18:32:22
 * @LastEditors: liang
 * @LastEditTime: 2022-03-10 13:46:33
 * @Description: file content
 * @FilePath: \作业\my-home\src\components\dynamic-menu.vue
-->
<template>
  <div class='menu-container'>
    <template v-for='v in menuList'>
      <el-submenu
        :index='v.name'
        v-if='v.children&&v.children.length>0'
        :key='v.name'
      >
        <template slot='title'>
          <i
            class='iconfont'
            :class='v.meta.icon'
             :style="v.meta.iconColor"
          ></i>
          <!-- <i :class="v.meat.icon"></i> -->
          <!-- <svg-icon v-if="v.meta&&v.meta.icon" :icon-class="v.meta.icon"></svg-icon> -->
          <span>{{v.meta.name}}</span>
        </template>
        <el-menu-item-group>
          <my-nav :menuList='v.children'></my-nav>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item
        :key='v.name'
        :index='v.name'
        @click='gotoRoute(v.name)'
        v-else
      >
       <!-- <i :class="v.meat.icon"></i> -->
        <i
          class='iconfont'
          :class='v.meta.icon'
          :style="v.meta.iconColor"
        ></i>
        <!-- <svg-icon v-if="v.meta&&v.meta.icon" :icon-class="v.meta.icon"></svg-icon> -->
        <span slot='title'>{{v.meta.name}}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
    name: 'my-nav',
    props: {
        menuList: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
     
    methods: {
        gotoRoute(name) {
            this.$router.push({ name })
        }
    }
}
</script>

<style lang='less'>

</style>
