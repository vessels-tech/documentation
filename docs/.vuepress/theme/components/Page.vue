<template>
  <main class="page">
    <slot name="top" />

    <!-- TODO: switch -->
    <Content v-if="shouldShowRightBar" class="theme-default-content"/>
    <Content v-else class="theme-default-content no-toc"/>
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@parent-theme/components/PageEdit.vue'
import PageNav from '@parent-theme/components/PageNav.vue'

export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems'],
  computed: {
    shouldShowRightBar () {
      const { frontmatter } = this.$page
      // defaults to true if not specified
      if (frontmatter.showToc === undefined || frontmatter.showToc === true) {
        return true
      }

      return false;
    },

  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

</style>
