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
  script.setAttribute('data-repo', 'your-github-username/trek-xiaoyang666')
  script.setAttribute('data-repo-id', 'REPLACE_WITH_REPO_ID')
  script.setAttribute('data-category', 'General')
  script.setAttribute('data-category-id', 'REPLACE_WITH_CATEGORY_ID')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'top')
  script.setAttribute('data-theme', 'light')
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
      <p>首次上线前，请把 Giscus 的仓库名、Repo ID 和 Category ID 替换成真实值。</p>
    </div>
    <div id="giscus-container"></div>
  </section>
</template>
