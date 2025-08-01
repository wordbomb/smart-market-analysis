<template>
  <!-- 版权提示消息 -->
  <el-alert 
    title="版权保护提示"
    type="warning"
    :closable="false"
    show-icon
    style="width: 900px;"
    description="本教材用于教学使用，目前仅提供第1章在线展示，其余章节需支付1元用于打印邮寄。请在付款时备注姓名、单位和邮箱。" 
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