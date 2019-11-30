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

export default {
  name: 'TileGroup',
  components: {
    Progressbar,
    Log,
    KeyList
  },
  data () {
    return {
      groupData: {
        a: {
          progress: 70,
          log: [
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna justo, accumsan mollis imperdiet id', date: new Date() }, { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna justo, accumsan mollis imperdiet id', date: new Date() }, { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna justo, accumsan mollis imperdiet id', date: new Date() }, { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna justo, accumsan mollis imperdiet id', date: new Date() }
          ],
          keysFound: [true]
        },
        d: {
          progress: 10,
          log: [
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna justo, accumsan mollis imperdiet id', date: new Date() }
          ],
          keysFound: [true, false, false]
        },
        e: {
          progress: 30,
          log: [
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna justo, accumsan mollis imperdiet id', date: new Date() }, { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna justo, accumsan mollis imperdiet id', date: new Date() }, { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna justo, accumsan mollis imperdiet id', date: new Date() }, { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna justo, accumsan mollis imperdiet id', date: new Date() }
          ],
          keysFound: [true, false, false, true]
        },
        f: {
          progress: 50,
          log: [
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna justo, accumsan mollis imperdiet id', date: new Date() }, { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna justo, accumsan mollis imperdiet id', date: new Date() }, { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna justo, accumsan mollis imperdiet id', date: new Date() }, { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna justo, accumsan mollis imperdiet id', date: new Date() }
          ],
          keysFound: [ false, false, false, false, false ]
        }
      }
    }
  }
  //  TODO
  // methods:{
  //   autoScrollToBottom(){
  //   }
  // }
}

</script>
<style scoped>
.tile.is-child.is-6{
  width: 48%;
}
.tile.is-parent{
  justify-content: space-evenly;
}
</style>
