<template>
  <ParentLayout>
    <template #page-bottom>
      <h2>On This Page</h2>
      <!-- <RightBar :heading-items="headingItems" /> -->
    </template>
    <!-- TODO: figure out how to embed or something -->
    <!-- <RightBar :heading-items="headingItems" /> -->
    <!-- <h2>Hello World</h2> -->
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import RightBar from "../components/RightBar";

import {
  resolveSidebarItems,
  resolveExtraSidebarItems,
  resolveHeaders,
  getAlternateVersion,
  getPageWithRelativePath,
  fixDoubleSlashes,
  getSameContentForVersion,
} from "../util";

export default {
  name: 'Layout',
  components: {
    ParentLayout,
    RightBar,
  },

  computed: {
    headingItems() {
      return resolveHeaders(this.$page);
    },
  }
}
</script>