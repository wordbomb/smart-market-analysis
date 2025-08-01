<template>
  <div class="pdf-container">
    <!-- 内嵌 PDF 文档，第1章 -->
    <embed 
      :src="chapterPdf" 
      type="application/pdf" 
      width="900px" 
      height="100%" />
  </div>
</template>

<script setup>
  // 第1章为示例章节，无额外脚本逻辑
  const chapterPdf = import.meta.env.BASE_URL + 'chapter1.pdf';
</script>

<style scoped>
.pdf-container {
  width: 100%;
  height: 100%;
  /* 确保容器撑满可用区域，高度由父元素弹性分配 */
}
</style>