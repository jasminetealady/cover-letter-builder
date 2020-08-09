<template>
  <nav class="Sidebar">
    <div>
      <label>
        <span>Company Name</span>
        <input type="text" v-model="store.coverLetter.companyApplyingTo" />
      </label>
      <label>
        <span>Position Title</span>
        <input type="text" v-model="store.coverLetter.positionApplyingTo" />
      </label>
    </div>
    <div>
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
    </div>
    <div>
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
    </div>
  </nav>
</template>

<script>
export default {
  inject: ['store']
}
</script>
