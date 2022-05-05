<template>
  <el-card class="card">
    <div slot="header">
      <span>{{ cardTitle }}</span>
      <el-popover placement="right" width="100" trigger="click" transition>
        <el-link :underline="false" href="http://localhost:8080/#/systemSet">查看全部信息</el-link>
        <svg-icon icon-class="更多功能" slot="reference"></svg-icon>
      </el-popover>
    </div>
    <el-table :data="tableData">
      <el-table-column prop="s" :width="30">
          <svg-icon icon-class="喇叭"> </svg-icon>
        </el-table-column>
      <el-table-column
        v-for="col in columns"
        :prop="col.id"
        :key="col.id"
        :label="col.label"
        :width="col.width"
        :show-overflow-tooltip="true"
      >
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      
      columns:[{
        id:'date',
        width:150
      },
      
      {
        id:'message',
        width:360
      },
      ]
    };
  },
  props: ['cardTitle','tableData'],
};
</script>

<style lang="less" scoped>
 
</style>