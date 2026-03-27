<script setup lang="ts">
import { onMounted } from 'vue'
import { useData, useRoute } from 'vitepress'

const { frontmatter } = useData()
const route = useRoute()

onMounted(() => {
  if (route.path === '/' || frontmatter.value.comments === false) {
    return
  }

  if (document.querySelector('script[data-giscus]')) {
    return
  }

  const container = document.getElementById('giscus-container')
  if (!container) {
    return
  }

  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-giscus', 'true')
  script.setAttribute('data-repo', 'vints327/trek-xiaoyang666')
  script.setAttribute('data-repo-id', 'R_kgD0RyOI7Q')
  script.setAttribute('data-category', 'Q&A')
  script.setAttribute('data-category-id', 'DIC_kwDORyOI7c4C5ZIv')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'bottom')
  script.setAttribute('data-theme', 'preferred_color_scheme')
  script.setAttribute('data-lang', 'zh-CN')
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true
  container.appendChild(script)
})
</script>

<template>
  <section class="giscus-wrap">
    <div class="giscus-head">
      <h2>评论</h2>
      <p>基于 GitHub Discussions。欢迎补充经验、纠错和分享你的实走感受。</p>
    </div>
    <div id="giscus-container"></div>
  </section>
</template>
