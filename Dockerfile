FROM eclipse-temurin:17-jdk

ENV ANDROID_SDK_ROOT=/opt/android-sdk \
    ANDROID_HOME=/opt/android-sdk \
    JAVA_HOME=/opt/java/openjdk \
    DEBIAN_FRONTEND=noninteractive

# 使用华为镜像加速
RUN sed -i 's/deb.debian.org/mirrors.huaweicloud.com/g' /etc/apt/sources.list.d/debian.sources 2>/dev/null || \
    sed -i 's/deb.debian.org/mirrors.huaweicloud.com/g' /etc/apt/sources.list 2>/dev/null || true

RUN apt-get update && apt-get install -y \
    wget \
    unzip \
    curl \
    cmake \
    build-essential \
    fonts-liberation \
    libnss3 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libdrm2 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    libgbm1 \
    libxkbcommon0 \
    libpango-1.0-0 \
    libcairo2 \
    libasound2 \
    && rm -rf /var/lib/apt/lists/*

# 安装Android SDK Command Line Tools from Huawei mirror
RUN mkdir -p $ANDROID_SDK_ROOT && \
    cd $ANDROID_SDK_ROOT && \
    wget -q https://repo.huaweicloud.com/android/repository/commandlinetools-linux-9477386_latest.zip -O tools.zip 2>/dev/null || \
    wget -q https://dl.google.com/android/repository/commandlinetools-linux-9477386_latest.zip -O tools.zip 2>/dev/null || true && \
    unzip -q tools.zip 2>/dev/null && \
    mv cmdline-tools latest 2>/dev/null || true && \
    rm tools.zip 2>/dev/null || true

# 设置SDK管理器并安装组件
RUN export PATH=$ANDROID_SDK_ROOT/cmdline-tools/latest/bin:$PATH && \
    yes | sdkmanager --sdk_root=$ANDROID_SDK_ROOT --licenses 2>/dev/null || true && \
    sdkmanager --sdk_root=$ANDROID_SDK_ROOT "platforms;android-33" "build-tools;33.0.0" 2>/dev/null || \
    sdkmanager --sdk_root=$ANDROID_SDK_ROOT "platforms;android-32" "build-tools;32.0.0" 2>/dev/null || true

WORKDIR /app

COPY . .

RUN npm ci --ignore-scripts 2>/dev/null || npm install --ignore-scripts

RUN npm run build

RUN npx cap sync android

RUN cd android && \
    export JAVA_HOME=/opt/java/openjdk && \
    export ANDROID_HOME=/opt/android-sdk && \
    export PATH=$JAVA_HOME/bin:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$PATH && \
    ./gradlew assembleDebug || ./gradlew assembleRelease

RUN mkdir -p /output && \
    find /app/android -name "*.apk" -exec cp {} /output/ \; 2>/dev/null || true

CMD ["ls", "-la", "/output/"]
