<template>
  <div class="globalWrapper">
      <div class="timer">
          <p>{{globalTime}}</p>
      </div>
      <Progressbar :progress="progress" class="globalProgressBar" />
  </div>
</template>

<script>
import Progressbar from './Progressbar.vue'

export default {
  name: 'GlobalProgress',
  components: {
    Progressbar
  },
  data () {
    return {
      progress: 70,
      globalTime: '99:99:99'
    }
  },
  methods: {}
}
</script>

<style scope>
    .globalWrapper {
        text-align:center;
        max-width: 600px;
        padding: 5px 5px 5px 5px;
        box-shadow: 0 0 10px rgba(0,0,0,.2);
    }

    .timer {
        margin: 0 auto;
        background-color:#686868;
        color: white;
        font-weight:700;
        font-size:2rem;
        padding: 2px 2px 2px 2px;
        margin-top:10px;
        max-width:200px;
    }

    .globalProgressBar{
        margin-top:15px !important;
        margin-bottom:15px !important;
    }
</style>
