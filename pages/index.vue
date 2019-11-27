<template>
  <div class="container">
    <spiel-admin v-if="gameState === GameState.setup" @changeGameState="changeGameState" />
    <spiel-zustand v-if="gameState === GameState.running" @changeGameState="changeGameState" />
  </div>
</template>

<script>
import SpielAdmin from '../components/SpielAdmin/SpielAdmin'
import SpielZustand from '../components/SpielZustand/SpielZustand'
import GameState from '../helpers/gamestate'

export default {
  components: { SpielZustand, SpielAdmin },
  data () {
    return {
      gameState: 0
    }
  },
  computed: {
    GameState () { return GameState }
  },
  created () {
    this.gameState = this.$store.state.gamestate.currentState
  },
  methods: {
    changeGameState (newState) {
      this.$store.commit('gamestate/change', newState)
      this.gameState = newState
    }
  }
}
</script>

<style></style>
