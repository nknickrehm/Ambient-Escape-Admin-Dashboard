<template>
  <div class="tabs is-centered is-boxed">
    <ul>
      <li v-for="(tab, index) in tabs" :key="index" :class="tab.isActive ? 'is-active' : ''">
        <a @click="$emit('change', index)" :class="{disabled: (isGameStarted && tab.label === 'Start') || (!isGameStarted && tab.label !== 'Start')}">
          <span class="icon is-small">
            <i :class="`fas fa-${tab.icon}`" aria-hidden="true" />
          </span>
          <span>{{ tab.label }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  props: {
    tabs: {
      type: Array,
      default () { return [] }
    }
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
