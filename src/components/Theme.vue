<template>
  <div class="Theme">
    <label>
      <div class="label-wrapper">
        <span>Label</span
        ><span @click="collapse" class="collapse">+ collapse</span>
      </div>
      <input v-model="theme.label" type="text" />
    </label>
    <label>
      <span>Text</span>
      <textarea v-model="theme.text" />
    </label>
    <button @click="saveTheme" class="btn">Save</button>
  </div>
</template>

<script>
export default {
  inject: ['store'],
  data() {
    return {
      theme: {
        label: '',
        text: ''
      },
      isShowing: true
    }
  },
  methods: {
    collapse() {
      this.$emit('collapse')
    },
    saveTheme() {
      this.store.coverLetter.userThemes.push(this.theme)
      this.theme = {
        label: '',
        text: ''
      }
    }
  }
}
</script>
