<template>
  <div>
    <!-- Test
    <button @click="stopGame" class="button is-danger">
      Spiel beenden
    </button> -->
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child is-6">
          <h1 class="tile__header">
            Guppe A
          </h1>
          <progressbar :progress="70" />
          <log :logs="log" />
        </article>
        <article class="tile is-child is-6">
          <h1 class="tile__header">
            Guppe B
          </h1>
          <progressbar :progress="70" />
          <log :logs="log" />
        </article>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child is-6">
          <h1 class="tile__header">
            Guppe C
          </h1>
          <progressbar :progress="70" />
          <log :logs="log" />
        </article>
        <article class="tile is-child is-6">
          <h1 class="tile__header">
            Guppe D
          </h1>
          <progressbar :progress="70" />
          <log :logs="log" />
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import GameState from '../../helpers/gamestate'
import Progressbar from './Progressbar.vue'
import Log from './Log.vue'
export default {
  name: 'SpielZustand',
  components: {
    Progressbar,
    Log
  },
  data () {
    return {
      log: [
        { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna justo, accumsan mollis imperdiet id', date: new Date() }, { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna justo, accumsan mollis imperdiet id', date: new Date() }, { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna justo, accumsan mollis imperdiet id', date: new Date() }, { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna justo, accumsan mollis imperdiet id', date: new Date() }
      ]
    }
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
  border: 1px solid #686868;
}
</style>
