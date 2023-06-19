<template>
  <div>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ props }">
        <v-text-field
          v-bind="props"
          :modelValue="dateFormatted"
          variant="outlined"
          append-inner-icon="mdi-calendar"

        ></v-text-field>
      </template>
      <v-date-picker
        color="primary"
        :modelValue="getDate"
        @update:modelValue="updateDate"
      ></v-date-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * Date on ISO format to be edited.
     * @model
     */
    value: {
      type: String,
      default() {
        return "2023-10-10"
      },
    },
  },
  watch: {
    value: {
      handler(val) {
        this.input = val;
      },
      immediate: true,
    },
  },
  data() {
    return {
      menu: false,
      input: null,
    };
  },
  computed: {
    dateFormatted() {
      const date = this.input ? new Date(this.input) : "";
      let month = 1 + date.getMonth();
      if (month < 10) {
        month = `0${month}`;
      }
      let day = date.getDate();
      if (day < 10) {
        day = `0${day}`;
      }
      return [`${date.getFullYear()}-${month}-${day}`]
    },
    getDate() {
      /**
       * Return ISO 8601
       */
      let date = this.input ? new Date(this.input) : new Date();

      let month = 1 + date.getMonth();
      if (month < 10) {
        month = `0${month}`;
      }
      let day = date.getDate();
      if (day < 10) {
        day = `0${day}`;
      }
      // return [date]
      return [`${date.getFullYear()}-${month}-${day}`]
    },
  },
  methods: {
    updateDate(val) {
      this.menu = false;
      this.input = val
      console.error(val)
    },
  },
};
</script>
