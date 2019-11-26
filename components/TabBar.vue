<template>
  <div class="tabs is-centered is-boxed">
    <ul>
      <li v-for="(tab, index) in tabs" :class="tab.isActive ? 'is-active' : ''">
        <a @click="$emit('change', index)">
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
  props: ['tabs']
}
</script>

<style scoped></style>
