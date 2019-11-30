<template>
  <div class="key-list">
    <i v-for="(key,index) in keys" :key="`${key}-${index}`" :class="{'key--disabled': !key}" class="fas fa-key fa-3x" aria-hidden="true" />
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
    }
  }
}
</script>
<style>
  .key-list{
    display: flex;
    justify-content: space-around;
    margin: 1.5rem 0;
  }

  .key-list i {
    height: 40px;
    width: 40px;
  }
  .key--disabled{
    color: #CCC;
  }
</style>
