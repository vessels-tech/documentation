<template>
  <aside class="left-bar">
    <div class="wrap">

      <!-- TODO: reenable these for responsive navbar layout -->
      <NavLinks />

      <slot name="top" />

      <SidebarLinks
        :depth="0"
        :items="items"
      />
      <slot name="bottom" />
    </div>
  </aside>
</template>

<script>
import SidebarLinks from '@parent-theme/components/SidebarLinks.vue'
import NavLinks from '@parent-theme/components/NavLinks.vue'

export default {
  name: 'Sidebar',

  components: { SidebarLinks, NavLinks },

  props: ['items']
}
</script>


<style lang="postcss">
.site-name {
  color: var(--sidebar-link-color);
}

.left-bar-links {
  @apply h-screen overflow-y-auto pb-32;
  /* browser height - approx. .doc-set-panel height - #top height */
  height: calc(100vh - 93px - 3rem);

  &.has-bottom {
    /* browser height - approx. .doc-set-panel - #top height - #bottom height */
    height: calc(100vh - 93px - 3rem - 3rem);
  }
}

.sidebar-transitioning {
  .left-bar {
    transition: all 0.5s cubic-bezier(0.86, 0, 0.07, 1);
  }
}

.left-bar {
  /* TODO: change this to navbar height variable */
  top: 3.6rem;
  @apply w-64 h-screen fixed z-10;
  background-color: var(--sidebar-bg-color);
  transform: translateX(-16rem);

  .wrap {
    @apply w-64 absolute right-0;
  }

  .left-bar-bottom {
    @apply absolute w-full border-t;
    border-color: var(--border-color);
  }
}

@screen lg {
  .left-bar {
    width: calc(50% - 256px);
  }
}

@screen xl {
  .left-bar {
    width: calc(50% - 384px);
  }
}

@screen xxl {
  .left-bar-links.has-bottom {
    height: calc(100vh - 180px - 6.5rem);
  }
}

.language {
  @apply relative pl-2 pr-4 py-2;

  &:before {
    content: "";
    @apply block absolute w-4 h-4 left-0 mt-2 ml-4;
    margin-right: 0.125rem;
    background: transparent url("/docs/icons/icon-globe.svg") no-repeat 0 0;
  }
}

.locale-select-element {
  @apply appearance-none bg-transparent block relative pl-8 pr-2 py-1 cursor-pointer;
}

.left-bar-bottom {
  @apply h-12;
}

/**
 * transitions
 */

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: opacity 350ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 350ms cubic-bezier(0.22, 1, 0.36, 1);
  opacity: 1;
  transform: translateX(0);
}

/* slide from left to target */
.slide-left-enter,
.slide-left-leave-to {
  position: absolute;
  transform: translateX(-16rem);
  opacity: 0;
}

/* slide from right to target */
.slide-right-enter,
.slide-right-leave-to {
  position: absolute;
  transform: translateX(16rem);
  opacity: 0;
}

.slide-up-enter-active {
  transition: opacity 350ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 350ms cubic-bezier(0.22, 1, 0.36, 1);
  opacity: 1;
  transform: translateY(0);
}

/* immediate outtro */
.slide-up-leave-active {
  transition: opacity 0, transform 0;
}

.slide-up-enter,
.slide-up-leave-to {
  transform: translateY(4rem);
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .sidebar-transitioning .left-bar,
  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-up-enter-active,
  .slide-up-leave-active {
    transition: none;
  }
}
</style>