<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child is-6">
          <h1 class="tile__header">
            Gruppe A
          </h1>
          <key-list :keys="groupData.a.threshholdArray" :progress="groupData.a.progress" />
          <progressbar :progress="groupData.a.progress" />
          <log :logs="groupData.a.log" />
        </article>
        <article class="tile is-child is-6">
          <h1 class="tile__header">
            Gruppe D
          </h1>
          <key-list :keys="groupData.d.threshholdArray" :progress="groupData.d.progress" />
          <progressbar :progress="groupData.d.progress" />
          <log :logs="groupData.d.log" />
        </article>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child is-6">
          <h1 class="tile__header">
            Gruppe E
          </h1>
          <key-list :keys="groupData.e.threshholdArray" :progress="groupData.e.progress" />
          <progressbar :progress="groupData.e.progress" />
          <log :logs="groupData.e.log" />
        </article>
        <article class="tile is-child is-6">
          <h1 class="tile__header">
            Gruppe F
          </h1>
          <key-list :keys="groupData.f.threshholdArray" :progress="groupData.f.progress" />
          <progressbar :progress="groupData.f.progress" />
          <log :logs="groupData.f.log" />
        </article>
      </div>
    </div>
  </div>
</template>
<script>
import Progressbar from './Progressbar.vue'
import Log from './Log.vue'
import KeyList from './KeyList.vue'
import IO from '~/node_modules/socket.io-client/dist/socket.io'

export default {
  name: 'TileGroup',
  components: {
    Progressbar,
    Log,
    KeyList
  },
  data () {
    return {
      socket: null
    }
  },
  computed: {
    groupData () {
      return this.$store.state.logs.groupLogs
    }
  },
  mounted () {
    // TODO change url to the url of the main backend
    this.socket = IO('http://127.0.0.1:8080/')
    this.socket.on('newLogEntry', ({ groupID, data: text, timestamp }) => {
      this.$store.commit('logs/addToLog', {
        groupID: groupID.toLowerCase(),
        logEntry: { text, timestamp: new Date(timestamp) }
      })
    })
    this.socket.on('riddles/updateProgress', (data) => {
      this.$store.commit('logs/updateProgress', data)
    })
  }
}
</script>
<style scoped>
.tile.is-child.is-6 {
  width: 48%;
}
.tile.is-parent {
  justify-content: space-evenly;
}
</style>
