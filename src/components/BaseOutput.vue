<template>
  <section class="output">
    <div class="output__text">{{ output }}</div>
    <footer class="output__control">
      <button
        class="output__control__copy"
        :class="classes"
        @click="copyOutput"
        :disabled="!output"
      >
        <img
          src="../assets/images/content_copy_FILL0_wght400_GRAD0_opsz48.svg"
        />
      </button>
    </footer>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

const props = defineProps<{
  output: string;
}>();

let isClick = ref(false);

let classes = computed(() => {
  return { active: isClick.value };
});

const copyOutput = () => {
  navigator.clipboard.writeText(props.output);
  isClick.value = true;
  setTimeout(() => {
    isClick.value = false;
  }, 500);
};
</script>

<style lang="sass" scoped>
.output
  display: flex
  flex-direction: column
  border-top: 4px solid blue
  border-left: 2px solid blue
  border-right: 2px solid blue
  flex: 1
  border-radius: 8px
  box-shadow: -2px 0px 2px 4px rgba(0,0,0,.1)
  font-size: 19px
  @media screen and (max-width: 1024px)
    width: 100%
    flex: 0
  &__text
    padding: .5em
    height: 150px
  &__control
    display: flex
    align-items: center
    justify-content: flex-end
    background-color: blue
    &__copy
      position: relative
      cursor: pointer
      background-color: transparent
      border: 0
      height: 72px
      padding: 1em
      margin-right: 2em
      color: #fafafa
      opacity: .8
      &:hover
        opacity: 1
        transition: all .3s
        &::after
          content: 'Скопировать'
          position: absolute
          left: 0
          top: 50%
          transform: translateY(-50%) translateX(-100%)
          padding: .8em
          border-radius: 8px
          background-color: rgba(0,0,0,.7)
          color: #fafafa
      &:disabled
        opacity: .5
        cursor: not-allowed
      &.active
        &::after
            content: 'Успех!'
            position: absolute
            left: 0
            top: 50%
            transform: translateY(-50%) translateX(-100%)
            padding: .8em
            border-radius: 8px
            background-color: green
            color: #fafafa
</style>
