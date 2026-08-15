# GitHub Actions CI/CD 配置指南

## ✅ 已完成配置

| 组件 | 状态 |
|------|------|
| Git仓库 | ✅ 3 commits 已就绪 |
| CI/CD工作流 | ✅ `.github/workflows/build.yml` |
| npm build | ✅ 通过 (435ms) |

## ❌ 当前问题

**Token权限不足**

当前使用的是 Fine-Grained PAT，缺少 `contents` 权限，无法通过Git或API推送文件。

## 🚀 解决方案

### 方案A：创建Classic PAT（推荐）

1. 访问：**https://github.com/settings/tokens/new**
2. 选择 **Generate new token (classic)** ⚠️ 不是Fine-Grained
3. 填写：
   - Note: `edu-tv-app`
   - Expiration: `90 days`
   - Scopes: 勾选所有 `repo` 相关权限
4. 点击 **Generate token**
5. **复制Token**

然后在终端执行：
```bash
cd /home/ienpan/projects/edu-tv-app
git remote set-url origin https://新TOKEN@github.com/ienpan/edu-tv-app.git
git push -u origin main
```

### 方案B：手动上传（最快）

1. 访问：**https://github.com/ienpan/edu-tv-app**
2. 点击 **"Add file"** → **"Upload files"**
3. 拖入以下文件：
   ```
   README.md
   .gitignore
   package.json
   vite.config.js
   capacitor.config.json
   .github/workflows/build.yml
   GITHUB_ACTIONS_GUIDE.md
   DEPLOY.md
   ```
4. 点击 **"Commit changes"**

上传关键文件后，GitHub Actions会自动运行构建APK。

## 📦 构建产物

Actions完成后，下载：
- `app-debug.apk` - 调试版本
- `app-release.apk` - 发布版本

## 📺 安装到小米电视

1. 将APK传到电视（USB/网盘/局域网）
2. 在电视上安装（允许未知来源）
3. 运行启蒙乐园

---

**项目地址**: https://github.com/ienpan/edu-tv-app
