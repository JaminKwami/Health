# Core Nest - Mental Health App

🧘🏽‍♂️ **Core Nest** is a modern React Native mental health app built with Expo, featuring a beautiful onboarding flow and social authentication.

## ✨ Features

- **🔵 Splash Screen**: Animated entry with custom feather icon
- **🟦 Onboarding Flow**: 3-slide horizontal carousel with smooth animations
- **🟩 Join Screen**: Clean welcome screen with call-to-action
- **🟨 Auth Screen**: Social login with Google, Facebook, and Apple

## 🚀 Tech Stack

- **Expo SDK 53** - Latest stable version with React 19 support
- **React 19.0.0** - Latest React with improved performance
- **React Native 0.79.3** - Latest React Native version
- **React Navigation v6** - Stack navigation
- **NativeWind** - TailwindCSS for React Native styling
- **React Native Reanimated v3.17** - Smooth animations with latest features
- **React Native SVG 15.11** - Custom vector icons
- **Expo Google Fonts (Poppins)** - Typography
- **React Native Safe Area Context v5** - Enhanced safe area handling

## 🎨 Design System

- **Primary Color**: `#2A2AFF` (Core Nest Blue)
- **Font Family**: Poppins (Regular, Medium, SemiBold, Bold)
- **Border Radius**: `rounded-2xl` for buttons and cards
- **Spacing**: Consistent Tailwind spacing units

## 📱 Screens

### 1. Splash Screen
- Fullscreen blue background (`#2A2AFF`)
- Animated white circle with blue feather icon
- Auto-navigates to onboarding after 2.5 seconds

### 2. Onboarding Screen
- 3 horizontal slides with `FlatList`
- Blue curved background with centered icons
- Pagination dots and animated "Next" → "Get Started" button
- Skip functionality to jump to Join screen

### 3. Join Screen
- Clean white background with centered logo
- "Core Nest" branding with description
- "Join Us" call-to-action button

### 4. Auth Screen
- Social authentication options
- Google, Facebook, and Apple sign-in buttons
- Custom SVG icons for each provider

## 🛠 Installation & Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Run on specific platforms**:
   ```bash
   npm run android  # Android
   npm run ios      # iOS
   npm run web      # Web
   ```

## 📦 Dependencies

- `expo` - Core Expo SDK
- `@react-navigation/native` - Navigation framework
- `@react-navigation/stack` - Stack navigator
- `react-native-screens` - Native screen components
- `react-native-safe-area-context` - Safe area handling
- `react-native-gesture-handler` - Gesture system
- `nativewind` - TailwindCSS integration
- `react-native-reanimated` - Animation library
- `react-native-svg` - SVG support
- `expo-linear-gradient` - Gradient backgrounds
- `@expo-google-fonts/poppins` - Poppins font family
- `expo-auth-session` - OAuth authentication
- `expo-crypto` & `expo-web-browser` - Auth dependencies

## 🎯 Future Enhancements

- Implement actual OAuth flows with Firebase Auth
- Add mood tracking features
- Integrate guided meditation content
- Build user profile and settings
- Add dark mode support
- Implement push notifications

## 📄 Project Structure

```
src/
├── screens/
│   ├── SplashScreen.js     # Animated splash screen
│   ├── OnboardingScreen.js # 3-slide onboarding
│   ├── JoinScreen.js       # Welcome/join screen
│   └── AuthScreen.js       # Social authentication
└── components/             # Reusable components
```

---

Built with ❤️ for mental wellness and personal growth.