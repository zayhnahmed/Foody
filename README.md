# 🍔 Foody

A React Native mobile application built using **React Native CLI**, focused on learning and implementing native modules, navigation, and Android builds. 
**Note to Self**: I wanted to explore how React Native CLI approach would look like, unlike the previous project (Seikatsu) that uses Expo.

---

## 🚀 Tech Stack

- **React Native (CLI)**
- **TypeScript**
- **Android Studio**
- **Style Sheet**

---

## 📋 Prerequisites

Make sure the following are installed and properly configured:

- **Node.js** (LTS recommended)
- **npm** or **yarn**
- **Android Studio**
- **Android SDK**
- **Java JDK (17 recommended)**
- **React Native CLI**

Environment variables required:
- `ANDROID_HOME`
- `JAVA_HOME`

---

## 📦 Installation

### 1️⃣ Clone the repository
```bash
git clone <your-repo-url>
cd FoodApp
```

2️⃣ Install dependencies

Using npm:
```bash
npm install
npm install @react-native-community/cli
npm install react-native-screens
npm install @react-native-community/netinfo
npm install @react-navigation/native
npm install @react-navigation/bottom-tabs
npm install @react-navigation/native-stack
npm install @react-native-async-storage/async-storage
```

---

## 🤖 Android Setup (Windows)

### Android Studio SDK Tools

Open **Android Studio** → **SDK Manager** → **SDK Tools**

Ensure Android SDK Build-Tools, Android SDK Command-line Tools, Android SDK Platform-Tools, Google Play Licensing, NDK (Side by Side), CMake is installed

⚠️ Note: Ninja and LLDB are bundled with CMake in newer Android Studio versions.

---

## ▶ Running the App

### Android
```bash
npx react-native run-android
```

---

## 📌 Notes

- This project uses React Native CLI, not Expo.
- Android builds require proper SDK + CMake configuration.

---

## 📜 License

This project is for learning and development purposes.
