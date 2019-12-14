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
import TabPlayerPreparation from './TabPlayerPreparation'
import TabRoomPreparation from './TabRoomPreparation'
import TabFinalPreparation from './TabFinalPreparation'

export default {
  name: 'SpielAdmin',
  components: { TabBar, TabIndex, TabRoomPreparation, TabPlayerPreparation, TabFinalPreparation },
  props: {
    tabs: {
      type: Array,
      default () { return [] }
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
