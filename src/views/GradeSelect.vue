<template>
  <div class="page grade-select" :style="{ background: gradeColor }">
    <button class="back-btn" @click="router.back()" tabindex="0">←</button>
    
    <h1 class="page-title">{{ selectedGrade?.name }} 课程</h1>
    
    <div class="card-grid">
      <div 
        v-for="subject in availableSubjects" 
        :key="subject.id"
        class="card subject-card"
        :class="`subject-${subject.id}`"
        tabindex="0"
        @click="goToSubject(subject.id)"
        @keydown.enter="goToSubject(subject.id)"
        @keydown.space.prevent="goToSubject(subject.id)"
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
import { ref, computed } from 'vue'
import { grades, subjects } from '../data/questions'

const router = useRouter()
const route = useRoute()
const gradeId = route.params.id

const selectedGrade = computed(() => grades.find(g => g.id === gradeId))
const gradeColor = computed(() => selectedGrade.value?.color || '#667eea')

const availableSubjects = computed(() => {
  // 科学从三年级开始
  return subjects.filter(s => s.id !== 'science' || parseInt(gradeId) >= 3)
})

function goToSubject(subjectId) {
  router.push(`/subject/${gradeId}?subject=${subjectId}`)
}
</script>

<style scoped>
.grade-select {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>
