# GitHub Token 配置指南

## ❌ 当前问题

推送失败，错误信息：
```
refusing to allow a Personal Access Token to create or update workflow
'.github/workflows/build.yml' without 'workflow' scope
```

**原因**: 当前Token缺少 `workflow` 权限。

---

## ✅ 解决方案

### 步骤1：创建Classic PAT

1. 访问：**https://github.com/settings/tokens/new**
2. **重要**: 选择 **Generate new token (classic)**
   - ⚠️ 不要选择 "Fine-grained token"
3. 填写：
   - **Note**: `edu-tv-app`
   - **Expiration**: `90 days`
4. **勾选权限**（必须包含以下两项）：
   - [x] **repo** (完整权限)
   - [x] **workflow** ← 这是关键！
5. 点击 **Generate token**
6. **复制生成的Token**

### 步骤2：推送代码

```bash
cd /home/ienpan/projects/edu-tv-app
git remote set-url origin https://新TOKEN@github.com/ienpan/edu-tv-app.git
git push -u origin main
```

### 步骤3：验证构建

推送成功后：
1. 访问: https://github.com/ienpan/edu-tv-app/actions
2. 等待GitHub Actions自动运行
3. 下载APK文件（约5-10分钟）

---

## 📌 重要提醒

1. **必须使用Classic PAT**，Fine-Grained PAT不支持workflow scope
2. **必须勾选workflow权限**，否则无法部署Actions
3. Token格式: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

---

**项目地址**: https://github.com/ienpan/edu-tv-app
