<template>
  <div class="app__wrapper">
    <div class="input__control">
      <header class="input__control__header">
        <h3>{{ actionUI }}</h3>
        <SelectInput :ciphers="ciphersForChild" @handleChange="handleChange" />
      </header>
      <div v-if="currentCipher?.isAdditionalSettings">
        <AdditionalSettings
          :additionalSettings="currentCipher.additionalSettings"
        >
          <BaseInput
            v-model="currentCipher.additionalSettings.value"
            :key="currentCipher.name"
          />
        </AdditionalSettings>
      </div>
      <BaseInput v-model="currentInput" class="app__input" />
    </div>
    <button @click="switchAction" class="switch__button">
      <img src="./assets/images/sync_alt_FILL0_wght400_GRAD200_opsz40.svg" />
    </button>
    <BaseOutput :output="outputValue" />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, reactive } from "vue";
import BaseOutput from "./components/BaseOutput.vue";
import SelectInput from "./components/SelectInput.vue";
import BaseInput from "./components/BaseInput.vue";
import AdditionalSettings from "./components/AdditionalSettings.vue";

import * as CaesarChipher from "./utils/caesar-cipher";
import * as AtbashChipher from "./utils/atbash-cipher";
import * as CodewordChipher from "./utils/codeword-cipher";
import * as RailsChipher from "./utils/rail-fence-cipher";

type ActionType = "encode" | "decode";
type LanguageType = "en" | "ru";

interface AdditionalSettingsInterface {
  title: string;
  pattern: string;
  value: string | number;
}
interface Cipher {
  title: string;
  name: string;
  isAdditionalSettings: boolean;
  additionalSettings?: AdditionalSettingsInterface;
}

const aplhabetEng: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
const aplhabetRu: string[] = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя".split("");

let action = ref<ActionType>("encode");
let currentInput = ref("");
let currentInputIsValid = computed(() => currentInput.value !== "");

let ciphers: Array<Cipher> = [
  {
    title: "Цезарь",
    name: "ceasar",
    isAdditionalSettings: true,
    additionalSettings: reactive({
      title: "Выберите шаг",
      pattern: "",
      value: 3,
    }),
  },
  {
    title: "Атбаш",
    name: "atbash",
    isAdditionalSettings: false,
  },
  {
    title: "Кодовое слово",
    name: "codeword",
    isAdditionalSettings: true,
    additionalSettings: reactive({
      title: "Введите кодовое слово",
      pattern: "",
      value: "",
    }),
  },
  {
    title: "Рельсы",
    name: "rail",
    isAdditionalSettings: true,
    additionalSettings: reactive({
      title: "Выберите число рельс",
      pattern: "",
      value: 3,
    }),
  },
];

let currentCipherValue = ref(ciphers[0].name);

let actionUI = computed(() =>
  action.value === "encode" ? "Шифрование" : "Расшифрование"
);

let currentLanguage = computed((): LanguageType => {
  return aplhabetEng.includes(
    currentInput.value.replace(/[^а-я][^a-z]/gi, "")[0]
  )
    ? "en"
    : "ru";
});

let currentAlphabet = computed(() =>
  currentLanguage.value === "en" ? aplhabetEng : aplhabetRu
);

let currentCipher = computed(() =>
  ciphers.find((el) => el.name === currentCipherValue.value)
);

let outputValue = computed(() => {
  if (currentInputIsValid.value) {
    switch (action.value) {
      case "decode":
        switch (currentCipherValue.value) {
          case "ceasar":
            return CaesarChipher.decode(
              currentInput.value,
              currentAlphabet.value,
              currentCipher.value?.additionalSettings?.value
            );
          case "atbash":
            return AtbashChipher.decode(
              currentInput.value,
              currentAlphabet.value
            );
          case "rail":
            return RailsChipher.decode(
              currentInput.value,
              currentCipher.value?.additionalSettings?.value
            );
          case "codeword":
            return CodewordChipher.decode(
              currentInput.value,
              currentAlphabet.value,
              currentCipher.value?.additionalSettings?.value
            );
          default:
            return "";
        }
      case "encode":
        switch (currentCipherValue.value) {
          case "ceasar":
            return CaesarChipher.encode(
              currentInput.value,
              currentAlphabet.value,
              +currentCipher.value?.additionalSettings?.value
            );
          case "atbash":
            return AtbashChipher.encode(
              currentInput.value,
              currentAlphabet.value
            );
          case "rail":
            return RailsChipher.encode(
              currentInput.value,
              currentCipher.value?.additionalSettings?.value
            );
          case "codeword":
            return CodewordChipher.encode(
              currentInput.value,
              currentAlphabet.value,
              currentCipher.value?.additionalSettings?.value
            );
          default:
            return "";
        }
      default:
        return "";
    }
  } else {
    return "";
  }
});

let ciphersForChild = ciphers.map((el) => {
  return {
    title: el.title,
    value: el.name,
  };
});
const handleChange = (value: string) => (currentCipherValue.value = value);
const switchAction = () => {
  action.value = action.value === "encode" ? "decode" : "encode";
};
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
  box-sizing: border-box
.app__wrapper
  display: flex
  max-width: 100vw
  height: 100vh
  justify-content: center
  align-items: center
  gap: 1em
  margin: 0 10%
  overflow: hidden
  @media screen and (max-width: 1024px)
    flex-direction: column
.input__control
  display: flex
  flex-direction: column
  flex: 1
  border: 2px solid blue
  border-bottom: 4px solid blue
  border-radius: 8px
  @media screen and (max-width: 1024px)
    width: 100%
    flex: 0
  &__header
    display: flex
    justify-content: space-between
    align-items: center
    height: 72px
    padding: .4em
    background-color: blue
    color: #fafafa
    user-select: none
.app__input
  min-height: calc(150px - 2.2em)
  display: flex
  align-items: flex-start
  font-size: 19px
.switch__button
  background-color: blue
  border: 0
  outline: 0
  padding: .6em
  border-radius: 50%
  cursor: pointer
  transition: all .3s
  &:hover
    box-shadow: 1px 2px 4px 3px rgba(0,0,0,.2)
</style>
