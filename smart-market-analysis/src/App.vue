<template>
  <!-- 左右两列布局容器 -->
  <el-container style="min-height: 100vh;">
    <!-- 左侧固定宽度导航栏 Aside -->
    <el-aside :width="'280px'">
      <!-- 导航栏顶部区域：折叠/展开 按钮 -->
      <div class="nav-header" style="text-align: center; padding: 10px;">
        章节目录
      </div>
      <!-- 导航菜单组件 -->
      <ChapterNavigation :collapse="isCollapse" />
    </el-aside>

    <!-- 右侧主要内容区域 Main -->
    <el-main style="padding: 20px;">
      <!-- 路由出口，显示当前选中章节的组件内容 -->
      <router-view />
    </el-main>
  </el-container>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons-vue';
import ChapterNavigation from './components/ChapterNavigation.vue';

const isCollapse = ref(false);
// 切换导航折叠状态
const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value;
};
// 根据窗口宽度自动折叠导航栏（移动端隐藏）
const checkScreen = () => {
  isCollapse.value = window.innerWidth < 768;
};
onMounted(() => {
  checkScreen();
  window.addEventListener('resize', checkScreen);
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreen);
});
</script>

<style>
/* 全局布局样式 */
.el-aside {
  background-color: #f0f2f5;            /* 浅灰背景提高对比 */
  border-right: 1px solid #dcdfe6;      /* 右侧边框线分隔主区域 */
}
.nav-header {
  /* 导航栏顶部区域样式（可根据需要调整） */
  margin-bottom: 10px;
}
</style>