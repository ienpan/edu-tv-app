# 🎓 启蒙乐园 - 小米电视教育应用

寓教于乐的小米电视学习应用，覆盖小学1-6年级数语英科四科。

## 功能特性

- **多年级支持**: 小学1-6年级课程内容
- **四科覆盖**: 数学、语文、英语、科学
- **电视适配**: 遥控器方向键导航
- **游戏化设计**: XP积分、连击奖励、等级系统
- **Capacitor打包**: 一键生成Android APK

## 技术栈

| 技术 | 用途 |
|------|------|
| Vue 3 + Vite | 前端框架 |
| Pinia | 状态管理 |
| Capacitor 6 | 原生容器 |
| Gradle 8.2 | Android构建 |

## 快速开始

### 本地运行
```bash
npm install
npm run dev
```

### 构建APK (GitHub Actions)
1. 创建GitHub仓库并推送代码
2. 触发Actions构建
3. 下载APK安装到电视

详细步骤见 [GITHUB_ACTIONS_GUIDE.md](./GITHUB_ACTIONS_GUIDE.md)

## 项目结构
```
edu-tv-app/
├── src/
│   ├── views/       # 页面组件
│   ├── data/        # 题库数据
│   └── stores/      # Pinia状态
├── android/         # Android原生项目
├── dist/           # Web构建产物
└── .github/        # CI/CD配置
```

## 许可证
MIT
