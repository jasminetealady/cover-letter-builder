<template>
  <div class="Connect tab-component">
    <h3>Why you are interested in working for this company?</h3>
    <section>
      <label><textarea v-model="store.coverLetter.reasonApplying"/></label>
    </section>

    <section class="themes">
      <h3>Themes Highlighted</h3>
      <label :key="theme.id" v-for="theme in store.coverLetter.userThemes">
        <input
          type="checkbox"
          @input="store.coverLetter.toggleTheme(theme)"
          :value="store.coverLetter.isChecked(theme)"
        />
        <span>{{ theme.name }}</span>
      </label>
    </section>
  </div>
</template>

<script>
export default {
  inject: ['store']
}
</script>
