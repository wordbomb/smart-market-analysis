import { createRouter, createWebHistory } from 'vue-router';
import Chapter1 from '../views/Chapter1.vue';
import ChapterPlaceholder from '../views/ChapterPlaceholder.vue';

const routes = [
  { path: '/', redirect: '/chapter1' },
  { path: '/chapter1', component: Chapter1 },
  { path: '/chapter2', component: ChapterPlaceholder },
  { path: '/chapter3', component: ChapterPlaceholder },
  { path: '/chapter4', component: ChapterPlaceholder },
  { path: '/chapter5', component: ChapterPlaceholder },
  { path: '/chapter6', component: ChapterPlaceholder },
  { path: '/chapter7', component: ChapterPlaceholder },
  { path: '/chapter8', component: ChapterPlaceholder },
  { path: '/chapter9', component: ChapterPlaceholder },
  { path: '/chapter10', component: ChapterPlaceholder },
  { path: '/chapter11', component: ChapterPlaceholder }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),  // 使用基础路径
  routes
});

export default router;