# trek.xiaoyang666.cc

基于 VitePress 的户外知识体系与尼泊尔徒步专题站。

## 本地开发

```bash
npm install
npm run docs:dev
```

## 构建

```bash
npm run docs:build
```

## 已完成的站点专业化

- 自定义首页视觉与主题色
- Open Graph / Twitter SEO 元信息
- 本地搜索
- Giscus 评论组件占位
- Plausible 统计脚本占位
- GitHub Pages 自动部署工作流

## 上线前需要替换的配置

### Giscus

请在 `docs/.vitepress/theme/components/GiscusComments.vue` 中替换：

- `data-repo`
- `data-repo-id`
- `data-category-id`

### GitHub 链接

请在 `docs/.vitepress/config.mts` 中把 GitHub 地址改成真实仓库地址。

### 统计脚本

当前配置为 Plausible：

- 域名：`trek.xiaoyang666.cc`
- 脚本：`https://plausible.io/js/script.js`

如果你不用 Plausible，可以删除该脚本，或改成 Umami / Google Analytics。

## GitHub Pages 发布

1. 初始化并推送到 GitHub。
2. 在仓库 `Settings -> Pages` 中选择 `GitHub Actions`。
3. 在 DNS 中给 `trek.xiaoyang666.cc` 添加 `CNAME` 记录，指向 `<your-github-username>.github.io`。
4. 等待 GitHub Pages 完成证书签发。

## 内容结构

- `docs/outdoor/`：户外知识体系
- `docs/nepal/`：尼泊尔徒步专题
