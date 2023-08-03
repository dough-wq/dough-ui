<template>
  <i class="d-icon" :style="style">
    <slot></slot>
  </i>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { iconProps } from './icon';

  defineOptions({
    name:'DIcon'
  })
  const props = defineProps(iconProps)

  const style = computed(() => {
    const {size,color} = props || {}
    if(!size && !color) return {}
    return {
      ...(size ? {'font-size': size + 'px'} : {}),
      ...(color ? {color:color} : {})
    }
  })
</script>
