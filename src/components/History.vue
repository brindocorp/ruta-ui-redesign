<template>
  <div>
      <v-container>
    <v-layout row wrap>
      <v-flex sm3>
        <v-card class="chart mt-3 ml-3">
          <line-chart></line-chart>
        </v-card>
      </v-flex>
      <v-flex sm3>
        <v-card class="chart mt-3 ml-3">
          <line-chart style="height: 40vh"></line-chart>
        </v-card>
      </v-flex>
      <v-flex sm3>
        <v-card class="chart mt-3 ml-3">
          <line-chart></line-chart>
        </v-card>
      </v-flex>
      <v-flex sm3>
        <v-card class="chart mt-3 ml-3">
          <line-chart></line-chart>
        </v-card>
      </v-flex>
    </v-layout>
      </v-container>
  </div>
</template>

<style scoped>
.chart {
    border-radius: 10px;
}
</style>
