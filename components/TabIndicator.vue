<template>
  <div>
    &nbsp;
    <span
      class="tag is-success is-light"
      :class="{ 'is-danger': !status, 'is-success': status }">
      {{ status ? 'Vollständig' : 'Unvollständig' }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'TabIndicator',
  props: {
    storeGetter: String
  },
  computed: {
    status () {
      return this.$store.getters[this.storeGetter]
    }
  }
}
</script>

<style scoped>

</style>
