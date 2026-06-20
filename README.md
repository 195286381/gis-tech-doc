# GIS 平台技术文档

这是一个基于 Next.js、Fumadocs 和 MDX 的 GIS 技术文档站点，可部署到 Netlify 或 Vercel。

## Netlify 自动部署

站点已包含 `netlify.toml`：

```toml
[build]
  command = "npm run build"
  publish = ".next"
```

在 Netlify 项目 `gis-tech-doc` 中连接本仓库：

- Repository: `195286381/gis-tech-doc`
- Branch: `main`
- Build command: `npm run build`
- Publish directory: `.next`

连接完成后，每次向 `main` 分支 push，Netlify 会自动重新部署。

## 本地开发

```bash
npm install
npm run dev
```

文档内容在 `content/docs/*.mdx`，导航顺序在 `content/docs/meta.json`。
