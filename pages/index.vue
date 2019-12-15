<template>
  <div class="container">
    <tab-bar :tabs="tabs" @change="changeTab" />
    <spiel-admin v-if="gameState === GameState.setup" @changeGameState="changeGameState" />
    <spiel-zustand v-if="gameState === GameState.running" @changeGameState="changeGameState" />
  </div>
</template>

<script>
import SpielAdmin from '../components/SpielAdmin/SpielAdmin'
import SpielZustand from '../components/SpielZustand/SpielZustand'
import RoomOverview from '../components/SpielZustand/RoomOverview'
import GameState from '../helpers/gamestate'
import TabBar from '../components/TabBar'

export default {
  components: { SpielZustand, SpielAdmin, TabBar, RoomOverview },
  data () {
    return {
      gameState: 0,
      tabs: [
        {
          isActive: true,
          label: 'Start',
          icon: 'home',
          component: 'tab-index'
        },
        {
          isActive: false,
          label: 'Spielzustand',
          icon: 'list',
          component: 'tab-game-state'
        },
        {
          isActive: false,
          label: 'Aufbau des Raumes',
          icon: 'list',
          component: 'tab-setup-list'
        },
        {
          isActive: false,
          label: 'Spielerinformationen',
          icon: 'users',
          component: 'tab-player-info'
        }
      ]
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
    },
    changeTab (tabIndex) {
      this.tabs.map((tab) => {
        tab.isActive = this.tabs.indexOf(tab) === tabIndex
      })
    },
    startGame () {
      // TODO set link active
      // this.tabs[0].isActive = false
      // this.tabs[1].isActive = true
      // // vue bughandling
      // this.tabs.push(0)
      // this.tabs.pop()
      this.changeGameState(GameState.running)
    }
  }
}
</script>

<style></style>
