<template>
  <div class="container">
    <!-- eslint-disable-next-line vue/require-component-is -->
    <component :is="tab.component" v-for="(tab, index) in tabs" :key="index" v-if="tab.isActive" />
    <button @click="startGame" class="button is-primary">
      Spiel starten
    </button>
  </div>
</template>

<script>
import TabBar from '../TabBar'
import GameState from '../../helpers/gamestate'
import TabIndex from './TabIndex'
import TabPlayerInfo from './TabPlayerInfo'
import TabSetupList from './TabSetupList'

export default {
  name: 'SpielAdmin',
  components: { TabIndex, TabBar, TabPlayerInfo, TabSetupList },
  data () {
    return {
      tabs: [
        {
          isActive: true,
          label: 'Start',
          icon: 'home',
          component: 'tab-index'
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
  methods: {
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

<style scoped></style>
