<template>
  <div class="progress-container">
    <progress :value="progress" class="progress is-large is-success" max="100">
      {{ progress }}%
    </progress>
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
  margin: 3rem 1rem;
  position: relative
}
.progress-value{
  position: absolute;
  font-weight: 700;
  font-size: 20px;
  color: white;
   left: 50%;
  top: 50%;
  margin-top: -15px;
}
</style>
