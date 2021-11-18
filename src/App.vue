<template>
  <v-app>
    <SideNav
      v-model="drawer"
      v-if="showLayouts"
      :menu="menu"
      :logo="profile.logo"
      :title="profile.title"
    />
    <Header @handleNavIconClick="drawer = !drawer" v-if="showLayouts" />
    <Content>
      <router-view :key="getKey"></router-view>
    </Content>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

import SideNav from "@/components/layouts/SideNav/SideNav.vue";
import Header from "@/components/layouts/Header/Header.vue";
import Content from "@/components/layouts/Content/Content.vue";

import publicRoutes from "@/data/publicRoutes";

export default {
  components: { SideNav, Header, Content },
  data() {
    return {
      drawer: true,
      showLayouts: false,
    };
  },
  computed: {
    ...mapState("core$common", ["menu", "profile"]),
    getKey() {
      //  rerender page components when route params will change
      const { name, params } = this.$route;
      return name + JSON.stringify(params);
    },
  },
  methods: {
    checkLayoutsVisibility(routeName) {
      this.showLayouts = !publicRoutes.includes(routeName);
    },
  },
  watch: {
    "$route.name"(routeName) {
      this.checkLayoutsVisibility(routeName);
    },
  },
};
</script>

<style lang="scss"></style>
