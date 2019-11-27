<template>
  <div>
    Test
    <button @click="stopGame" class="button is-danger">
      Spiel beenden
    </button>
  </div>
</template>

<script>
import GameState from '../../helpers/gamestate'
export default {
  name: 'SpielZustand',
  methods: {
    stopGame () {
      this.$emit('changeGameState', GameState.setup)
    }
  }
}
</script>

<style scoped></style>
