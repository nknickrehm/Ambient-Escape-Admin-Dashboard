<template>
  <div>
    <!-- Test
    <button @click="stopGame" class="button is-danger">
      Spiel beenden
    </button> -->
    <tile-group />
  </div>
</template>

<script>
import GameState from '../../helpers/gamestate'
import TileGroup from './TileGroup.vue'
export default {
  name: 'SpielZustand',
  components: {
    TileGroup
  },
  methods: {
    stopGame () {
      this.$emit('changeGameState', GameState.setup)
    }
  }
}
</script>

<style>
.tile__header{
  background: #686868;
  color: white;
  font-weight:700;
  text-align: center;
  height: 50px;
  font-size: 2rem;
}
.tile.is-child{
  box-shadow: 0 0 10px rgba(0,0,0,.2);
}
</style>
