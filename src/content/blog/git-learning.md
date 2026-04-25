---
title: '先學懂GIT'
description: '利用Astro建Azure Static Web Site的基本'
pubDate: 'Apr 23 2026'
heroImage: '../../assets/blog-git-learning.png'
---


要使用快且免費的工具也是有門檻的，Astro加Azure Static Web Site不像直接在Wordpress.org上開站那麼簡單。除了設定Azure以外，還要學習Git。

當成功將Astro的檔案放在Git之後，可利用以下的指令將檔案下載到自己的電腦。

```bash
git clone https://github.com/[git link]
```
以這個網站為例：

```bash
git clone https://github.com/aebyte-f/personal-blog.git
```

如果使用Astro的Blog介面的話，主要修改的的文件夾是src。以下是檔案的路徑及用途：

- src/components: header及footer的html
- src/content/blog: blog的md格式檔案
- src/pages: 個別頁面的html
- src/styles: css檔案

要比較正在修改的和Git上的檔案：

```bash
git status
```

要將全部修改的檔案上傳至Git：

```bash
git add .
```

或只想上傳指定檔案：

```bash
git add filename.md
```

然後Commit：

```bash
git commit -m "Your descriptive commit message here"
```

例如:
- `"Add new blog post about Git workflows"`
- `"Update README and fix typo in about page"`
- `"Initial commit - set up Hugo/Jekyll blog structure"`

確認將所選檔案上傳至Git：

```bash
git push origin main
```

然後等2-3分鐘，便可看到更新的網站。