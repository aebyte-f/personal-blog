---
title: '先學懂GIT'
description: '利用Astro建Azure Static Web Site的基本'
pubDate: 'Apr 23 2026'
heroImage: '../../assets/blog-git-learning.png'
---


要使用快且免費的工具也是有門檻，Astro加Azure Static Web Site不像直接Wordpress.org上開站那麼簡單。

### 1. Clone the repository (if you haven't already)

Open your terminal and run:

```bash
git clone https://github.com/aebyte-f/personal-blog.git
cd personal-blog
```

This downloads the repo to your computer.

> **Note**: The repository currently returns a 404 error (it may be private, deleted, or the name might have changed). If cloning fails, double-check the URL, ensure you have access (ask the owner `aebyte-f` for collaborator rights if needed), or confirm the repo exists.

### 2. Make your changes

- Edit, add, or delete files in the `personal-blog` folder using your code editor (VS Code, etc.).
- For a personal blog, you might add Markdown posts, update config files, images, etc.

### 3. Check the status of your changes

```bash
git status
```

This shows which files are modified or new.

### 4. Stage your changes

To add **all** changed files:

```bash
git add .
```

Or add specific files:

```bash
git add filename.md
```

### 5. Commit your changes

```bash
git commit -m "Your descriptive commit message here"
```

Examples:
- `"Add new blog post about Git workflows"`
- `"Update README and fix typo in about page"`
- `"Initial commit - set up Hugo/Jekyll blog structure"`

### 6. Push (upload) your commit to GitHub

```bash
git push origin main
```

- Use `main` for most modern repos. If your default branch is `master`, replace `main` with `master`.
- On first push, you may need to use `git push -u origin main` (the `-u` sets upstream tracking).

If you get authentication issues, use a **personal access token** (PAT) instead of password, or set up **SSH keys** (recommended for repeated use).



Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Adipiscing enim eu turpis egestas pretium. Euismod elementum nisi quis eleifend quam adipiscing. In hac habitasse platea dictumst vestibulum. Sagittis purus sit amet volutpat. Netus et malesuada fames ac turpis egestas. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Varius sit amet mattis vulputate enim. Habitasse platea dictumst quisque sagittis. Integer quis auctor elit sed vulputate mi. Dictumst quisque sagittis purus sit amet.

Morbi tristique senectus et netus. Id semper risus in hendrerit gravida rutrum quisque non tellus. Habitasse platea dictumst quisque sagittis purus sit amet. Tellus molestie nunc non blandit massa. Cursus vitae congue mauris rhoncus. Accumsan tortor posuere ac ut. Fringilla urna porttitor rhoncus dolor. Elit ullamcorper dignissim cras tincidunt lobortis. In cursus turpis massa tincidunt dui ut ornare lectus. Integer feugiat scelerisque varius morbi enim nunc. Bibendum neque egestas congue quisque egestas diam. Cras ornare arcu dui vivamus arcu felis bibendum. Dignissim suspendisse in est ante in nibh mauris. Sed tempus urna et pharetra pharetra massa massa ultricies mi.

Mollis nunc sed id semper risus in. Convallis a cras semper auctor neque. Diam sit amet nisl suscipit. Lacus viverra vitae congue eu consequat ac felis donec. Egestas integer eget aliquet nibh praesent tristique magna sit amet. Eget magna fermentum iaculis eu non diam. In vitae turpis massa sed elementum. Tristique et egestas quis ipsum suspendisse ultrices. Eget lorem dolor sed viverra ipsum. Vel turpis nunc eget lorem dolor sed viverra. Posuere ac ut consequat semper viverra nam. Laoreet suspendisse interdum consectetur libero id faucibus. Diam phasellus vestibulum lorem sed risus ultricies tristique. Rhoncus dolor purus non enim praesent elementum facilisis. Ultrices tincidunt arcu non sodales neque. Tempus egestas sed sed risus pretium quam vulputate. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Fringilla urna porttitor rhoncus dolor purus non. Amet dictum sit amet justo donec enim.

Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Tortor posuere ac ut consequat semper viverra. Tellus mauris a diam maecenas sed enim ut sem viverra. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Arcu ac tortor dignissim convallis aenean et tortor at. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. Egestas tellus rutrum tellus pellentesque eu. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Id donec ultrices tincidunt arcu. Id cursus metus aliquam eleifend mi.

Tempus quam pellentesque nec nam aliquam sem. Risus at ultrices mi tempus imperdiet. Id porta nibh venenatis cras sed felis eget velit. Ipsum a arcu cursus vitae. Facilisis magna etiam tempor orci eu lobortis elementum. Tincidunt dui ut ornare lectus sit. Quisque non tellus orci ac. Blandit libero volutpat sed cras. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Egestas integer eget aliquet nibh praesent tristique magna.
