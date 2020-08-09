<template>
  <main class="CoverLetter">
    <h1>Cover Letter</h1>
    <div class="editor" contenteditable>
      <p>
        To the team at
        <EditorInput v-model="store.coverLetter.companyApplyingTo" />,
      </p>
      <br />
      <p>
        I'm writing to express interest in your
        <EditorInput v-model="store.coverLetter.positionApplyingTo" />
        position. In my
        {{
          isCurrentlyEmployed ? 'current position' : 'most recent experience'
        }}
        as an
        <EditorInput v-model="store.coverLetter.previousOrCurrentPosition" />
        at
        <EditorInput v-model="store.coverLetter.previousOrCurrentCompany" />, I
        <EditorInput v-model="store.coverLetter.firstPositionAction" />
        {{ ' ' }}
        <EditorInput v-model="store.coverLetter.firstPositionNoun" />
        with
        <EditorInput v-model="store.coverLetter.firstPositionTools" />. In my
        previous experience as a
        <EditorInput v-model="store.coverLetter.secondPreviousPosition" />
        at
        <EditorInput v-model="store.coverLetter.secondPreviousCompany" />, I
        <EditorInput v-model="store.coverLetter.secondPositionAction" /> the
        <EditorInput v-model="store.coverLetter.secondPositionNoun" /> with
        <EditorInput v-model="store.coverLetter.secondPositionTools" />.
      </p>
    </div>
  </main>
</template>

<script>
import EditorInput from './EditorInput'
export default {
  inject: ['store'],
  components: { EditorInput },
  data() {
    return {
      hidden: true
    }
  },
  computed: {
    company() {
      return this.store.coverLetter.companyApplyingTo
    },
    position() {
      return this.store.coverLetter.positionApplyingTo
    },
    previousOrCurrentCompany() {
      return this.store.coverLetter.previousOrCurrentCompany
    },
    previousOrCurrentPosition() {
      return this.store.coverLetter.previousOrCurrentPosition
    },
    secondPreviousCompany() {
      return this.store.coverLetter.secondPreviousCompany
    },
    secondPreviousPosition() {
      return this.store.coverLetter.secondPreviousPosition
    },
    isCurrentlyEmployed() {
      return this.store.coverLetter.isCurrentlyEmployed
    },
    firstPositionAction() {
      return this.store.coverLetter.firstPositionAction
    },
    firstPositionNoun() {
      return this.store.coverLetter.firstPositionNoun
    }
  }
}
</script>

<style lang="scss"></style>
