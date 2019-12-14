<template>
  <div class="progress-container">
    <progress :value="progress" class="progress is-large is-success" max="100" />
    <p class="progress-value">
      {{ progress }} %
    </p>
  </div>
</template>

<script>
export default {
  name: 'Progressbar',
  props: {
    progress: {
      required: true,
      type: Number,
      validator: v => ((v >= 0) && (v <= 100)),
      default: () => 0
    }
  }
}
</script>

<style>
.progress.is-large{
  border-radius: 0px;
  height: 30px;
}
.progress-container{
  margin: 1.5rem 1rem;
  position: relative
}
.progress-value{
  position: absolute;
  font-weight: 700;
  font-size: 20px;
  color: #333;
   left: 50%;
  top: 50%;
  margin-top: -15px;
  margin-left: -15px;
}

progress.progress.is-large.is-success::-webkit-progress-value{
  background: #47da79;
  transition: width .5s;
}
 progress.progress.is-large.is-success::-moz-progress-bar{
  background: #47da79;
  transition: width .5s;
 }

</style>
