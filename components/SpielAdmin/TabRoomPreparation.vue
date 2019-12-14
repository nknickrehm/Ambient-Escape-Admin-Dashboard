<template>
  <div>
    <next-button @nextTab="$emit('nextTab')" />
  </div>
</template>

<script>
import NextButton from '../NextButton'
export default {
  name: 'TabRoomPreparation',
  components: { NextButton }
}
</script>

<style scoped>

</style>
