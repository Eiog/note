<script setup lang='ts'>
const props = defineProps<{
  label: string
  description?: string
  tag?: string
  icon: string
  link: string
}>()
</script>

<template>
  <div class="navigation-item-wrap">
    <a class="navigation-item" :href="props.link" target="_blank" rel="noopener noreferrer" :title="props.description">
      <div class="title">
        <div class="icon">
          <img :src="props.icon" :alt="props.label">
        </div>
        <span>{{ props.label }}</span>
      </div>
      <div class="desc">
        <p v-if="props.description">{{ props.description }}</p>
      </div>
    </a>
  </div>
</template>

<style lang='less' scoped>
.navigation-item-wrap{
  padding: 5px;
  .navigation-item{
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  color:#333;
  .title{
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 20px;
    .icon{
      width: 40px;
      height: 40px;
      padding: 5px;
      background-color: #cccccc;
      border-radius: 10px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  p{
    font-size: 14px;
    line-height: normal;
    margin: 0;
    width: 200px;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* 这里是超出几行省略 */
    overflow: hidden;
  }
}
  .navigation-item:hover{
    background-color: #e0e0e0;
  }
}
</style>
