<template>
  <v-navigation-drawer
    app
    class="primary"
    :value="value"
    @input="$emit('input', $event)"
    dark
  >
    <div v-if="logo" class="d-flex align-center pa-5">
      <v-img max-width="44" contain :src="logo" class="mr-5" />
      <span class="white--text"> {{ title }} </span>
    </div>
    <v-list nav dense>
      <template v-for="(item, i) in menu">
        <v-subheader v-if="showSubHeader(item.subheader)" :key="'sh' + i">
          {{ item.subheader }}
        </v-subheader>
        <component
          :key="i"
          :is="getComponent(item.type)"
          :item="item"
          :class="!item.subheader && 'mt-5'"
        />
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import _getComponent from "@/components/layouts/SideNav/scripts/getComponent";

import SideNavItem from "@/components/layouts/SideNav/components/SideNavItem.vue";
import SideNavGroup from "@/components/layouts/SideNav/components/SideNavGroup.vue";

export default {
  components: { SideNavItem, SideNavGroup },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    menu: {
      type: Array,
      default: () => [],
    },
    logo: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  methods: {
    getComponent(type) {
      return _getComponent(type);
    },
    showSubHeader(subheader) {
      if (!Object.prototype.hasOwnProperty.call(this, "_prevSubheader")) {
        if (subheader) {
          this._prevSubheader = subheader;
          return true;
        } else {
          return false;
        }
      } else if (subheader) {
        if (this._prevSubheader === subheader) {
          this._prevSubheader = subheader;
          return false;
        } else {
          this._prevSubheader = subheader;
          return true;
        }
      }
    },
  },
};
</script>

<style scoped lang="scss"></style>
