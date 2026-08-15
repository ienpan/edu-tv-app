#!/bin/bash
# 启蒙乐园 - 完整构建脚本
# 需要先安装 JDK 17 (已完成) 和 Android SDK

set -e

JAVA_HOME="${JAVA_HOME:-$HOME/tools/jdk-17}"
ANDROID_HOME="${ANDROID_HOME:-$HOME/Android/Sdk}"
PROJECT_DIR="/home/ienpan/projects/edu-tv-app"
ANDROID_DIR="$PROJECT_DIR/android"

export JAVA_HOME
export ANDROID_HOME
export PATH="$JAVA_HOME/bin:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$PATH"

echo "========================================"
echo "  启蒙乐园 - APK 构建脚本"
echo "========================================"
echo ""

# 检查 Java
if ! "$JAVA_HOME/bin/java" -version &>/dev/null; then
    echo "❌ Java 未找到: $JAVA_HOME"
    exit 1
fi
echo "✅ Java: $($JAVA_HOME/bin/java -version 2>&1 | head -1)"

# 检查 Android SDK
if [ ! -d "$ANDROID_HOME" ]; then
    echo "❌ Android SDK 未安装: $ANDROID_HOME"
    echo ""
    echo "请手动安装 Android SDK:"
    echo "  1. 下载: https://developer.android.com/studio#command-tools"
    echo "  2. 解压到: $ANDROID_HOME"
    echo "  3. 运行: sdkmanager 'platforms;android-34' 'build-tools;34.0.0'"
    exit 1
fi
echo "✅ Android SDK: $ANDROID_HOME"

# 确保 Web 应用已构建
if [ ! -f "$PROJECT_DIR/dist/index.html" ]; then
    echo ""
    echo "📦 构建 Web 应用..."
    cd "$PROJECT_DIR"
    npm run build
fi
echo "✅ Web 应用已构建"

# 同步 Capacitor
echo "📦 同步 Capacitor..."
cd "$PROJECT_DIR"
npx cap sync android

# 构建 APK
echo ""
echo "📦 构建 Android APK..."
cd "$ANDROID_DIR"

# 安装必要的 SDK 组件（如果未安装）
if [ ! -d "$ANDROID_HOME/platforms/android-34" ]; then
    echo "  安装 Android SDK 组件..."
    yes | sdkmanager --licenses > /dev/null 2>&1 || true
    sdkmanager "platforms;android-34" "build-tools;34.0.0" "platform-tools"
fi

./gradlew assembleRelease

echo ""
echo "========================================"
echo "  ✅ 构建完成!"
echo "========================================"
echo ""

APK_PATH="$ANDROID_DIR/app/build/outputs/apk/release/app-release.apk"
if [ -f "$APK_PATH" ]; then
    APK_SIZE=$(du -h "$APK_PATH" | cut -f1)
    echo "📱 APK 位置: $APK_PATH"
    echo "📏 APK 大小: $APK_SIZE"
    echo ""
    echo "安装到小米电视:"
    echo "  方法1: cp $APK_PATH /mnt/usb/ && 插入U盘到电视安装"
    echo "  方法2: adb install $APK_PATH"
else
    echo "❌ APK 构建失败"
    exit 1
fi
