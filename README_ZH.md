# 启蒙乐园 🎓

小米电视教育应用 - 小学1-6年级学习内容

## 功能特点

- ✅ 覆盖小学1-6年级全部学科
- ✅ 语文、数学、英语核心知识点
- ✅ 科学课程（三年级以上）
- ✅ 游戏化学习体验
- ✅ 积分、金币奖励系统
- ✅ 电视遥控器友好交互
- ✅ 大屏优化设计

## 技术栈

- Vue 3 + Vite
- Capacitor 6 (原生打包)
- Pinia (状态管理)
- Vue Router (路由)

## 快速开始

### 前置要求

- Node.js 18+
- npm 9+
- Java JDK 11+ (打包APK时需要)
- Android SDK (打包APK时需要)

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:5173 预览效果

### 构建APK

#### 方法一：使用构建脚本

```bash
chmod +x build.sh
./build.sh
```

#### 方法二：手动构建

```bash
# 1. 构建Web应用
npm run build

# 2. 同步到Android项目
npx cap sync android

# 3. 进入Android目录
cd android

# 4. 设置Java环境（如果尚未设置）
export JAVA_HOME=/path/to/jdk
export ANDROID_HOME=$HOME/Android/Sdk

# 5. 构建Release APK
./gradlew assembleRelease
```

### APK位置

构建完成后，APK位于：
```
android/app/build/outputs/apk/release/app-release.apk
```

## 安装到小米电视

### 方法一：USB安装
1. 将APK文件拷贝到U盘
2. 插入小米电视USB接口
3. 在电视上打开文件管理器
4. 找到APK文件并安装

### 方法二：ADB安装
```bash
adb connect <电视IP地址>
adb install app-release.apk
```

### 方法三：网络安装
通过小米电视的文件传输功能上传APK

## 项目结构

```
edu-tv-app/
├── index.html              # HTML入口
├── package.json            # 依赖配置
├── vite.config.js          # Vite配置
├── capacitor.config.json   # Capacitor配置
├── build.sh                # 构建脚本
├── src/
│   ├── main.js            # Vue入口
│   ├── App.vue            # 根组件
│   ├── style.css          # 全局样式
│   ├── router/            # 路由配置
│   ├── stores/            # Pinia状态管理
│   ├── data/              # 题库数据
│   └── views/             # 页面组件
│       ├── Home.vue       # 首页
│       ├── GradeSelect.vue # 年级选择
│       ├── SubjectSelect.vue # 学科选择
│       ├── Quiz.vue        # 答题界面
│       └── Result.vue      # 结果界面
├── dist/                   # 构建输出
└── android/               # Android原生项目
```

## 题库内容

### 一年级
- 语文：拼音、识字、基础汉字
- 数学：10以内加减法
- 英语：字母、基础词汇

### 二年级
- 语文：词语、句子、偏旁部首
- 数学：乘法口诀、除法入门
- 英语：日常用语、基础词汇

### 三年级
- 语文：成语故事、阅读理解
- 数学：乘除法混合运算、几何入门
- 英语：句型、时态基础
- 科学：自然常识、物理启蒙

### 四年级
- 语文：成语典故、名著导读
- 数学：大数运算、面积周长
- 英语：时态进阶、阅读
- 科学：力学、光学入门

### 五年级
- 语文：古典名著、文言文入门
- 数学：分数、小数、方程
- 英语：语法、从句基础
- 科学：能量、简单机械

### 六年级
- 语文：小学综合复习、名著精读
- 数学：小升初总复习、几何综合
- 英语：综合练习、虚拟语气
- 科学：小学科学总复习

## 遥控器的操作

- **方向键 ↑↓←→**：导航焦点
- **确定键/OK**：选择/确认
- **返回键**：返回上一页
- **菜单键**：系统菜单

## 后续优化建议

1. **语音交互**：添加语音朗读题目和答案
2. **家长控制**：设置学习时长限制
3. **进度同步**：云端存储学习进度
4. **更多内容**：扩充题库至完整小学 curriculum
5. **多人模式**：支持多个孩子使用

## 许可证

MIT License
