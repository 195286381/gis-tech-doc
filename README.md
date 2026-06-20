# GIS 平台技术文档

这是一个纯静态 GIS 技术文档站点，可直接部署到 Netlify 或 Vercel。

## Netlify 自动部署

站点已包含 `netlify.toml`：

```toml
[build]
  publish = "."
  command = ""
```

在 Netlify 项目 `gis-tech-doc` 中连接本仓库：

- Repository: `195286381/gis-tech-doc`
- Branch: `main`
- Build command: 留空
- Publish directory: `.`

连接完成后，每次向 `main` 分支 push，Netlify 会自动重新部署。
