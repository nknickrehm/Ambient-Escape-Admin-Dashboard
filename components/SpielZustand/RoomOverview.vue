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

        <rect
          element="medikamentenspender"
          height="30"
          width="50"
          y="100"
          x="850"
          stroke-width="0"
          fill="#000000"
        />

        <g :visibility="medikamentenspender">
          <line
            x1="875"
            y1="115"
            x2="950"
            y2="115"
            style="stroke:rgb(255,0,0);stroke-width:2"
          />

          <text x="960" y="120" fill="black">Gruppe A: Medikamentenmischer</text>
        </g>

        <ellipse
          :opacity="medikamentenspenderO"
          @mouseenter="medikamentenspenderO = .7; medikamentenspender='show'"
          @mouseleave="medikamentenspenderO = 1; medikamentenspender='hidden'"
          ry="10"
          rx="10"
          cy="115"
          cx="875"
          stroke-width="0"
          fill="red"
        />

        <ellipse
          ry="20"
          rx="20"
          cy="275"
          cx="875"
          stroke-width="0"
          fill="#000000"
        />

        <g :visibility="medikamente">
          <line
            x1="875"
            y1="275"
            x2="950"
            y2="275"
            style="stroke:rgb(255,0,0);stroke-width:2"
          />

          <text x="960" y="280" fill="black">Papierkorb:</text>
          <text x="975" y="295" fill="black">Gruppe A: Medikamente</text>
        </g>

        <ellipse
          :opacity="medikamenteO"
          @mouseenter="medikamenteO = .7; medikamente='show'"
          @mouseleave="medikamenteO = 1; medikamente='hidden'"
          ry="10"
          rx="10"
          cy="275"
          cx="875"
          stroke-width="0"
          fill="red"
        />

        <rect
          height="35"
          width="35"
          y="430"
          x="855"
          stroke-width="0"
          fill="#000000"
        />

        <g :visibility="nachtschrank">
          <line
            y1="447"
            x1="872"
            x2="950"
            y2="447"
            style="stroke:rgb(255,0,0);stroke-width:2"
          />

          <text x="960" y="450" fill="black">Nachtschrank:</text>
          <text x="975" y="465" fill="black">Gruppe D: RFID-Reader, Schloss</text>
        </g>

        <ellipse
          :opacity="nachtschrankO"
          @mouseenter="nachtschrankO = .7; nachtschrank='show'"
          @mouseleave="nachtschrankO = 1; nachtschrank='hidden'"
          ry="10"
          rx="10"
          cy="447"
          cx="872"
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
      medikamentenspenderO: 1,
      medikamentenspender: 'hidden',
      medikamenteO: 1,
      medikamente: 'hidden',
      nachtschrank: '1',
      nachtschrankO: 'hidden'
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
