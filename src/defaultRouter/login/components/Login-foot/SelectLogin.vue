 <template>
  <div class="btn_none">
    <svg-icon :icon-class="svgName"></svg-icon>
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  props:['svgName','title']
};
</script>

 <style lang="less" scoped>
   .btn_none{
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover{
          cursor: pointer;
          user-select:none
        }
    }
 </style>