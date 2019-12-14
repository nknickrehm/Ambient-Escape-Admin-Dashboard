<template>
  <div class="container">
    <next-button @nextTab="$emit('nextTab')" />
  </div>
</template>

<script>
import NextButton from '../NextButton'
export default {
  name: 'TabIndex',
  components: { NextButton }
}
</script>

<style scoped></style>
