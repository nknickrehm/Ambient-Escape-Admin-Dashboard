<template>
  <div class="log">
    <h2 class="log__header tile__header">
      Ereignis-log
    </h2>
    <ul class="log-list">
      <li v-for="log in logs" :key="log.date.getTime()" class="log-item columns">
        <div class="column is-one-fifth">
          {{ log.date.getHours() }}:{{ log.date.getMinutes() }}:{{ log.date.getSeconds() }}
        </div>
        <div class="column is-four-fifths">
          {{ log.text }}
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Log',
  props: {
    logs: {
      required: true,
      type: Array,
      validator: (v) => {
        let isValid = true
        for (let i = 0; i < v.length; i += 1) {
          isValid = isValid && (typeof v[i].text === 'string') && (typeof v[i].date === 'object')
        }
      },
      default: () => []
    }
  }
}
</script>
<style scoped>
ul{
  list-style: none;
  padding: 0.25rem;
}
.log__header.tile__header{
  height: 30px;
  font-size: 1rem;
  margin-bottom: 1rem;
}
.log-list{
   overflow-y: auto;
  overflow-x: hidden;
  height: 8rem;
}
.log{
    border: 1px solid #686868;
    width: 90%;
    margin: auto;
    margin-bottom: 1rem;
}
div.column.is-four-fifths,
div.column.is-one-fifth{
  padding-top: .25rem;
  padding-bottom: .25rem;
}
</style>
