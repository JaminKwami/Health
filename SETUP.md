# Core Nest Setup & Development Guide

## 🚀 Quick Start

1. **Install Expo CLI globally** (if not already installed):
   ```bash
   npm install -g @expo/cli
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Run on device/simulator**:
   - For iOS: Press `i` in the terminal or `npm run ios`
   - For Android: Press `a` in the terminal or `npm run android`
   - For Web: Press `w` in the terminal or `npm run web`

## 📱 Testing on Physical Device

1. **Install Expo Go app** on your phone:
   - iOS: [App Store](https://apps.apple.com/app/expo-go/id982107779)
   - Android: [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. **Scan QR code** from the terminal when you run `npm start`

## 🛠 Development Commands

- `npm start` - Start Metro bundler
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator  
- `npm run web` - Run in web browser

## 🎨 Customization Guide

### Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  primary: '#2A2AFF',        // Main brand color
  'primary-light': '#4A4AFF', // Lighter variant
  'primary-dark': '#1A1AEE',  // Darker variant
}
```

### Fonts
Fonts are configured in `App.js`. To add new fonts:
1. Install from `@expo-google-fonts`
2. Import in `App.js`
3. Add to `tailwind.config.js`

### Screen Flow
Modify navigation in `App.js`:
```javascript
<Stack.Screen name="ScreenName" component={ScreenComponent} />
```

## 📁 File Structure

```
├── App.js                 # Main app entry point
├── src/
│   └── screens/
│       ├── SplashScreen.js      # 🔵 Animated splash
│       ├── OnboardingScreen.js  # 🟦 3-slide onboarding
│       ├── JoinScreen.js        # 🟩 Welcome screen
│       └── AuthScreen.js        # 🟨 Social auth
├── assets/                # Images and icons
├── package.json          # Dependencies
├── app.json             # Expo configuration
├── tailwind.config.js   # Styling configuration
└── babel.config.js      # Babel configuration
```

## 🔧 Troubleshooting

### Common Issues:

1. **Metro bundler cache issues**:
   ```bash
   npx expo start --clear
   ```

2. **iOS simulator not opening**:
   ```bash
   npx expo run:ios
   ```

3. **Android emulator issues**:
   - Ensure Android Studio is installed
   - Check that emulator is running

4. **Font loading issues**:
   - Fonts load asynchronously
   - App shows loading state until fonts are ready

### Reset Project:
```bash
rm -rf node_modules
npm install
npx expo start --clear
```

## 🚀 Next Steps

1. **Implement OAuth**: Replace alert dialogs with actual authentication
2. **Add Navigation**: Implement bottom tabs or drawer navigation
3. **Create Components**: Build reusable UI components
4. **Add Features**: Mood tracking, meditation timers, etc.
5. **State Management**: Add Redux or Zustand for app state
6. **Backend Integration**: Connect to Firebase or custom API

## 📚 Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)

---

Happy coding! 🧘🏽‍♂️✨
