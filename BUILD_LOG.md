# 启蒙乐园 - 构建问题排查记录

## 当前状态

### 已修复的问题（按时间顺序）
| # | 问题 | 解决方案 | 提交 |
|---|------|---------|------|
| 1 | gradle-wrapper.jar 未提交 | 从 .gitignore 移除并添加追踪 | 9d0e445 |
| 2 | compileSdkVersion 28 → 34 | 升级 android/app/build.gradle | ea7ec35 |
| 3 | minSdkVersion 21 → 22 | 兼容 Capacitor 要求 | 64af701 |
| 4 | Theme.SplashScreen 不存在 | 改用 Theme.AppCompat.DayNight.NoActionBar | 45210ba |
| 5 | ic_banner 资源不存在 | 移除 AndroidManifest.xml 中的引用 | 9ae8f99 |
| 6 | Keyboard 插件已废弃 | 移除 registerPlugin 调用 | fc6b4f2 |
| 7 | Gradle 缓存优化 | 添加 clean 任务，更新缓存 key | c003812 |

### 最新错误（Run #16）
```
Execution failed for task ':app:mergeExtDexDebug'.
> Could not resolve all files for configuration ':app:debugRuntimeClasspath'.
   > Failed to transform kotlin-stdlib-1.9.10.jar
      > Execution failed for DexingWithClasspathTransform
         > Error while dexing.
```

这是 Kotlin 标准库与 Android Gradle Plugin 7.4.2 的兼容性问题。

---

## 下一步建议

### 方案 A：升级 AGP（推荐）
当前使用 AGP 7.4.2，需要升级到支持 Kotlin 1.9.x 的版本：

修改 `android/build.gradle`:
```gradle
dependencies {
    classpath 'com.android.tools.build:gradle:8.2.1'  // 升级 AGP
}
```

同时修改 `android/variables.gradle`:
```gradle
androidGradlePluginVersion = '8.2.1'
```

### 方案 B：降级 Kotlin 版本
在 `android/app/build.gradle` 中指定兼容的 Kotlin 版本：
```gradle
dependencies {
    implementation "org.jetbrains.kotlin:kotlin-stdlib:1.8.22"
}
```

### 方案 C：查看完整日志
访问 https://github.com/ienpan/edu-tv-app/actions
点击 Run #16，查看完整错误堆栈

---

## 手动构建备选方案

如果 GitHub Actions 持续失败，可以考虑：
1. 在有 Google 网络访问的机器上本地构建
2. 使用 Docker 容器构建（需要 Docker 环境）
3. 联系 Capacitor 社区获取 Android 构建支持

---

**最后更新**: 2026-08-15
**Git 仓库**: https://github.com/ienpan/edu-tv-app
