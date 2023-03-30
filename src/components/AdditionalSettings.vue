<template>
  <section class="container">
    <h3 class="container__headline">{{ additionalSettings.title }}</h3>
    <slot></slot>
  </section>
</template>

<script lang="ts" setup>
interface AdditionalSettingsInterface {
  title: string;
  pattern: string;
  value: string | number;
}

const props = defineProps<{
  additionalSettings: AdditionalSettingsInterface;
}>();
</script>

<style lang="sass" scoped>
.container
  display: flex
  padding: .6em .3em
  &__headline
    margin-right: .3em
</style>
