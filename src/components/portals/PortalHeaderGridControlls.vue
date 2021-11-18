<template>
  <portal to="header">
    <div class="d-flex">
      <v-icon
        @click="onDragClicked"
        class="ml-6"
        :color="isDraggable ? 'accent' : 'primary'"
      >
        mdi-drag
      </v-icon>
    </div>
  </portal>
</template>

<script>
export default {
  data() {
    return {
      isDraggable: false,
    };
  },
  methods: {
    onDragClicked() {
      this.isDraggable = !this.isDraggable;
      this.$emit("onDragClicked", this.isDraggable);
    },
  },
};
</script>

<style scoped lang="scss"></style>
