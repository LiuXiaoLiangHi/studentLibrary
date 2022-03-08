<!--
 * @Author: liang
 * @Date: 2022-02-25 09:31:31
 * @LastEditors: liang
 * @LastEditTime: 2022-03-04 15:04:12
 * @Description: file contentxxxx
 * @FilePath: \vue-cli3.0-vueadmin\src\pages\goods-manage\goods-list\index.vue
-->
<template>
  <div class="demo-image__placeholder">
    <div class="block">
      <el-image :src="src">
      <div slot="placeholder" class="image-slot">
        加载中<span class="dot">...</span>
      </div>
    </el-image>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            src:
                'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
        }
    }
}
</script>
