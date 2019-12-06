<template>
  <div>
    <!-- Test
    <button @click="stopGame" class="button is-danger">
      Spiel beenden
    </button> -->
    <div id="top-bar">
      <GlobalProgress id="progress" />
    </div>
    <tile-group />
  </div>
  <!-- TODO: KEEP ALIVE -->
</template>

<script>
import GameState from '../../helpers/gamestate'
import TileGroup from './TileGroup.vue'
import GlobalProgress from './GlobalProgress.vue'
export default {
  name: 'SpielZustand',
  components: {
    TileGroup,
    GlobalProgress
  },
  methods: {
    stopGame () {
      this.$emit('changeGameState', GameState.setup)
    }
  }
}
</script>

<style>
#top-bar{
  width:100%;
  margin-bottom:10px;
}

#progress{
  margin:0 auto;
}

.tile__header{
  background: #686868;
  color: white;
  font-weight:700;
  text-align: center;
  height: 40px;
  font-size: 1.5rem;
}
.tile.is-child{
  box-shadow: 0 0 10px rgba(0,0,0,.2);
}
</style>
