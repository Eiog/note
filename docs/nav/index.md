---
title: Navigation
className: 'navigation'
---
<script setup lang='ts'>
  import Navigation from '../components/Navigation.vue'
  import {navData} from './data.ts'
</script>
<style src="./index.less"></style>
# 资源导航

<Navigation v-for="({title,description,items},index) in navData" :key="index" :title="title" :description="description" :items="items" />
