import Vue from 'vue'

const coverLetterStore = new Vue({
  data() {
    return {
      companyApplyingTo: 'Chime',
      positionApplyingTo: 'Frontend Engineer',
      previousOrCurrentCompany: 'Savvy Apps',
      previousOrCurrentPosition: 'App Developer',
      firstPositionAction: 'built',
      firstPositionNoun: 'web applications',
      firstPositionTools: 'Vue.js, JavaScript, SCSS, HTML, and Firebase',
      secondPreviousCompany: 'Speakfully',
      secondPreviousPosition: 'Software Engineer',
      secondPositionAction: 'developed',
      secondPositionNoun: 'the front end for our MVP',
      secondPositionTools:
        'Vue, VueX for state management, and Vue Apollo to interact with our MongoDB back end via GraphQL',
      isCurrentlyEmployed: false
    }
  },
  computed: {
    letter() {
      const recentExperience = this.isCurrentlyEmployed
        ? 'current position'
        : 'most recent experience'
      return `I'm writing to express interest in your ${this.positionApplyingTo} position. In my ${recentExperience} as an ${this.previousOrCurrentPosition} at ${this.previousOrCurrentCompany}, I ${this.firstPositionAction} ${this.firstPositionNoun} with ${this.firstPositionTools}. In my previous experience as a ${this.secondPreviousPosition} at ${this.secondPreviousCompany} I ${this.secondPreviousCompanyAction} ${this.secondPreviousCompanyNoun} using ${this.secondPreviousCompanyTools}`
    }
  }
})

export default coverLetterStore
