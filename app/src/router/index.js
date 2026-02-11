import { createRouter, createWebHistory } from 'vue-router'
import GoalPage from '../views/GoalPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ {
      path: '/',
      name: 'home',
      component: GoalPage,
    }
], 
})

export default router