<template>
  <div class="page subject-select">
    <button class="back-btn" @click="router.back()" tabindex="0">←</button>
    
    <h1 class="page-title">{{ selectedGrade?.name }} · 选择学科</h1>
    
    <div class="card-grid">
      <div 
        v-for="subject in availableSubjects" 
        :key="subject.id"
        class="card subject-card"
        :class="`subject-${subject.id}`"
        tabindex="0"
        @click="goToQuiz(subject.id)"
        @keydown.enter="goToQuiz(subject.id)"
        @keydown.space.prevent="goToQuiz(subject.id)"
      >
        <div class="card-icon">{{ subject.icon }}</div>
        <div class="card-title">{{ subject.name }}</div>
        <div class="card-desc">开始练习</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'
import { grades, subjects } from '../data/questions'

const router = useRouter()
const route = useRoute()
const gradeId = route.params.gradeId

const selectedGrade = computed(() => grades.find(g => g.id === gradeId))

const availableSubjects = computed(() => {
  // 科学从三年级开始
  return subjects.filter(s => s.id !== 'science' || parseInt(gradeId) >= 3)
})

function goToQuiz(subjectId) {
  router.push(`/quiz/${subjectId}/${gradeId}`)
}
</script>

<style scoped>
.subject-select {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>
