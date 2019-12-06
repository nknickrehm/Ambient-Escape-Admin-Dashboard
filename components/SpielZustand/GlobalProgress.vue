<template>
  <div class="globalWrapper">
    <div class="timer">
      <p>{{ hours }} : {{ minutes }} : {{ seconds }}</p>
    </div>
    <Progressbar :progress="globalProgress" class="globalProgressBar" />
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
      now: Math.trunc(new Date().getTime() / 1000),
      date: Math.trunc((new Date().getTime() + 45 * 60000) / 1000)
    }
  },
  computed: {
    seconds () {
      const value = (this.date - this.now) % 60
      if (value.toString().length <= 1) {
        return '0' + value.toString()
      }
      return value.toString()
    },

    minutes () {
      const value = Math.trunc((this.date - this.now) / 60) % 60
      if (value.toString().length <= 1) {
        return '0' + value.toString()
      }
      return value.toString()
    },

    hours () {
      const value = Math.trunc((this.date - this.now) / 60 / 60) % 24
      if (value.toString().length <= 1) {
        return '0' + value.toString()
      }
      return value.toString()
    },

    globalProgress () {
      return this.$store.getters['logs/getGlobalProgress']
    }
  },
  mounted () {
    // console.log('TEST1')
    window.setInterval(() => {
      // console.log('TEST')
      this.now = Math.trunc(new Date().getTime() / 1000)
    }, 1000)
  },
  methods: {}
}
</script>

<style scope>
.globalWrapper {
  text-align: center;
  max-width: 600px;
  padding: 5px 5px 5px 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.timer {
  margin: 0 auto;
  background-color: #686868;
  color: white;
  font-weight: 700;
  font-size: 2rem;
  padding: 2px 2px 2px 2px;
  margin-top: 10px;
  max-width: 200px;
}

.globalProgressBar {
  margin-top: 15px !important;
  margin-bottom: 15px !important;
}
</style>
