<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child is-6">
          <h1 class="tile__header">
            Gruppe A
          </h1>
          <key-list :keys="groupData.a.keysFound" />
          <progressbar :progress="groupData.a.progress" />
          <log :logs="groupData.a.log" />
        </article>
        <article class="tile is-child is-6">
          <h1 class="tile__header">
            Gruppe D
          </h1>
          <key-list :keys="groupData.d.keysFound" />
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
          <key-list :keys="groupData.e.keysFound" />
          <progressbar :progress="groupData.e.progress" />
          <log :logs="groupData.e.log" />
        </article>
        <article class="tile is-child is-6">
          <h1 class="tile__header">
            Gruppe F
          </h1>
          <key-list :keys="groupData.f.keysFound" />
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
    this.socket = IO('http://192.168.178.30:8080/')
    this.socket.on('newLogEntry', ({ groupID, data: text, timestamp }) => {
      this.$store.commit('logs/addToLog', {
        groupID: groupID.toLowerCase(),
        logEntry: { text, timestamp: new Date(timestamp) }
      })
    })
    this.socket.on('updateRiddleProgress', (data) => {
      this.$store.commit('logs/updateProgress', data)
    })
  }
  //  TODO
  // methods:{
  //   autoScrollToBottom(){
  //   }
  // }
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
