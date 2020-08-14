<template>
  <div class="You tab-component">
    <section>
      <h3>
        What do you bring to the table in terms of what they are looking for?
      </h3>

      <label
        :key="thing"
        v-for="(thing, index) in store.coverLetter.thingsYouBring"
      >
        <span>Skill {{ index + 1 }}</span>
        <textarea type="text" :value="thing" />
      </label>
    </section>
  </div>
</template>

<script>
export default {
  inject: ['store']
}
</script>
