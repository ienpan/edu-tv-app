import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GradeSelect from '../views/GradeSelect.vue'
import SubjectSelect from '../views/SubjectSelect.vue'
import Quiz from '../views/Quiz.vue'
import Result from '../views/Result.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/grade/:id', name: 'GradeSelect', component: GradeSelect },
  { path: '/subject/:gradeId', name: 'SubjectSelect', component: SubjectSelect },
  { path: '/quiz/:subject/:gradeId', name: 'Quiz', component: Quiz },
  { path: '/result/:subject/:gradeId', name: 'Result', component: Result }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
