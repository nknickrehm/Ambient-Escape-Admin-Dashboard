<template>
  <div class="tabs is-centered is-boxed">
    <ul>
      <li v-for="(tab, index) in tabs" :key="index" :class="{ 'is-active': tab.isActive }">
        <a @click="$emit('change', index)" :class="{ 'has-text-grey-light': tab.disabled, disabled: tab.disabled }">
          <span class="icon is-small">
            <i :class="`fas fa-${tab.icon}`" aria-hidden="true" />
          </span>
          <span>{{ tab.label }}</span>
          <tab-indicator v-if="tab.progress" :store-getter="tab.progress" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import TabIndicator from './TabIndicator'
export default {
  name: 'TabBar',
  components: { TabIndicator },
  props: {
    tabs: Array
  },
  computed: {
    isGameStarted () {
      return (this.$store.state.gamestate.currentState === 1)
    }
  }
}
</script>

<style scoped>
.disabled{
  pointer-events: none;
}
</style>
