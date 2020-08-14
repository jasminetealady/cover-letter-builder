<template>
  <div class="SignOff tab-component">
    <h3>Sign Off</h3>
    <section>
      <label>
        <span
          >How would you like to sign off? Make it your own. Be authentic.</span
        >
        <input type="text" v-model="store.coverLetter.signOff" />
      </label>
    </section>
  </div>
</template>

<script>
export default {
  inject: ['store']
}
</script>
