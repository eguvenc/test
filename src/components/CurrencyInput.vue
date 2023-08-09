<template>
  <vue-currency-input 
    v-bind="commonProps"
    :options="options"
  >
  ></vue-currency-input>
</template>

<script>
import Input from "../mixins/input";

export default {
  mixins: [Input],
  props: {
    /**
     * Currency options
     */
    options: Object,
  },
};
</script>
