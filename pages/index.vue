<template>
  <div class="container" @click.alt="debug = !debug">
    <tab-bar :tabs="tabs" @change="changeTab" />
    <!-- eslint-disable-next-line vue/require-component-is -->
    <component
      :is="tab.component"
      v-for="(tab, index) in tabs"
      :key="index"
      v-if="tab.isActive"
      @nextTab="changeTab(index + 1)"
      @stopGame="stopGame"
      @startGame="startGame"/>
    <section v-if="debug">
      <h2 class="is-size-3">Debugging</h2>
      <a @click="activateAllTabs" class="button is-warning">Activate all tabs</a>
      <a @click="generateDummyPlayers" class="button is-warning">Generate Players</a>
      <a @click="startGame" class="button is-warning">Start the game</a>
      <a @click="stopGame" class="button is-warning">Stop the game</a>
    </section>
  </div>
</template>

<script>
import GameState from '../helpers/gamestate'
import TabBar from '../components/TabBar'
import TabIndex from '../components/SpielAdmin/TabIndex'
import TabPlayerPreparation from '../components/SpielAdmin/TabPlayerPreparation'
import TabRoomPreparation from '../components/SpielAdmin/TabRoomPreparation'
import TabFinalPreparation from '../components/SpielAdmin/TabFinalPreparation'
import TabGameState from '../components/SpielZustand/SpielZustand'

export default {
  components: { TabBar, TabIndex, TabRoomPreparation, TabPlayerPreparation, TabFinalPreparation, TabGameState },
  data () {
    return {
      gameState: 0,
      debug: false,
      tabs: [
        {
          isActive: true,
          label: 'Start',
          icon: 'home',
          component: 'tab-index'
        },
        {
          isActive: false,
          label: 'Vorbereitung des Raumes',
          icon: 'hospital-alt',
          component: 'tab-room-preparation'
        },
        {
          isActive: false,
          label: 'Vorbereitung der Spieler',
          icon: 'users',
          component: 'tab-player-preparation'
        },
        {
          isActive: false,
          label: 'Vorbereitung abschließen',
          icon: 'list',
          component: 'tab-final-preparation'
        },
        {
          isActive: false,
          label: 'Spiel überwachen',
          icon: 'tv',
          component: 'tab-game-state'
        }
      ]
    }
  },
  computed: {
    GameState () { return GameState }
  },
  created () {
    this.gameState = this.$store.state.gamestate.currentState
    this.updateTabStates()
  },
  methods: {
    changeGameState (newState) {
      this.$store.commit('gamestate/change', newState)
      this.gameState = newState
      this.updateTabStates()
    },
    startGame () {
      this.changeGameState(GameState.running)
      this.changeTab(4)
    },
    stopGame () {
      this.changeGameState(GameState.setup)
    },
    changeTab (tabIndex) {
      this.tabs.map((tab) => {
        tab.isActive = this.tabs.indexOf(tab) === tabIndex
      })
    },
    updateTabStates () {
      this.activateAllTabs()
      switch (this.gameState) {
        case GameState.running: this.disableTabs(0, 2); break
        case GameState.setup: this.disableTabs(4, 4); break
        default: break
      }
    },
    activateAllTabs () {
      this.tabs.map(tab => (tab.disabled = false))
      this.tabs.sort() // or else view does not update
    },
    disableTabs (startRange, endRange) {
      this.activateAllTabs()
      for (let i = startRange; i <= endRange; i++) {
        this.tabs[i].disabled = true
      }
    },
    shuffle (a) {
      let j, x, i
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        x = a[i]
        a[i] = a[j]
        a[j] = x
      }
      return a
    },
    generateDummyPlayers () {
      const names = [
        'Stefania Pawlak',
        'Tony Hauptman',
        'Mackenzie Chavera',
        'Chantel Igo',
        'Andra Throop',
        'Otis Owsley',
        'Roma Middleton',
        'Pamala Hollandsworth',
        'Hiroko Heitman',
        'Kazuko Schewe',
        'Sparkle Vonruden',
        'Rueben Gimbel',
        'Colleen Macko',
        'Janiece Harshberger',
        'Sherika Osgood',
        'Blaine Sheffey',
        'Trinity Goggin',
        'Wen Banker',
        'Madie Veach',
        'Leila Hopple',
        'Siu Steckler',
        'Rosanna Borders',
        'Barbie Frith',
        'Lucille Burdine',
        'Janette Biscoe',
        'Hang Jacobi',
        'Neida Vesely',
        'Bill Westfield',
        'Riley Meder',
        'Vi Medrano',
        'Dane Paulding',
        'Devorah Huyser',
        'Hanna Hibbert',
        'Stevie Sherrard',
        'Fern Nigro',
        'Tajuana Rector',
        'Danial Routh',
        'Joel Sevigny',
        'Marg Mckenzie',
        'Nikia Overcash',
        'Geraldine Renfrow',
        'Tawna Moffit',
        'Harold Lena',
        'Marine Strelow',
        'Zoila Maclachlan',
        'Sunshine Hochman',
        'Elisa Dona',
        'Fabian Heatherly',
        'Ethan Holsinger',
        'Cherie Kroh'
      ]

      const players = []

      for (let i = 0; i < 4; i++) {
        const name = this.shuffle(names)[0]
        const email = `${name.split(' ')[0]}.${name.split(' ')[1]}@example.com`
        players.push({
          name,
          email,
          device: i - 1,
          accepted: true
        })
      }

      this.$store.commit('players/update', players)
    }
  }
}
</script>

<style></style>
