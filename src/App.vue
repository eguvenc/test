<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <date-input />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DateInput from './components/DateInput.vue'

export default {
  components: {
    DateInput
  }
}
</script>
