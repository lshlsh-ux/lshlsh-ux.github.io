<template>
  <!-- 评论区挂载容器 -->
  <div class="giscus-container" />
</template>

<script setup>
// 引入Vue的生命周期钩子
import { onMounted } from 'vue'

// 页面挂载后动态加载Giscus脚本
onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  // 替换为你的仓库信息
  script.setAttribute('data-repo', 'lshlsh-ux/lshlsh-ux.github.io')
  script.setAttribute('data-repo-id', '你的仓库ID') // 替换成Giscus生成的repo-id
  script.setAttribute('data-category', 'General') // 替换成你的分类名
  script.setAttribute('data-category-id', '你的分类ID') // 替换成Giscus生成的category-id
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'bottom')
  script.setAttribute('data-theme', 'preferred_color_scheme')
  script.setAttribute('data-lang', 'zh-CN')
  script.crossOrigin = 'anonymous'
  script.async = true
  // 将脚本添加到容器中
  document.querySelector('.giscus-container').appendChild(script)
})
</script>

<style scoped>
/* 评论区样式调整 */
.giscus-container {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}
</style>