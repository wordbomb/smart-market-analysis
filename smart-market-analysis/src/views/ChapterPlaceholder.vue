<template>
  <!-- 版权提示消息 -->
  <el-alert 
    title="版权保护提示"
    type="warning"
    :closable="false"
    show-icon
    style="width: 900px;"
    description="本讲义用于南京大学教学使用，正与出版社接洽中，目前仅提供第1章部分内容的在线展示，其余章节需预付款1元用于打印（校外人员，审核过关后可邮寄）。请在付款时备注姓名、单位。付款截图、单位、姓名和职位/在读情况请同时发送至邮箱 njumarketanalysis@163.com ，方便后续沟通。" 
  />
  <!-- 支付宝收款二维码图片 -->
  <div style="text-align: center; margin-top: 20px;">
    <img :src="alipayQr" alt="支付宝收款二维码" style="width: 300px;" />
  </div>
</template>

<script setup>
  // 其余章节暂无可在线阅读的内容
  const alipayQr = import.meta.env.BASE_URL + 'alipay_qr.jpg';
</script>

<style scoped>
/* 可根据需要添加样式，比如调整文字对齐等 */
</style>