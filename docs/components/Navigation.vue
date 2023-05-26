<script setup lang='ts'>
import { computed } from 'vue'
import { slugify } from '@mdit-vue/shared'
import NavigationItem from './NavigationItem.vue'

const props = defineProps<{
  title: string
  description?: string
  items: {
    label: string
    description?: string
    tag?: string
    icon: string
    link: string
  }[]
}>()
const _title = computed(() => slugify(props.title))
</script>

<template>
  <div class="navigation-wrap">
    <div class="navigation-body">
      <h2 v-if="props.title" :id="_title" tabindex="-1">
        {{ props.title }}
        <a class="header-anchor" :href="`#${_title}`" aria-hidden="true" />
      </h2>
      <p v-if="props.description">
        {{ props.description }}
      </p>
      <div class="navigation-content">
        <NavigationItem v-for="({ icon, label, link, description: desc, tag }, index) in props.items" :key="index" :icon="icon" :label="label" :link="link" :description="desc" :tag="tag" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.navigation-wrap{
  width: 100%;
  .navigation-body{
    width: 100%;
    display: flex;
    flex-direction: column;
    .navigation-content{
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap:5px;
    }
  }
}
</style>
