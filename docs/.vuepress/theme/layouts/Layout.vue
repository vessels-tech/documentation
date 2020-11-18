<!-- 

  Layout Template ejected from vanilla vuepress 
  Right sidebar heavily influenced by: https://github.com/craftcms/docs

-->

<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar
      v-if="shouldShowNavbar"
      @toggle-sidebar="toggleSidebar"
    />

    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    />
<!-- 
    <LeftBar
      :items="sidebarItems"
      :extra-items="extraSidebarItems"
      @toggle-sidebar="toggleSidebar"
      @select-version="handleVersionUpdate"
      @select-language="handleLanguageUpdate"
    /> -->
    <Sidebar
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
    >
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </Sidebar>

    <div id="main" class="main-container">
      <Home v-if="$page.frontmatter.home" />
      <Page
        v-else
        :sidebar-items="sidebarItems"
      >
        <template #top>
          <slot name="page-top" />
        </template>
        <template #bottom>
          <slot name="page-bottom" />
        </template>
      </Page>
    </div>
    <!-- <RightBar :heading-items="headingItems" /> -->
  </div>
</template>


<style lang="postcss">
/* style taken from craftcms */
#nprogress-container {
  @apply block absolute top-0 left-0 right-0 overflow-hidden w-full;
  height: 2px;
  z-index: 1050;
}

.theme-container {
  @apply relative w-full;
}

.sidebar-transitioning {
  .main-container {
    transition: all 0.5s cubic-bezier(0.86, 0, 0.07, 1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .sidebar-transitioning .main-container {
    transition: none;
  }
}

/* Seems to be changing the width... */
.main-container {
  @apply mx-auto relative max-w-screen-md;
}

.top-bar {
  @apply block h-12 w-full content-center relative px-10 pt-2 max-w-screen-md;
}

.sidebar-mask {
  @apply fixed top-0 left-0 hidden h-screen w-screen;
  z-index: 9;
}

.sidebar {
  @apply bg-white text-base w-80 fixed z-10 m-0 left-0 bottom-0 box-border overflow-y-auto;
  top: 3.6rem;

  /* TODO: do breaks and stuff for different screen sizes*/
  transform: translateX(0);
  width: calc(50% - 384px);
}

.sidebar-open {
  .main-container {
    /* w-64 */
    transform: translateX(16rem);
    opacity: 0.5;
    overflow: hidden;
  }

  .left-bar {
    transform: translateX(0);
  }

  .sidebar-mask {
    @apply block;
  }
}

.theme-default-content:not(.custom),
.content-wrapper {
  @apply py-8 px-10 max-w-screen-md;
}

@screen lg {
  .main-container {
    @apply relative;
    left: 8rem;
  }

  .left-bar {
    transform: translateX(0);
  }
}

@screen xl {
  .main-container {
    left: 0;
  }
}
</style>

<script>
import "../styles/index.pcss";
import Home from '@parent-theme/components/Home.vue'
import Navbar from '@parent-theme/components/Navbar.vue'
import Page from '@parent-theme/components/Page.vue'
// import Sidebar from '../components/Sidebar.vue'
import Sidebar from '@parent-theme/components/Sidebar.vue'
// import LeftBar from "../components/LeftBar";
// import RightBar from "../components/RightBar";

import { resolveSidebarItems, resolveHeaders } from '../util'

export default {
  name: 'Layout',

  components: {
    Home,
    Page,
    // LeftBar,
    Sidebar,
    Navbar,
    // TODO: reinstate once we are happy with sidebar!
    // RightBar,
  },

  data () {
    return {
      isSidebarOpen: false
    }
  },

  computed: {
    headingItems() {
      return resolveHeaders(this.$page);
    },

    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },

    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home
        && frontmatter.sidebar !== false
        && this.sidebarItems.length
      )
    },

    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },

  mounted () {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
  },

  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },

    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}
</script>
