<template>
  <div class="roomWrapper">
    <div class="mapWrapper">
      <svg width="100%" height="700" xmlns="http://www.w3.org/2000/svg">
        <rect
          height="500"
          width="500"
          y="100"
          x="400"
          stroke-width="0"
          fill="#dedede"
        />

        <rect
          height="120"
          width="250"
          y="300"
          x="640"
          stroke-width="0"
          fill="#000000"
        />

        <g :visibility="element1">
          <line
            x1="770"
            y1="350"
            x2="950"
            y2="350"
            style="stroke:rgb(255,0,0);stroke-width:2"
          />

          <text x="960" y="350" fill="black">Gruppe 1: Schlüssel 1</text>
        </g>

        <ellipse
          :opacity="element1O"
          @mouseenter="element1O = .7; element1='show'"
          @mouseleave="element1O = 1; element1='hidden'"
          ry="20"
          rx="20"
          cy="350"
          cx="770"
          stroke-width="0"
          fill="red"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoomOverview',
  components: {
  },
  data () {
    return {
      element1O: 1,
      element1: 'hidden'
    }
  },
  methods: {
    toggleText (name) {
      console.log(name)
      this.name = 'hidden'
    }
  }
}

</script>
<style scope>
    .roomWrapper {
        min-width:100%;
        min-height:700px;
        margin:5px 5px 5px 5px;
        box-shadow: 0 0 10px rgba(0,0,0,.2);
    }

    .mapWrapper {
        min-width:100%;
        min-height:700px;
    }

    .map {
        background-color:lightgrey;
        height:500px;
        width:500px;
    }
</style>
