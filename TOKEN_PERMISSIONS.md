# GitHub Token 权限问题解决方案

## 问题诊断

当前使用的 **Fine-Grained PAT** (Personal Access Token) 缺少以下内容权限：
- ❌ `contents` - 读写仓库内容
- ❌ `git.refs` - 创建分支

虽然API显示有 `push` 和 `admin` 权限，但Git操作仍然失败。

## 解决方案：创建Classic PAT

### 步骤1：创建新Token
1. 访问：**https://github.com/settings/tokens/new**
2. 选择 **Generate new token (classic)**（不是Fine-Grained）
3. 填写：
   - **Note**: `edu-tv-app`
   - **Expiration**: `90 days`
   - **Scopes**: 勾选 **所有 `repo` 相关权限**
4. 点击 **Generate token**
5. **复制Token**（格式：`ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`）

### 步骤2：更新Git远程并推送
```bash
cd /home/ienpan/projects/edu-tv-app

# 使用新Token替换
git remote set-url origin https://NEW_CLASSIC_TOKEN@github.com/ienpan/edu-tv-app.git
git push -u origin main
```

---

## 替代方案：通过GitHub Web界面上传

如果无法创建Token，可以手动上传：

1. 访问：**https://github.com/ienpan/edu-tv-app**
2. 点击 **Add file** → **Upload files**
3. 拖拽项目文件夹中的所有文件
4. 点击 **Commit changes**

---

## 验证Token权限

创建新Token后，测试是否可用：
```bash
gh auth login --with-token <<< "YOUR_NEW_TOKEN"
gh repo list --limit 1
```
