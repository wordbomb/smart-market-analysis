<template>
  <!-- 导航菜单 -->
  <el-menu 
    :collapse="collapse" 
    router 
    background-color="#f0f2f5" 
    text-color="#333" 
    active-text-color="#409EFF">
    <!-- 第1章 菜单项 -->
    <el-menu-item index="/chapter1">
      <el-icon><Notebook /></el-icon>
      <span>第1章 概论</span>
    </el-menu-item>
    <!-- 第2~11章 菜单项 -->
    <el-menu-item index="/chapter2">
      <el-icon><Notebook /></el-icon>
      <span>第2章 数据收集方法</span>
    </el-menu-item>
    <el-menu-item index="/chapter3">
      <el-icon><Notebook /></el-icon>
      <span>第3章 定量研究与问卷调查</span>
    </el-menu-item>
    <el-menu-item index="/chapter4">
      <el-icon><Notebook /></el-icon>
      <span>第4章 市场数据分析基础</span>
    </el-menu-item>
    <el-menu-item index="/chapter5">
      <el-icon><Notebook /></el-icon>
      <span>第5章 大数据与计算概论</span>
    </el-menu-item>
    <el-menu-item index="/chapter6">
      <el-icon><Notebook /></el-icon>
      <span>第6章 基础关系数据分析</span>
    </el-menu-item>
    <el-menu-item index="/chapter7">
      <el-icon><Notebook /></el-icon>
      <span>第7章 文本与主题建模分析</span>
    </el-menu-item>
    <el-menu-item index="/chapter8">
      <el-icon><Notebook /></el-icon>
      <span>第8章 基础社交关系预测</span>
    </el-menu-item>
    <el-menu-item index="/chapter9">
      <el-icon><Notebook /></el-icon>
      <span>第9章 基于大语言模型的文本分析</span>
    </el-menu-item>
    <el-menu-item index="/chapter10">
      <el-icon><Notebook /></el-icon>
      <span>第10章 大语言模型的的部署</span>
    </el-menu-item>
    <el-menu-item index="/chapter11">
      <el-icon><Notebook /></el-icon>
      <span>第11章 基于社会模拟的市场分析</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { defineProps } from 'vue';
import { Notebook } from '@element-plus/icons-vue';

// 接收父组件传入的折叠状态
const { collapse } = defineProps({
  collapse: Boolean
});
</script>

<style scoped>
/* 可根据需要添加导航菜单的局部样式 */
</style>