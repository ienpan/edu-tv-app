<template>
  <div class="page home">
    <div class="header">
      <div class="logo">🎓 启蒙乐园</div>
      <div class="stats">
        <div class="stat-item">⭐ {{ userStore.experience }} XP</div>
        <div class="stat-item">💰 {{ userStore.coins }} 币</div>
        <div class="stat-item">🔥 连续{{ userStore.streak }}天</div>
      </div>
    </div>
    
    <div class="home-content">
      <h1 class="page-title">选择你的年级</h1>
      <div class="card-grid">
        <div 
          v-for="grade in grades" 
          :key="grade.id"
          class="card grade-card"
          :class="`grade-${grade.id}`"
          tabindex="0"
          @click="goToGrade(grade.id)"
          @keydown.enter="goToGrade(grade.id)"
          @keydown.space.prevent="goToGrade(grade.id)"
        >
          <div class="card-icon">{{ grade.icon }}</div>
          <div class="card-title">{{ grade.name }}</div>
          <div class="card-desc">开始学习之旅</div>
        </div>
      </div>
      
      <div class="footer-tip">
        <p>💡 使用遥控器方向键选择，确认键进入</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores'
import { grades } from '../data/questions'

const router = useRouter()
const userStore = useUserStore()

function goToGrade(gradeId) {
  router.push(`/grade/${gradeId}`)
}
</script>

<style scoped>
.home {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.home-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
}

.grade-card {
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.grade-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  opacity: 0;
  transition: opacity 0.3s;
}

.grade-card:hover::before,
.grade-card:focus::before {
  opacity: 1;
}

.footer-tip {
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 20px;
  margin-top: 40px;
}
</style>
