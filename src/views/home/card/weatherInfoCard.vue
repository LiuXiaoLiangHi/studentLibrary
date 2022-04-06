<!--
 * @Author: liang
 * @Date: 2022-04-06 16:43:00
 * @LastEditors: liang
 * @LastEditTime: 2022-04-06 18:19:39
 * @Description: file content
 * @FilePath: \作业\my-home\src\views\home\card\weatherInfoCard.vue
-->
<template>
   <div id="he-plugin-standard"></div>
</template>

<script>
export default {
created() {
    // 获取当前城市的天气情况
    window.WIDGET = {
      CONFIG: {
        layout: "1",
        width: "500",
        height: "200",
        background: "1",
        city: "CN101240213",
        dataColor: "FFFFFF",
        key: "c8fe4515b27e449aa648b7c00b049227",
      },
    };
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0";
    document.getElementsByTagName("head")[0].appendChild(script);
  },
}
</script>

<style lang="less">
// #he-plugin-standard{
//   width: 500px !important;
// }
</style>