<template>
  <div>
    <section class="section">
      <h2 class="is-size-3">Aufbauanleitung drucken</h2>
      <p>Du kannst dir die Anleitung zum Aufbau des Raums ausdrucken, um sie während der Abarbeitung nachlesen zu können.
        Alternativ kannst du natürlich auch die folgende Checkliste als Anleitung verwenden.
        Als PDF enthält die Anleitung jedoch ausführlichere Beschreibungen.</p>
      <br>
      <a href="/sample.pdf" target="_blank" class="button is-link">
        <span class="icon">
          <i class="fa fa-print"></i>
        </span>
        <span>Drucken</span>
      </a>
    </section>

    <section class="section">
      <h2 class="is-size-3">Checkliste</h2>
      <p>Unabhängig davon, ob du dir die Aufbauanleitung ausgedruckt hast oder die folgende Checkliste benutzt,
        müssen alle Punkte der Checkliste als erledigt markiert werden, damit das Spiel gestartet werden kann.
        <br />
        Bitte stelle sicher, dass wirklich alle Schritte erledigt sind, anstatt einfach alles abzuhaken.</p>
      <br>
      <div class="field is-horizontal" v-for="(todo, index) in todos" :key="index">
        <div class="field-label is-normal">
          <label class="label">{{ todo.label }}</label>
        </div>
        <div class="field-body">
          <div class="field is-narrow">
            <div class="control">
              <label class="checkbox">
                <input @change="saveTodos" type="checkbox" v-model="todo.status">
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <p v-if="!valid">
        <span class="tag is-danger is-light">
          Die Angaben auf dieser Seite sind unvollständig, sodass das Spiel nicht gestartet werden kann!</span>
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
  name: 'TabRoomPreparation',
  components: { NextButton },
  data () {
    return {
      roomTodos: []
    }
  },
  created () {
    const storedTodos = this.$store.getters['room/getTodos']
    this.todos = JSON.parse(JSON.stringify(storedTodos))
  },
  methods: {
    saveTodos () {
      const newTodos = JSON.parse(JSON.stringify(this.todos))
      this.$store.commit('room/update', newTodos)
    }
  },
  computed: {
    valid () {
      return this.$store.getters['room/getValid']
    }
  }
}
</script>

<style scoped>

</style>
