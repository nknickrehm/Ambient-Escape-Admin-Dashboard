<template>
  <div>
    <section class="section">
      <h2 class="is-size-3">Spielerinformationen</h2>
      <p>Bitte gib zunächst die Namen und E-Mail Adressen der vier Spieler ein!</p>
      <br>
      <div class="columns is-multiline">
        <div v-for="(player, index) in players" :key="index" class="column is-one-quarter-widescreen is-half-tablet">
          <h3 class="is-size-4">
            Spieler {{ index + 1 }}
          </h3>
          <div class="field">
            <div class="control">
              <input v-model="player.name" class="input" type="text" placeholder="Name" @blur="savePlayers">
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input v-model="player.email" class="input" type="email" placeholder="E-Mail" @blur="savePlayers">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="is-size-3">Gerätezuweisung</h2>
      <p>Drei der Spieler bekommen ein Gerät zugewiesen, welches sie im Verlauf des Escape Rooms benötigen werden. Gib nun an,
         welche Spieler welches Gerät bekommen werden!</p>
      <br>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Smartphone mit AR-App</label>
        </div>
        <div class="field-body">
          <div class="field is-narrow">
            <div class="control">
              <div class="select is-fullwidth">
                <select v-model="devices[0]" @change="updateDevice(0)">
                  <option default value="-1">Bitte wählen</option>
                  <option
                    v-for="(player, index) in players"
                    :key="index"
                    :value="index">{{ player.name.length > 0 ? player.name : `Spieler ${index + 1}`}}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Smartphone mit QR-App</label>
        </div>
        <div class="field-body">
          <div class="field is-narrow">
            <div class="control">
              <div class="select is-fullwidth">
                <select v-model="devices[1]" @change="updateDevice(1)">
                  <option default value="-1">Bitte wählen</option>
                  <option
                    v-for="(player, index) in players"
                    :key="index"
                    :value="index">{{ player.name.length > 0 ? player.name : `Spieler ${index + 1}`}}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Kopfhörer</label>
        </div>
        <div class="field-body">
          <div class="field is-narrow">
            <div class="control">
              <div class="select is-fullwidth">
                <select v-model="devices[2]" @change="updateDevice(2)">
                  <option value="-1">Bitte wählen</option>
                  <option
                    v-for="(player, index) in players"
                    :key="index"
                    :value="index">{{ playerName(index) }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="is-size-3">Sicherheitsbelehrung, Teilnahmeerklärung und Storyeinleitung</h2>
      <p>Bitte drucke die Unterlagen für die 4 Spieler aus!
        Alle Spieler müssen unterzeichnen, bevor du fortfahren kannst.</p>
      <br>
      <a href="/sample.pdf" target="_blank" class="button is-link">
        <span class="icon">
          <i class="fa fa-print"></i>
        </span>
        <span>Drucken</span>
      </a>
      <br>
      <br>
      <div v-for="(player, index) in players" :key="index" class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">{{ playerName(index) }} hat unterschrieben</label>
        </div>
        <div class="field-body">
          <div class="field is-narrow">
            <div class="control">
              <label class="checkbox">
                <input @change="savePlayers" v-model="player.accepted" type="checkbox">
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <p v-if="!valid">
        <span class="tag is-danger is-light">Die Angaben auf dieser Seite sind unvollständig, sodass das Spiel nicht gestartet werden kann!</span>
        <br><br>
      </p>
      <p v-if="valid">
        <span class="tag is-success is-light">Die Angaben auf dieser Seite sind vollständig!</span>
        <br><br>
      </p>
      <next-button @nextTab="$emit('nextTab')" />
    </section>
  </div>
</template>

<script>
import NextButton from '../NextButton'
export default {
  name: 'TabPlayerInfo',
  components: { NextButton },
  data () {
    return {
      players: [],
      devices: [-1, -1, -1]
    }
  },
  created () {
    const storedPlayers = this.$store.getters['players/getPlayers']
    this.players = JSON.parse(JSON.stringify(storedPlayers))
    this.players.forEach((player, index) => {
      if (player.device >= 0) { this.devices[player.device] = index }
    })
  },
  computed: {
    valid () {
      return this.$store.getters['players/getValid']
    }
  },
  methods: {
    updateDevice (index) {
      const val = this.devices[index]
      const previousPlayer = this.players.find(player => (player.device === index))
      if (previousPlayer) { previousPlayer.device = -1 }
      if (val >= 0) {
        this.players[val].device = index
      }

      if (this.devices[index] < 0) {
        return
      }

      for (let i = 0; i < this.devices.length; i++) {
        if (i !== index) {
          if (this.devices[i] === this.devices[index]) {
            this.devices[i] = -1
          }
        }
      }

      this.savePlayers()
    },
    savePlayers () {
      const newPlayers = JSON.parse(JSON.stringify(this.players))
      this.$store.commit('players/update', newPlayers)
    },
    playerName (i) {
      return this.players[i].name.length > 0 ? this.players[i].name : `Spieler ${i + 1}`
    }
  }
}
</script>

<style scoped></style>
