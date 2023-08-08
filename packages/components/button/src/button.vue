<template>
  <button
    class="d-button"
    :class="classList"
    :disabled="disabled"
    :plain="plain"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { buttonProps, buttonEmits } from './button';

  defineOptions({
    name: 'DButton'
  });
  const props = defineProps(buttonProps);
  const emits = defineEmits(buttonEmits);
  const classList = computed(() => {
    const { type, size, disabled, plain } = props || {};
    // console.log(type);
    return [
      {
        // 这里使用了方括号和反引号，来构造一个字符串模板。 给属性重命名，使用时直接使用type,size...即可
        // 这个字符串模板中包含了 d-button--${type}，d-button--${size}，和 'is-disabled' 这三个属性名。
        [`d-button--${type}`]: type,
        [`d-button--${size}`]: size,
        ['is-disabled']: disabled,
        ['is-plain']: plain
      }
    ];
  });

  const handleClick = (evt: MouseEvent): void => {
    emits('click', evt);
  };
</script>

<style lang="scss" scoped></style>
