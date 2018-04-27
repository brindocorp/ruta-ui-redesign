<template>
  <div id="MyAccount">
    <v-container>
      <!--Profile Header starts here-->
      <div style="font-size:28px; font-weight: bold;" class="primary--text">My Account</div>
      <div class="mb-3 primary--text">Update your personal information</div>
      <!--Profile Header ends here-->

      <!--Main Layout starts here-->
      <v-layout row>
        <!--Flex containing general information & change account password starts here-->
        <v-flex sm5>
          <v-layout column wrap>
            <!--Driver General Information flex starts here-->
            <v-flex sm8>
              <v-card raised class="ml-2">
                <!--card title starts here-->
                <v-card-title class="pb-0 cardHeaderFont primary--text">General Information</v-card-title>
                <!--card title ends here-->

                <v-container class="py-0">
                  <!--Layout containing First Name and Last Name starts here-->
                  <v-layout row>
                    <v-flex sm6 v-for="(layoutNameField, i) in layoutNameFields" :key="i" :class="layoutNameField.class">
                      <span style="font-size: 10px">Edit</span><v-text-field :label="layoutNameField.label"></v-text-field>
                    </v-flex>
                  </v-layout>
                  <!--Layout containing First Name and Last Name ends here-->

                  <!--Layout containing Phone and Email starts here-->
                  <v-layout row>
                    <v-flex sm6 v-for="(layoutReachField, i) in layoutReachFields" :key="i" :class="layoutReachField.class">
                      <span style="font-size: 10px">Edit</span><v-text-field :label="layoutReachField.label"></v-text-field>
                    </v-flex>
                  </v-layout>
                  <!--Layout containing Phone and Email ends here-->
                </v-container>

                <!-- Section containing Bio and Avatar starts here-->
                <v-card-media>
                  <v-container class="py-0">
                    <v-layout row>
                      <v-flex sm8 class="mr-2">
                        <div style="font-size: 10px">Edit</div><v-text-field disabled label="Update Bio" multi-line />
                      </v-flex>
                      <v-flex sm4 class="ml-2 mb-2">
                        <v-avatar size="130" class="mt-4 img-container">
                          <v-icon class="p-img" style="font-size: 130px;">account_circle</v-icon>
                          <div class="overlay">
                            <button class="iconLink"><v-icon class="icon">photo_camera</v-icon></button>
                          </div>
                        </v-avatar>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <!-- Section containing Bio and Avatar ends here-->

                <!-- Section containing Buttons starts here-->
                <v-card-actions class="pt-0">
                  <v-spacer></v-spacer>
                  <v-btn v-for="(button, i) in buttons" :key="i" round class="primary buttonText">{{ button.text }}</v-btn>
                </v-card-actions>
                <!-- Section containing Buttons ends here-->
              </v-card>
            </v-flex>
            <!--Driver General Information flex ends here-->

            <!--Driver Password flex starts here-->
            <v-flex sm4>
              <v-card raised class="ml-2 mt-4">
                <v-card-title class="pb-0 primary--text cardHeaderFont">Change Account Password</v-card-title>
                <v-container class="py-0">
                  <!--Layout containing current password starts here-->
                  <v-layout row wrap>
                    <v-text-field label="Current Password" />
                  </v-layout>
                  <!--Layout containing current password ends here-->

                  <!--Layout containing passwords starts here-->
                  <v-layout row>
                    <v-flex sm6 class="mr-2"><v-text-field label="New password" /></v-flex>
                    <v-flex sm6 class="ml-2"><v-text-field label="Confirm New password" /></v-flex>
                  </v-layout>
                  <!--Layout containing passwords ends here-->
                </v-container>
                <!--Password buttons start here-->
                <v-card-actions class="pt-0">
                  <v-spacer />
                  <v-btn v-for="(button, i) in buttons" :key="i" round class="primary buttonText">{{ button.text }}</v-btn>
                </v-card-actions>
                <!--Password buttons ends here-->
              </v-card>
            </v-flex>
            <!--Driver Password flex ends here-->
          </v-layout>
        </v-flex>
        <!--Flex containing general information & change account password ends here-->

        <!--Flex containing Vehicle details starts here-->
        <v-flex sm7 class="ml-4 mr-2">
          <v-card raised>
            <v-card-title class="primary--text" style="font-size: 18px">Vehicle Details</v-card-title>
              <v-container>
                <v-layout row>
                  <v-flex sm12><v-text-field label="Delivery Truck" /></v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex sm6 class="mr-2"><v-text-field label="Vehicle Number" /></v-flex>
                  <v-flex sm6 class="ml-2"><v-text-field label="Vehicle Model" /></v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex sm6 class="mr-2"><v-text-field label="Address" /></v-flex>
                  <v-flex sm6 class="ml-2"><v-text-field label="State" /></v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex sm6 class="mr-2"><v-text-field label="Zip/Postal Code" /></v-flex>
                  <v-flex sm6 class="ml-2"><v-text-field label="Country" /></v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex sm12><v-text-field label="Timezone" /></v-flex>
                </v-layout>
              </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn v-for="(button, i) in buttons" :key="i" round class="primary buttonText">{{ button.text }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <!--Flex containing Vehicle details ends here-->
      </v-layout>
      <!--Main Layout ends here-->
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      layoutNameFields: [
        { label: 'First Name', class: 'mr-2'},
        { label: 'Last Name', class: 'ml-2'}
      ],
      layoutReachFields: [
        { label: 'Phone', class: 'mr-2'},
        { label: 'Email', placeholder: 'Put something here', class: 'ml-2'}
      ],
      buttons: [
        { text: 'update' },
        { text: 'reset' }
      ]
    }
  }
}
</script>

<style scoped>
/* {
  border: 2px solid;
}*/

.profileImg {
  font-size: 50px;
}

.cardHeaderFont {
  font-size: 18px;
}

.buttonText {
  text-transform: capitalize;
}

.img-container {
  position: relative;
}

.p-img {
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  background-color: #ccc;
  border-radius: 50%;
  opacity: 0;
}

.img-container:hover .overlay{
  opacity: 1;
}

.iconLink {
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.icon {
  font-size: 80px;
  cursor: pointer;
}

.icon:hover {
  color: #eee;
}

</style>
