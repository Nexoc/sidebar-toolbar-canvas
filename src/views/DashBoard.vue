<template>
    <div class="bar">
      <Bar />
    </div>
    <div class="draw">
      <Draw />
    </div>
  </template>
  
  <script>

  import Bar from '@/components/Bar/toolbar-menu/ToolBar.vue'
  import Draw from '@/components/draw/DrawCanvas.vue'
  
  export default {
    setup() {
      return {  }
    },
    components: { Bar, Draw }
  }
  </script>
<style>
.bar {
margin-left: 5%;
}
.draw{
margin-left: 5%;
}
</style>

