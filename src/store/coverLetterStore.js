import Vue from 'vue'

const coverLetterStore = new Vue({
  data() {
    return {
      userName: 'Your Name',
      companyApplyingTo: 'Company Name',
      positionApplyingTo: 'Position Title',
      previousOrCurrentCompany: 'Previous Company',
      previousOrCurrentPosition: 'Previous Position Title',
      firstPositionAction: 'did',
      firstPositionNoun: 'all the things',
      firstPositionTools: 'these technologies',
      secondPreviousCompany: 'Second to Last Company',
      secondPreviousPosition: 'Second to Last Position Title',
      secondPositionAction: 'did',
      secondPositionNoun: 'all the things',
      secondPositionTools: 'these technologies',
      isCurrentlyEmployed: false,
      reasonApplying: 'reason',
      signOff: 'Look forward to hearing from you,',
      themes: [],
      userThemes: [],
      thingsYouBring: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5']
    }
  },
  computed: {
    letter() {
      const recentExperience = this.isCurrentlyEmployed
        ? 'current position'
        : 'most recent experience'
      return `I'm writing to express interest in your ${this.positionApplyingTo} position. In my ${recentExperience} as an ${this.previousOrCurrentPosition} at ${this.previousOrCurrentCompany}, I ${this.firstPositionAction} ${this.firstPositionNoun} with ${this.firstPositionTools}. In my previous experience as a ${this.secondPreviousPosition} at ${this.secondPreviousCompany} I ${this.secondPreviousCompanyAction} ${this.secondPreviousCompanyNoun} using ${this.secondPreviousCompanyTools}`
    }
  },
  methods: {
    toggleTheme(theme) {
      if (!this.themes.includes(theme)) {
        this.themes.push(theme)
      } else {
        const themes = [...this.themes]
        const filteredThemes = themes.filter(it => it.label !== theme.label)
        this.themes = filteredThemes
      }
    },
    addSkill(index, value) {
      Vue.set(this.thingsYouBring, index, value)
    },
    isChecked(theme) {
      return this.themes.includes(theme)
    }
  }
})

export default coverLetterStore
