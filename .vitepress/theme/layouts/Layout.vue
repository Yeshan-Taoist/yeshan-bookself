<!-- .vitepress/theme/Layout.vue -->
<template>
  <DefaultThemeLayout>
    <ExpandSidebar />
  </DefaultThemeLayout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import ExpandSidebar from '../components/ExpandSidebar.vue'

const DefaultThemeLayout = DefaultTheme.Layout
</script>