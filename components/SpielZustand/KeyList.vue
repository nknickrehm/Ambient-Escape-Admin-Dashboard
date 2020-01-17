<template>
  <div class="key-list">
    <i v-for="(key,index) in keys" :key="`${key}-${index}`" :class="{'key--disabled': progress < key}" class="fas fa-key fa-2x" aria-hidden="true" />
  </div>
</template>
<script>
export default {
  name: 'KeyList',
  props: {
    keys: {
      required: true,
      default: () => [],
      type: Array,
      validator: (v) => {
        let isValid = true
        for (let i = 0; i < v.length; i += 1) {
          isValid = isValid && (typeof v[i] === 'boolean')
        }
        return isValid
      }
    },
    progress: {
      required: true,
      default: () => 0,
      type: Number
    }
  }
}
</script>
<style>
  .key-list{
    display: flex;
    justify-content: space-around;
    margin-top: 1.5rem;
  }

  .key-list i {
    height: 40px;
    width: 40px;
  }
  .key--disabled{
    color: #CCC;
  }
</style>
