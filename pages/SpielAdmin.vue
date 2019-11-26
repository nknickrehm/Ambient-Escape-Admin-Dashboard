<template>
  <div class="container">
    <tab-bar :tabs="tabs" @change="changeTab" />
    <!-- eslint-disable-next-line vue/require-component-is -->
    <component :is="tab.component" v-for="tab in tabs" v-if="tab.isActive" />
  </div>
</template>

<script>
import TabBar from '../components/TabBar'
import TabIndex from '../components/SpielAdmin/TabIndex'
import TabPlayerInfo from '../components/SpielAdmin/TabPlayerInfo'
import TabSetupList from '../components/SpielAdmin/TabSetupList'

export default {
  name: 'SpielAdmin',
  components: { TabIndex, TabBar, TabPlayerInfo, TabSetupList },
  methods: {
    changeTab (tabIndex) {
      this.tabs.map((tab) => {
        tab.isActive = this.tabs.indexOf(tab) === tabIndex
      })
    }
  },
  data () {
    return {
      tabs: [
        {
          isActive: true,
          label: 'Start',
          icon: 'home',
          component: 'tab-index'
        },
        {
          isActive: false,
          label: 'Aufbau des Raumes',
          icon: 'list',
          component: 'tab-setup-list'
        },
        {
          isActive: false,
          label: 'Spielerinformationen',
          icon: 'users',
          component: 'tab-player-info'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
