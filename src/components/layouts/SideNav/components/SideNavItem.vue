<template>
  <v-list-item :to="item.to" dense>
    <v-list-item-icon v-if="item.icon">
      <v-icon> {{ item.icon }} </v-icon>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title>
        {{ item.title }}
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "SideNavItem",
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
};
</script>
