<template>
  <v-container>
    <v-row>
      <v-col cols="6">

      <VDataTable
        v-model:expanded="expanded"
        :items-per-page="5"
        :headers="headers"
        :items="requests"
        item-value="id"
        class="elevation-1"
        show-expand
        :loading="loading"
    >
        <template v-slot:top>
            <VToolbar flat>
                <v-toolbar-title>Estimate Requests</v-toolbar-title>
            </VToolbar>
        </template>
        <template #item.customer_name="{ item }"> {{ item.raw.customer.fname }} {{ item.raw.customer.lname }} </template>
        <template #item.status="{ item }">
            <v-select
              v-model="form[item.index].status"
              :items="statuses"
            />
        </template>
        <template v-slot:expanded-row="{ columns, item }">
            <tr>
                <td :colspan="columns.length">
                    <address>{{item.raw.address}}<br />{{item.raw.city}}, {{item.raw.state}} {{item.raw.zip}}</address>
                </td>
            </tr>
        </template>
    </VDataTable>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    
  },
  data () {
    return {
        form: [
          { status: 1 },
          { status: 2 }
        ],
        statuses: [1, 2],
        requests: [
          { id: 1, name: "James Brown", email: "jb@example.com" },
          { id: 2, name: "Eli Brown", email: "eli@example.com" }
        ],
        expanded:[],
        headers: [
            { title: 'ID', align: 'start', key: 'id' },
            { title: 'Name', align: 'start', key: 'name' },
            { title: 'Email', align: 'start', key: 'email' },
            { title: 'Status', align: 'start', key: 'status' },
        ]
    }
  },
  computed: {

  },
  created() {

  },
  methods: {
   
  }, // end methods
}
</script>
