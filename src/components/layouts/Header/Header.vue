<template>
  <v-app-bar app color="white">
    <v-app-bar-nav-icon @click.stop="$emit('handleNavIconClick')" />
    <portal-target name="header">
      <!--
      This component can be located anywhere in your App.
      The slot content of the above portal component will be rendered here.
      -->
    </portal-target>
    <v-spacer />
    <Profile />
  </v-app-bar>
</template>

<script>
import Profile from "@/components/Profile/Profile.vue";

export default {
  components: { Profile },
};
</script>

<style scoped lang="scss"></style>
