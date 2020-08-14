<template>
  <div class="Connect tab-component">
    <h3>Why you are interested in working for this company?</h3>
    <section>
      <label><textarea v-model="store.coverLetter.reasonApplying"/></label>
    </section>

    <div>
      <h3>Themes Highlighted</h3>

      <div class="add-themes">
        <a v-if="!addThemeMode" @click.prevent="addThemeMode = true" href="#"
          >+ Add Theme</a
        >
        <p>
          Choose a theme that you see in job posts. Add a corresponding sentence
          or two and give your theme a label
        </p>
        <Theme @collapse="addThemeMode = false" v-if="addThemeMode" />
      </div>

      <div class="themes" v-if="areThemes">
        <h3>Themes</h3>
        <label :key="theme.id" v-for="theme in store.coverLetter.userThemes">
          <input
            class="checkbox"
            type="checkbox"
            @input="store.coverLetter.toggleTheme(theme)"
            :checked="store.coverLetter.isChecked(theme)"
          />
          <span>{{ theme.label }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import Theme from './Theme'
export default {
  inject: ['store'],
  components: { Theme },
  data() {
    return {
      addThemeMode: false
    }
  },
  computed: {
    areThemes() {
      return this.store.coverLetter.userThemes.length
    }
  }
}
</script>
