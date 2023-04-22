<template>
  <div class="row">
    <div class="col-8">
      <h3>Test</h3>

      <v-row>
        <v-col sm="6">
          <v-form @submit.prevent="changePassword">
            <v-text-field
               label="New Password"
               :append-inner-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
               @click:append-inner="showPass = !showPass"
               :type="showPass ? 'text' : 'password'"
               v-model="newPassword"
               :error-messages="newPasswordErrors"
            >
            </v-text-field>
            <v-text-field
               label="Password Confirm"
               :append-inner-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
               @click:append-inner="showPass = !showPass"
               :type="showPass ? 'text' : 'password'"
               v-model="confirmPassword"
               :error-messages="confirmPasswordErrors"
            > 
            </v-text-field>
            <v-btn
              color="primary"
              type="submit"
            >
             Submit
            </v-btn>
          </v-form>
        </v-col>
      </v-row>

    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, sameAs, minLength, maxLength } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      showPass: false,
      passwordChanging: false,
      oldPassword: null,
      newPassword: null,
      confirmPassword: null,
    };
  },
  validations: {
    newPassword: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(16),
    },
    confirmPassword: {
      required,
      sameAs: sameAs("newPassword"),
    }
  },
  computed: {
    newPasswordErrors() {
      const errors = [];
      const field = "newPassword";
      if (!this.v$[field].$dirty) return errors;
      this.v$[field].required.$invalid && errors.push("This field is required");
      this.v$[field].minLength.$invalid && errors.push("Min length is 8");
      this.v$[field].maxLength.$invalid && errors.push("Max length is 16");
      return errors;
    },
    confirmPasswordErrors() {
      const errors = [];
      const field = "confirmPassword";
      if (!this.v$.confirmPassword.$dirty) return errors;
      this.v$.confirmPassword.sameAs.$invalid && errors.push("New Password and Password confirm is not equal");
      return errors;
    },
  },
  methods: {
    changePassword() {
      this.v$.$touch();
      // console.error(this.v$.confirmPassword.sameAs)
      if (this.v$.$invalid) {
        return false;
      }
      alert("ok form submitted !")
    },
  },

};
</script>
<style scoped>
.buttons {
  margin-top: 35px;
}
</style>