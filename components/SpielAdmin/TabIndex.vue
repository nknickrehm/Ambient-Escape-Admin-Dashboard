<template>
  <div class="container">
  <h2 class="is-size-3">Willkommen auf der Spielleiteransicht des Ambient Escaperooms</h2>
      <p>Diese Weboberfläche leitet dich durch den Start des Raums und ermöglicht dir anschließend die Überwachung des laufenden Spiels.</br>Im nächsten Tab wird dir eine Anleitung zum Aufbau des Raums angezeigt, die du dir auch ausdrucken kannst. Die Anleitung muss abgearbeitet werden, bevor die Spieler ankommen.</br>Im darauffolgenden Tab folgen Vorbereitungen, die erst vorgenommen werden können, wenn alle Spieler anwesend sind. Dort kannst du auch die Teilnahmeerklärung und die weiteren vor dem Spielstart relevanten Dokumente ausdrucken.</br>Abschließend hast du noch einmal die Möglichkeit, die Eingaben zu überprüfen und das Spiel zu starten.</p>
    <br />
    <br />
    <next-button @nextTab="$emit('nextTab')" />
  </div>
</template>

<script>
import NextButton from '../NextButton'
export default {
  name: 'TabIndex',
  components: { NextButton }
}
</script>

<style scoped></style>
