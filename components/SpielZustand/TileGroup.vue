<template>
  <div>
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
import Progressbar from './Progressbar.vue'
import Log from './Log.vue'

export default {
  name: 'TileGroup',
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
  }
}

</script>
