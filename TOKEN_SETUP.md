# GitHub Token 配置 - 需要workflow权限

## ❌ 当前问题

推送被拒绝，错误信息：
```
refusing to allow a Personal Access Token to create or update workflow
'.github/workflows/build.yml' without 'workflow' scope
```

## ✅ 解决步骤

### 1. 访问GitHub Token设置
打开：**https://github.com/settings/tokens/new**

### 2. 创建Classic PAT（关键步骤）
**必须选择** `Generate new token (classic)` ⚠️
不要选择 "Fine-grained token"

### 3. 勾选权限
在Scopes部分，**必须勾选**：
- [x] **workflow** ← 这是关键！
- [x] **repo** (完整权限)

完整权限列表：
- repo (full)
  - repo:status ✓
  - repo_deployment ✓
  - public_repo ✓
  - control_network ✓
  - repo:invite ✓
  - security_events ✓
- **workflow** ← 必须勾选

### 4. 生成并复制Token
点击 **Generate token**，复制生成的Token

### 5. 执行推送
```bash
cd /home/ienpan/projects/edu-tv-app
git remote set-url origin https://新TOKEN@github.com/ienpan/edu-tv-app.git
git push -u origin main
```

---

## 📌 重要提醒

1. **必须选择 Classic PAT**（不是Fine-Grained）
2. **必须勾选 workflow scope**（否则无法部署Actions）
3. 新Token格式：`ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
