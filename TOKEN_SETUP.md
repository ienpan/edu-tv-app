# GitHub Token 权限要求

## 当前状态

| 权限 | 状态 |
|------|------|
| repo | ✅ 已授权 |
| workflow | ❌ 未授权 |

## 解决步骤

### 1. 创建新的Classic PAT
访问：**https://github.com/settings/tokens/new**

**重要**：选择 **Generate new token (classic)**

勾选以下scopes：
- [x] **repo** (完整权限)
- [x] **workflow** (部署GitHub Actions)

### 2. 推送代码
```bash
cd /home/ienpan/projects/edu-tv-app
git remote set-url origin https://新TOKEN@github.com/ienpan/edu-tv-app.git
git push -u origin main
```

### 3. 验证构建
推送成功后访问：https://github.com/ienpan/edu-tv-app/actions
等待APK构建完成（约5-10分钟）

---

**项目地址**: https://github.com/ienpan/edu-tv-app
