<template>
  <section @click="switchPick" class="select__wrapper">
    <div class="select__control">
      {{ currentCipher }}
      <img src="../assets/images/expand_more_FILL0_wght400_GRAD0_opsz48.svg" />
    </div>
    <div v-show="isPick" class="select__pick">
      <div
        v-for="({ title, value }, index) in ciphers"
        :key="index + value"
        @click="setCipher(title, value)"
        class="select__item"
      >
        {{ title }}
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";

interface Cipher {
  title: string;
  value: string;
}

const props = defineProps<{
  ciphers: Array<Cipher>;
}>();
const emit = defineEmits<{
  (e: "handleChange", value: string): void;
}>();

let currentCipher = ref(props.ciphers[0].title);
let isPick = ref(false);
let switchPick = () => (isPick.value = isPick.value ? false : true);
let setCipher = (title: string, value: string) => {
  currentCipher.value = title;
  emit("handleChange", value);
};
</script>

<style lang="sass" scoped>
.select__wrapper
  display: flex
  flex-direction: column
  position: relative
  user-select: none
.select__control
  display: flex
  justify-content: space-between
  border: 1px solid rgba(0,0,0,.75)
  box-shadow: 1px 2px 4px 8px rgba(0,0,0,.1)
  border-radius: 4px
  padding: 1em
  min-width: 220px
  width: 20%
  cursor: pointer
.select__pick
  position: absolute
  bottom: 0
  left: 0
  min-width: 220px
  transform: translateY(100%)
  background-color: #fff
  border: 1px solid black
  border-radius: 4px
  border-top: 0
  z-index: 2
.select__item
  border: 1px solid black
  padding: .5em
  cursor: pointer
  color: black
  &:hover
    background-color: rgba(0,0,0,.2)
</style>
