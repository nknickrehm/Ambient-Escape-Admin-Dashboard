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
              <td>{{ player.email.length > 0 ? player.email : 'N/A' }}</td>
              <td>{{ getDeviceForPlayer(index) }}</td>
              <td>{{ player.accepted ? 'Ja' : 'Nein' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="section">
      <h2 class="is-size-3">Spiel starten</h2>
      <br>
      <p v-if="!valid">
        <span class="tag is-danger is-light">Bitte vervollständige die Angaben und Todos in allen Teilschritten!</span>
        <br><br>
      </p>
      <p v-if="valid">
        <span class="tag is-success is-light">Das Spiel ist startklar!</span>
        <br><br>
      </p>

      <button :disabled="!valid" @click="startGame" class="button is-success">
        Spiel starten
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TabFinalPreparation',
  data () {
    return {
      players: [],
      valid: false
    }
  },
  created () {
    const storedPlayers = this.$store.getters['players/getPlayers']
    this.players = JSON.parse(JSON.stringify(storedPlayers))
    this.validate()
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
    },
    validate () {
      let valid = true
      this.players.forEach((player) => {
        if (player.name.length < 1 || player.email.length < 1 || !player.accepted) { valid = false }
      })

      const sumDevices = this.players.reduce((acc, player) => acc + player.device, 0)
      if (sumDevices !== 2) { valid = false } // if all devices are distributed, the players device attributes sum up to 2

      this.valid = valid
    }
  }
}
</script>

<style scoped>

</style>
