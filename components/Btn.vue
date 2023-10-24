<template>
  <component
    :is="tag"
    :type="nativeType"
    :disabled="disabled || loading"
    class="btn-com">
    <slot name="loading">
      <i v-if="loading" class="fa fa-spinner fa-spin"></i>
    </slot>
    <slot></slot>
  </component>
</template>
<script>
export default {
  // name: 'btn',
  props: {
    tag: {
      type: String,
      default: "button"
    },
    round: Boolean,
    icon: Boolean,
    outline: Boolean,
    block: Boolean,
    loading: Boolean,
    disabled: Boolean,
    nativeType: {
      type: String,
      default: "button"
    },
  }
};
</script>
<style>
.btn-com{
  background-color: var(--color-2);
  padding: 10px 15px;
  color: white;
}
</style>
