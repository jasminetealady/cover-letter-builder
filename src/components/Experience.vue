<template>
  <div class="Experience tab-component">
    <h3>Introduction and Experience</h3>
    <section>
      <label>
        <span>Company Name</span>
        <input type="text" v-model="store.coverLetter.companyApplyingTo" />
      </label>
      <label>
        <span>Position Title</span>
        <input type="text" v-model="store.coverLetter.positionApplyingTo" />
      </label>
    </section>
    <section>
      <label>
        <span>Previous Position</span>
        <input
          type="text"
          v-model="store.coverLetter.previousOrCurrentPosition"
        />
      </label>
      <label>
        <span>Previous Company</span>
        <input
          type="text"
          v-model="store.coverLetter.previousOrCurrentCompany"
        />
      </label>
      <label>
        <span>I currently work here</span>
        <input
          class="checkbox"
          type="checkbox"
          v-model="store.coverLetter.isCurrentlyEmployed"
        />
      </label>
      <label>
        <span>What did you do? Use an action verb</span>
        <input type="text" v-model="store.coverLetter.firstPositionAction" />
      </label>
      <label>
        <span>Let's say you said 'managed'. Who or what did you manage?</span>
        <input type="text" v-model="store.coverLetter.firstPositionNoun" />
      </label>
      <label>
        <span>With what tools or technologies?</span>
        <input type="text" v-model="store.coverLetter.firstPositionTools" />
      </label>
    </section>
    <section>
      <label>
        <span>Second to Last Company</span>
        <input type="text" v-model="store.coverLetter.secondPreviousCompany" />
      </label>
      <label>
        <span>Second to Last Position</span>
        <input type="text" v-model="store.coverLetter.secondPreviousPosition" />
      </label>
      <label>
        <span>What did you do? Use an action verb</span>
        <input type="text" v-model="store.coverLetter.secondPositionAction" />
      </label>
      <label>
        <span>Let's say you said 'managed'. Who or what did you manage?</span>
        <input type="text" v-model="store.coverLetter.secondPositionNoun" />
      </label>
      <label>
        <span>With what tools or technologies?</span>
        <input type="text" v-model="store.coverLetter.secondPositionTools" />
      </label>
    </section>
  </div>
</template>

<script>
export default {
  inject: ['store']
}
</script>
