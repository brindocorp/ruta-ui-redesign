<template>
  <v-app style="font-family: 'Nunito', sans-serif">
    <!--Side Navigation Menu starts here-->
    <v-navigation-drawer style="overflow: hidden" hide-overlay app clipped width="200" class="primary" v-model="sideNav">
      <div class="ml-5 accent--text Logo">
        <img src="./assets/rutaLogo.svg" height="36px"><span>UTA</span>
      </div>
      <v-list>
        <v-list-tile-avatar size="100" class="mb-3 pt-3 tileAvatar">
          <img src="../src/assets/img2.jpg" class="imgAvatar imgFix">
        </v-list-tile-avatar>
        <div class="profileHolder">
          <div class="accent--text profileName mb-2">Segun joshua</div>
          <span class="primary--text profileStatus">approved</span>
        </div>
        <v-list-tile active-class="accent--text" class="mt-2 " v-for="item in items" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon class="listItemIcon">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="listItem">{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!--Side Navigation Menu ends here-->

    <!--Top navigation menu starts here-->
    <v-toolbar>
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      <!--<v-toolbar-title class="primary--text navTitle">
        {{ title }}
      </v-toolbar-title>-->
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-icon style="font-size: 36px" class="primary--text mr-3">notifications</v-icon>
        <v-btn flat><v-icon class="primary--text" style="font-size: 36px">power_settings_new</v-icon></v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!--Top navigation menu ends here-->
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: true,
      sideNav: true,
      fixed: false,
      items: [
        { icon: 'show_chart', title: 'Dashboard', link: '/' },
        { icon: 'account_circle', title: 'My Account', link: '/profile' },
        { icon: 'content_copy', title: 'Documents', link: '/documents' },
        { icon: 'compare_arrows', title: 'History', link: '/history' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Dashboard'
    }
  },
  name: 'App'
}
</script>

<style scoped>
/* {
  border: 2px solid;
}*/

.Logo {
  font-size: 2em;
  padding-left: 0.2em;
  margin-top: 0.4em;
}

.tileAvatar {
  padding-left: 3.5em;
}

.imgAvatar {
  border: 4px solid white;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.7);
}

.profileHolder {
  text-align: center;
  margin-bottom: 2em;
}

.profileName {
  font-size: 1.2em;
}

.profileStatus {
  font-size: 0.9em;
  font-weight: bold;
  border: 2px solid white;
  padding: 0.2em;
  border-radius: 5px;
  background: #fff;
  text-align: center;
}

.listItemIcon {
  color: rgba(196, 196, 196, 0.5);
}

.listItem {
  font-weight: 300;
  font-size: 13px;
  color: rgba(196, 196, 196, 0.5);
}

.active:hover{
  background-color: #FFF;
}


.navTitle {
  font-size: 28px;
  font-weight: 400;
}

.imgFix {
  image-rendering: -moz-crisp-edges; /* Firefox */
  image-rendering: -o-crisp-edges; /* Opera */
  image-rendering: -webkit-optimize-contrast;/* Webkit (non-standard naming) */
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
}

</style>
