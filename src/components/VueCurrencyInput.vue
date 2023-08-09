<template>
  <v-text-field
    density="compact"
    :filled="filled"
    :modelValue="formattedValue"
    ref="inputRef" 
  ></v-text-field>
</template>

<script>
import { useCurrencyInput } from 'vue-currency-input'
import { watch } from 'vue';

export default {
  props: {
    /**
     * Type of text input. All HTML type allowed.
     */
    type: {
      type: String,
      default: "currency",
    },
    /**
     * Use full filled background color style.
     */
    filled: {
      type: Boolean,
      default: true,
    },
    /**
     * Currency options
     */
    options: Object,
  },
  setup (props) {
    const {
      inputRef,
      formattedValue
    } = useCurrencyInput(props.options)
    watch(() => props.modelValue, (value) => {
      setValue(value)
    })
    return { inputRef, formattedValue }
  }
};
</script>
