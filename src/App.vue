<template>
  <div id="app">
    <app-header class="app-header"></app-header>
    <main class="app-main">
      <router-view></router-view>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/layer/AppHeader'
import AppFooter from '@/components/layer/AppFooter'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
  [v-cloak]{display: none;}
</style>
