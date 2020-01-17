<template>
  <div>
    <section class="section">
      <h2 class="is-size-3">Zusammenfassung der Spielerinformationen</h2>
      <br>
      <div class="table-container">
        <table class="table is-striped is-fullwidth">
          <thead>
          <tr>
            <th>Spieler ID</th>
            <th>Spieler Name</th>
            <th>Spieler E-Mail</th>
            <th>Spieler Gerät</th>
            <th>Spieler Unterschrift</th>
          </tr>
          </thead>
          <tbody>
            <tr v-for="(player, index) in players" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ player.name.length > 0 ? player.name : 'N/A' }}</td>
              <td>{{ player.mail.length > 0 ? player.mail : 'N/A' }}</td>
              <td>{{ getDeviceForPlayer(index) }}</td>
              <td>{{ player.accepted ? 'Ja' : 'Nein' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="section">
      <h2 class="is-size-3">Storyline</h2>
      <br>
      Dieses Spiel folgt Storyline {{ namedStoryline }}
    </section>

    <section class="section">
      <h2 class="is-size-3">Spiel starten</h2>
      <br>
      <p v-if="!valid">
        <span class="tag is-danger is-light">Bitte vervollständige die Angaben und Todos in allen Teilschritten!</span>
        <br><br>
      </p>
      <p v-if="valid && gameState !== 1">
        <span class="tag is-success is-light">Das Spiel ist startklar!</span>
        <br><br>
      </p>
      <p v-if="gameState === 1">
        <span class="tag is-success is-light">Das Spiel läuft bereits!</span>
        <br><br>
      </p>
      <button :disabled="!valid || gameState === 1" @click="startGame" class="button is-success">
        Spiel starten
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TabFinalPreparation',
  props: {
    storyline: {
      type: Object,
      default () {
        return { storyline: -1 }
      }
    }
  },
  data () {
    return {
      players: []
    }
  },
  created () {
    const storedPlayers = this.$store.getters['players/getPlayers']
    this.players = JSON.parse(JSON.stringify(storedPlayers))
  },
  computed: {
    valid () {
      return this.$store.getters['room/getValid'] && this.$store.getters['players/getValid']
    },
    gameState () {
      return this.$store.getters['gamestate/getState']
    },
    namedStoryline () {
      return this.storyline.storyline < 1 ? 'A' : 'B'
    }
  },
  methods: {
    startGame () {
      this.$emit('startGame')
    },
    getDeviceForPlayer (index) {
      switch (this.players[index].device) {
        case 0: return 'AR-App'
        case 1: return 'QR-App'
        case 2: return 'Kopfhörer'
        default: return 'Kein Gerät ausgewählt'
      }
    }
  }
}
</script>

<style scoped>

</style>
