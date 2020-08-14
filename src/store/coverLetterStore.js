import Vue from 'vue'

const coverLetterStore = new Vue({
  data() {
    return {
      companyApplyingTo: '',
      positionApplyingTo: '',
      previousOrCurrentCompany: '',
      previousOrCurrentPosition: '',
      firstPositionAction: 'built',
      firstPositionNoun: 'web applications',
      firstPositionTools:
        'Vue, VueX, JavaScript, SCSS, HTML, Firebase and CraftCMS',
      secondPreviousCompany: '',
      secondPreviousPosition: 'Software Engineers',
      secondPositionAction: 'developed',
      secondPositionNoun: 'the front end for our MVP',
      secondPositionTools:
        'Vue, VueX, and Vue Apollo to interact with our MongoDB back end via GraphQL',
      isCurrentlyEmployed: false,
      reasonApplying: '',
      signOff: 'Look forward to hearing from you,',
      thingsYouBring: [
        'learn and adapt quicklyys',
        'am communicative, responsive, kind, and considerate in my dealings with others',
        'am eager to learn from mentors and happy to mentor as well. I always explain technical issues in a way everyone can understand',
        'have full stack experience: am able to hop into different areas as needed',
        'am a unicorn: equal parts design and development minded'
      ],
      themes: [],
      userThemes: [
        {
          id: 1,
          name: 'Design',
          chunk:
            "I saw that you emphasize the importance of design fidelity in your post. I'm passionate about design and have a natural eye for detail. The most pleasurable aspect of being a developer to me is building something not only functional, but beautiful and user friendly."
        },
        {
          id: 2,
          name: 'Digital Agency',
          chunk:
            'I want to work for a digital agency most notably because I am passionate about branding and design. I like to be part of a team that is always working on new and beautiful projects that help clients grow their businesses and web presence.'
        },
        {
          id: 3,
          name: 'E-commerce',
          chunk:
            "I'm passionate about working in e-commerce as not only doing I have a passion for branding and design, but as an online shopper myself, I understand what brand and user experiences I gravitate to. As a former business owner, I love the feeling of building something that helps clients generate more business."
        },
        {
          id: 4,
          name: 'Fintech',
          chunk:
            "At a time when millennials and the working class are struggling financially, I believe it's important to make banking as easy as possible. With more time being spent at home and in person contact being reduced it's important now more than ever to give people secure online banking options."
        },
        {
          id: 5,
          name: 'UI/UX',
          chunk:
            'User interface and experience have always been important to me as I intuitively understand and am impacted by my own user experiences as well. I believe making a product easy to use goes a long way in its success.'
        },
        {
          id: 6,
          name: 'Diversity and Inclusion',
          chunk:
            "It's great to hear that you are making strides towards diversity and inclusion. As a Woman in Tech, this shows me that you want me to be here and I want to be here too!"
        }
      ]
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
        const filteredThemes = themes.filter(it => it.name !== theme.name)
        this.themes = filteredThemes
      }
    },
    isChecked(theme) {
      return this.themes.includes(theme)
    }
  }
})

export default coverLetterStore
