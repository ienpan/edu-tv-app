<template>
  <div class="page quiz-page">
    <button class="back-btn" @click="router.back()" tabindex="0">←</button>
    
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: progressPercent + '%' }"></div>
    </div>
    
    <div class="score-display">
      ⭐ {{ quizStore.score }} 分
    </div>
    
    <div class="quiz-container">
      <div class="question-card animate-fade-in" v-if="currentQuestion">
        <div class="question-number">
          第 {{ quizStore.currentIndex + 1 }} / {{ totalQuestions }} 题
        </div>
        <div class="question-text">{{ currentQuestion.q }}</div>
        
        <div class="options-grid">
          <button
            v-for="(option, index) in currentQuestion.options"
            :key="index"
            class="option-btn"
            :class="{
              'correct': answered && option === currentQuestion.correct,
              'wrong': answered && quizStore.answers[quizStore.currentIndex] !== currentQuestion.correct && option === quizStore.answers[quizStore.currentIndex],
              'selected': quizStore.answers[quizStore.currentIndex] === option
            }"
            tabindex="0"
            @click="selectAnswer(option)"
            @keydown.enter="selectAnswer(option)"
            @keydown.space.prevent="selectAnswer(option)"
          >
            {{ ['A', 'B', 'C', 'D'][index] }}. {{ option }}
          </button>
        </div>
        
        <div class="feedback" v-if="answered">
          <p :class="isCorrect ? 'correct-msg' : 'wrong-msg'">
            {{ isCorrect ? '✅ 正确！太棒了！' : '❌ 不对哦，正确答案是：' + currentQuestion.correct }}
          </p>
        </div>
      </div>
      
      <button 
        v-if="answered" 
        class="next-btn"
        @click="nextQuestion"
        tabindex="0"
      >
        {{ quizStore.currentIndex < totalQuestions - 1 ? '下一题 →' : '查看结果 🎉' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import { useQuizStore, useUserStore } from '../stores'
import { getRandomQuestions } from '../data/questions'

const router = useRouter()
const route = useRoute()
const quizStore = useQuizStore()
const userStore = useUserStore()

const gradeId = route.params.gradeId
const subjectId = route.params.subject
const totalQuestions = 10
const answered = ref(false)
const isCorrect = ref(false)

// 初始化题目
if (quizStore.currentQuestions.length === 0) {
  const questions = getRandomQuestions(subjectId, gradeId, totalQuestions)
  quizStore.startQuiz(questions)
}

const currentQuestion = computed(() => quizStore.currentQuestions[quizStore.currentIndex])
const progressPercent = computed(() => 
  ((quizStore.currentIndex + 1) / totalQuestions) * 100
)

function selectAnswer(option) {
  if (answered.value) return
  
  quizStore.answerQuestion(quizStore.currentIndex, option)
  answered.value = true
  
  if (option === currentQuestion.value.correct) {
    isCorrect.value = true
    userStore.addExperience(10)
    userStore.addCoins(20)
  } else {
    isCorrect.value = false
  }
}

function nextQuestion() {
  answered.value = false
  quizStore.nextQuestion()
  
  if (quizStore.isCompleted) {
    router.push(`/result/${subjectId}/${gradeId}`)
  }
}
</script>

<style scoped>
.quiz-page {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
}

.question-card {
  animation: fadeIn 0.3s ease;
}

.feedback {
  margin-top: 30px;
  text-align: center;
}

.correct-msg {
  color: #00b894;
  font-size: 32px;
  font-weight: 600;
}

.wrong-msg {
  color: #d63031;
  font-size: 28px;
}

.next-btn {
  margin-top: 40px;
  padding: 20px 60px;
  background: linear-gradient(135deg, var(--primary), #ff8c5a);
  color: white;
  border: none;
  border-radius: 16px;
  font-size: 32px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.next-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.4);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
