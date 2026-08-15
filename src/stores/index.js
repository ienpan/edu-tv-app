import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '',
    avatar: '👦',
    level: 1,
    experience: 0,
    coins: 0,
    streak: 0,
    completedQuizzes: [],
    achievements: []
  }),
  
  getters: {
    totalScore: (state) => state.experience * 10,
    maxLevel: () => 50
  },
  
  actions: {
    addExperience(amount) {
      this.experience += amount
      // 升级检查
      const newLevel = Math.floor(this.experience / 100) + 1
      if (newLevel > this.level) {
        this.level = newLevel
        // 触发升级动画
      }
    },
    
    addCoins(amount) {
      this.coins += amount
    },
    
    completeQuiz(quizData) {
      this.completedQuizzes.push({
        ...quizData,
        date: new Date().toISOString()
      })
      this.addExperience(quizData.score)
      this.addCoins(quizData.score * 2)
    },
    
    setStreak(days) {
      this.streak = days
    }
  }
})

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    currentQuestions: [],
    currentIndex: 0,
    score: 0,
    answers: [],
    isCompleted: false
  }),
  
  actions: {
    startQuiz(questions) {
      this.currentQuestions = questions
      this.currentIndex = 0
      this.score = 0
      this.answers = []
      this.isCompleted = false
    },
    
    answerQuestion(index, answer) {
      this.answers[index] = answer
    },
    
    nextQuestion() {
      if (this.currentIndex < this.currentQuestions.length - 1) {
        this.currentIndex++
      } else {
        this.calculateScore()
        this.isCompleted = true
      }
    },
    
    calculateScore() {
      let correct = 0
      this.currentQuestions.forEach((q, i) => {
        if (this.answers[i] === q.correctAnswer) {
          correct++
        }
      })
      this.score = correct * 10
    }
  }
})
