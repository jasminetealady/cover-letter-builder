<template>
  <input
    ref="input"
    v-if="editMode"
    class="blank"
    type="text"
    :value="value"
    v-on="listeners"
    :style="{ width: width }"
    @keydown.enter="editMode = false"
    @blur="editMode = false"
  />
  <span v-else @click="openInput" ref="span" class="blank-verb">{{
    value
  }}</span>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      editMode: false,
      width: null
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => {
          this.$emit('input', event.target.value)
        }
      }
    }
  },
  methods: {
    openInput() {
      this.setWidth()
      this.editMode = !this.editMode
      this.$nextTick(() => {
        this.$refs.input.select()
      })
    },
    setWidth() {
      this.width = this.$refs.span.offsetWidth + 'px'
    }
  }
}
</script>

<style lang="scss"></style>
