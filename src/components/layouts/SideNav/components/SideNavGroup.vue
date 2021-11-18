<template>
  <v-list-group
    :prepend-icon="item.icon"
    class="font-weight-light"
    color="primary lighten-5"
    v-model="item.active"
    no-action
    :sub-group="nested"
  >
    <template #activator>
      <v-list-item-title> {{ item.title }} </v-list-item-title>
    </template>

    <template>
      <component
        v-for="(item, i) in item.items"
        :key="i"
        :is="getComponent(item.type)"
        :item="item"
        nested
      />
    </template>
  </v-list-group>
</template>

<script>
import _getComponent from "@/components/layouts/SideNav/scripts/getComponent";

import SideNavItem from "@/components/layouts/SideNav/components/SideNavItem.vue";
import SideNavGroup from "@/components/layouts/SideNav/components/SideNavGroup.vue";

export default {
  name: "SideNavGroup",
  components: { SideNavItem, SideNavGroup },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    nested: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getComponent(type) {
      return _getComponent(type);
    },
  },
};
</script>
