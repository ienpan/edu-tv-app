# 启蒙乐园 - Edu TV App

Vue 3 + Capacitor 6 教育应用，适配小米电视。

## 功能特性

- 6年级 × 4科目题库 (语文/数学/英语/科学)
- XP积分、连击奖励、等级系统
- 电视遥控器适配 (方向键导航)

## 构建

```bash
# Web构建
npm install
npm run build

# Android APK
npx cap sync android
cd android
./gradlew assembleDebug
```

## CI/CD

GitHub Actions 自动构建 APK: https://github.com/ienpan/edu-tv-app/actions

## 项目链接

- **GitHub**: https://github.com/ienpan/edu-tv-app
- **仓库**: ienpan/edu-tv-app
