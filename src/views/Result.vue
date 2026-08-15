<template>
  <div class="page result-page">
    <button class="back-btn" @click="router.back()" tabindex="0">←</button>
    
    <div class="result-card animate-fade-in">
      <div class="result-emoji animate-bounce">🎉</div>
      <div class="result-title">练习完成！</div>
      <div class="result-score">{{ quizStore.score }} 分</div>
      <div class="result-message">{{ message }}</div>
      
      <div class="result-stats">
        <div class="stat">
          <span class="stat-label">获得经验</span>
          <span class="stat-value">+{{ experienceEarned }} XP</span>
        </div>
        <div class="stat">
          <span class="stat-label">获得金币</span>
          <span class="stat-value">+{{ coinsEarned }} 💰</span>
        </div>
      </div>
      
      <div class="result-buttons">
        <button class="result-btn primary" @click="retryQuiz" tabindex="0">
          再来一次
        </button>
        <button class="result-btn secondary" @click="goBack" tabindex="0">
          返回
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'
import { useQuizStore, useUserStore } from '../stores'
import { getRandomQuestions } from '../data/questions'

const router = useRouter()
const route = useRoute()
const quizStore = useQuizStore()
const userStore = useUserStore()

const gradeId = route.params.gradeId
const subjectId = route.params.subject

const message = computed(() => {
  const percent = quizStore.score / (quizStore.currentQuestions.length * 10) * 100
  if (percent === 100) return '太棒了！全部答对！🌟'
  if (percent >= 80) return '非常优秀！继续加油！💪'
  if (percent >= 60) return '不错哦！再接再厉！👍'
  return '继续练习，你会越来越棒的！💪'
})

const experienceEarned = computed(() => quizStore.score)
const coinsEarned = computed(() => quizStore.score * 2)

function retryQuiz() {
  quizStore.startQuiz(getRandomQuestions(subjectId, gradeId))
  router.push(`/quiz/${subjectId}/${gradeId}`)
}

function goBack() {
  router.push(`/grade/${gradeId}`)
}
</script>

<style scoped>
.result-page {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  align-items: center;
  justify-content: center;
}

.result-card {
  animation: fadeIn 0.5s ease;
}

.result-emoji {
  font-size: 120px;
  margin-bottom: 20px;
}

.result-title {
  font-size: 48px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 10px;
}

.result-score {
  font-size: 120px;
  font-weight: 700;
  background: linear-gradient(135deg, #FF6B35, #1A936F);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 20px 0;
}

.result-message {
  font-size: 32px;
  color: #4A4A6A;
  margin-bottom: 40px;
}

.result-stats {
  display: flex;
  gap: 60px;
  margin-bottom: 40px;
}

.stat {
  text-align: center;
}

.stat-label {
  display: block;
  font-size: 24px;
  color: #4A4A6A;
  margin-bottom: 10px;
}

.stat-value {
  display: block;
  font-size: 36px;
  font-weight: 700;
  color: #FF6B35;
}

.result-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.result-btn {
  padding: 20px 50px;
  border-radius: 16px;
  font-size: 32px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.result-btn.primary {
  background: linear-gradient(135deg, #FF6B35, #ff8c5a);
  color: white;
}

.result-btn.secondary {
  background: linear-gradient(135deg, #004E89, #0066b3);
  color: white;
}

.result-btn:hover {
  transform: scale(1.05);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.animate-bounce {
  animation: bounce 1s ease infinite;
}

.animate-fade-in {
  animation: fadeIn 0.5s ease forwards;
}
</style>
