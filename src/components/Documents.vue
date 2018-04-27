<template>
  <div id="documents">
    <v-container>
      <div class="headerFont primary--text">Update Vehicle Documents</div>
    </v-container>

    <v-container>
      <v-layout row>
        <v-flex sm6>
          <v-card raised style="border-radius: 20px;">
            <v-card-text>
              <v-layout row>
                <v-flex sm6 class="primary--text">Driver License</v-flex>
                <v-flex sm3 class="text-right mr-2">View File</v-flex>
                <v-flex sm3 class="text-right mr-2">Update</v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex sm6 class="ml-3">
          <v-card raised style="border-radius: 20px;">
            <v-card-text>
              <v-layout row>
                <v-flex sm6 class="primary--text">Vehicle License</v-flex>
                <v-flex sm3 class="text-right mr-2">View File</v-flex>
                <v-flex sm3 class="text-right mr-2">Update</v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex sm12>
          <v-spacer></v-spacer>
          <v-btn round class="primary">Update</v-btn>
          <v-btn round class="primary">Reset</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<style scoped>
.headerFont {
  font-size: 24px;
}

.text-right {
  text-align: right;
}
</style>
