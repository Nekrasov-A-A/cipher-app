<template>
  <input
    v-model="currentValue"
    @input="$emit('update:modelValue', currentValue)"
    class="input"
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps<{
  modelValue: string | number;
}>();
let currentValue = ref(props.modelValue);
</script>

<style lang="sass" scoped>
.input
  padding: .3em
  outline: none
  border: 1px solid blue
</style>
