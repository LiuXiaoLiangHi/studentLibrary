 <template>
  <el-result :icon="icon_type" title="成功提示" subTitle="请根据提示进行操作" class="reg_result"   >
    <template slot="extra">
      <el-button type="primary" size="medium">返回</el-button>
    </template>
  </el-result>
</template>
 
 <script>
export default {
   props:{
       icon_type :{
           type:String
       }
   },
   watch: {
       icon_type(newValue,oldValue){
           console.log(newValue);
           console.log(oldValue);
       }
   },
}
</script>
 
 <style lang="less" scoped>
 .reg_result{
   position:absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%,-50%);
 }
</style>