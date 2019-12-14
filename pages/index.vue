<template>
  <div class="container">
    <tab-bar :tabs="tabs" @change="changeTab" />
    <!-- eslint-disable-next-line vue/require-component-is -->
    <component :is="tab.component" v-for="(tab, index) in tabs" :key="index" v-if="tab.isActive" />
  </div>
</template>

<script>
import GameState from '../helpers/gamestate'
import TabBar from '../components/TabBar'
import TabIndex from '../components/SpielAdmin/TabIndex'
import TabPlayerPreparation from '../components/SpielAdmin/TabPlayerPreparation'
import TabRoomPreparation from '../components/SpielAdmin/TabRoomPreparation'
import TabFinalPreparation from '../components/SpielAdmin/TabFinalPreparation'
import TabGameState from '../components/SpielZustand/SpielZustand'

export default {
  components: { TabBar, TabIndex, TabRoomPreparation, TabPlayerPreparation, TabFinalPreparation, TabGameState },
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
          label: 'Vorbereitung des Raumes',
          icon: 'hospital-alt',
          component: 'tab-room-preparation'
        },
        {
          isActive: false,
          label: 'Vorbereitung der Spieler',
          icon: 'users',
          component: 'tab-player-preparation'
        },
        {
          isActive: false,
          label: 'Vorbereitung abschließen',
          icon: 'list',
          component: 'tab-final-preparation'
        },
        {
          isActive: false,
          label: 'Spiel überwachen',
          icon: 'tv',
          component: 'tab-game-state'
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
      this.$emit('changeGameState', GameState.running)
    }
  }
}
</script>

<style></style>
