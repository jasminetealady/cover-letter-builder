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
        <EditorInput v-model="store.coverLetter.previousOrCurrentPosition" /> at
        <EditorInput v-model="store.coverLetter.previousOrCurrentCompany" />, I
        <EditorInput v-model="store.coverLetter.firstPositionAction" />
        {{ ' ' }}
        <EditorInput v-model="store.coverLetter.firstPositionNoun" /> with
        <EditorInput v-model="store.coverLetter.firstPositionTools" />. In my
        previous experience as a
        <EditorInput v-model="store.coverLetter.secondPreviousPosition" /> at
        <EditorInput v-model="store.coverLetter.secondPreviousCompany" />, I
        <EditorInput v-model="store.coverLetter.secondPositionAction" /> the
        <EditorInput v-model="store.coverLetter.secondPositionNoun" /> with
        <EditorInput v-model="store.coverLetter.secondPositionTools" />.
      </p>
      <br />
      <p>
        I am interested in working for
        <EditorInput v-model="store.coverLetter.companyApplyingTo" />
        because <EditorInput v-model="store.coverLetter.reasonApplying" />.
        {{ ' ' }}
        <span :key="theme.id" v-for="theme in store.coverLetter.themes"
          >{{ theme.chunk }}{{ ' ' }}</span
        >
      </p>
      <br />
      <p>
        I believe I am worthy of your time interviewing for this position, as
        not only do I believe I have the technical ability you require, but I
       <ul>
         <li :key="thing" v-for="thing in store.coverLetter.thingsYouBring">{{thing}}</li>
       </ul>
      </p>
      <br />
      <p>
        <EditorInput v-model="store.coverLetter.signOff" />
      </p>
      <p>Luxe</p>
    </div>
  </main>
</template>

<script>
import EditorInput from './EditorInput'
export default {
  inject: ['store'],
  components: { EditorInput },
  computed: {
    isCurrentlyEmployed() {
      return this.store.coverLetter.isCurrentlyEmployed
    }
  }
}
</script>

<style lang="scss"></style>
