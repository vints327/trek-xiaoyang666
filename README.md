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

## GitHub Pages 发布

1. 将仓库推送到 GitHub。
2. 在仓库 `Settings -> Pages` 中选择 `GitHub Actions`。
3. 在 DNS 中给 `trek.xiaoyang666.cc` 添加 `CNAME` 记录，指向 `<your-github-username>.github.io`。
4. 等待 GitHub Pages 完成证书签发。

## 内容结构

- `docs/outdoor/`：户外知识体系
- `docs/nepal/`：尼泊尔徒步专题
