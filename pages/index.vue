<template>
  <div class="container" @click.alt="debug = !debug">
    <div v-for="(error, index) in errors" :key="index" class="notification is-danger">
      <button class="delete"></button>
      {{ error.msg }}
    </div>
    <tab-bar :tabs="tabs" @change="changeTab" />
    <!-- eslint-disable-next-line vue/require-component-is -->
    <component
      :is="tab.component"
      v-for="(tab, index) in tabs"
      :key="index"
      v-if="tab.isActive"
      :storyline="storyline"
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
import Backend from '../helpers/backend'
import TabBar from '../components/TabBar'
import TabIndex from '../components/SpielAdmin/TabIndex'
import TabPlayerPreparation from '../components/SpielAdmin/TabPlayerPreparation'
import TabRoomPreparation from '../components/SpielAdmin/TabRoomPreparation'
import TabFinalPreparation from '../components/SpielAdmin/TabFinalPreparation'
import TabGameState from '../components/SpielZustand/SpielZustand'
import TabRoomOverview from '../components/SpielZustand/RoomOverview'

export default {
  components: { TabBar, TabIndex, TabRoomPreparation, TabPlayerPreparation, TabFinalPreparation, TabGameState, TabRoomOverview },
  data () {
    return {
      gameState: 0,
      debug: false,
      errors: [],
      gameid: null,
      storyline: null,
      tabs: [
        {
          isActive: true,
          label: 'Start',
          icon: 'home',
          component: 'tab-index'
        },
        {
          isActive: false,
          label: 'Raumvorbereitung',
          icon: 'hospital-alt',
          component: 'tab-room-preparation',
          progress: 'room/getValid'
        },
        {
          isActive: false,
          label: 'Spielervorbereitung',
          icon: 'users',
          component: 'tab-player-preparation',
          progress: 'players/getValid'
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
        },
        {
          isActive: false,
          label: 'Raum überwachen',
          icon: 'hospital-alt',
          component: 'tab-room-overview'
        }
      ]
    }
  },
  computed: {
    GameState () { return GameState }
  },
  async created () {
    const { running, game } = await Backend.getGame()
    this.gameid = game.gameid
    this.storyline = await Backend.getStoryline(this.gameid)
    if (running) {
      this.changeGameState(GameState.running)
      this.changeTab(4)
    } else {
      this.changeGameState(GameState.setup)
    }
    const players = await Backend.getPlayers(this.gameid)
    this.$store.commit('players/update', players)
  },
  methods: {
    changeGameState (newState) {
      this.$store.commit('gamestate/change', newState)
      this.gameState = newState
      this.updateTabStates()
    },
    async startGame () {
      const players = this.$store.getters['players/getPlayers']

      const { isSuccess, msg } = await Backend.addPlayers(players)
      if (!isSuccess) {
        this.errors.push({ msg })
      } else {
        await Backend.startGame(this.gameid)
        this.changeGameState(GameState.running)
        this.changeTab(4)
      }
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
        case GameState.setup: this.disableTabs(4, 5); break
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
        const mail = `${name.split(' ')[0]}.${name.split(' ')[1]}@example.com`
        players.push({
          name,
          mail,
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
