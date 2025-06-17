import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, Alert, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, Defs, RadialGradient, Stop, Circle } from 'react-native-svg';

const AuthScreen = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleGoogleSignIn = () => {
    Alert.alert('Google Sign In', 'Google authentication would be implemented here with expo-auth-session');
  };

  const handleFacebookSignIn = () => {
    Alert.alert('Facebook Sign In', 'Facebook authentication would be implemented here');
  };

  const handleAppleSignIn = () => {
    Alert.alert('Apple Sign In', 'Apple authentication would be implemented here');
  };
  const SimpleLeafIcon = () => (
    <Svg width="60" height="60" viewBox="0 0 24 24" fill="none">
      <Defs>
        <RadialGradient id="authLeafGrad" cx="50%" cy="50%" r="70%">
          <Stop offset="0%" stopColor="#667eea" />
          <Stop offset="100%" stopColor="#764ba2" />
        </RadialGradient>
      </Defs>
      <Path
        d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
        fill="url(#authLeafGrad)"
      />
      <Path
        d="M16 8L2 22"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />
      <Circle cx="14" cy="10" r="1" fill="#ffffff" opacity="0.7" />
    </Svg>
  );

  const GoogleIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24">
      <Path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <Path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <Path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <Path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </Svg>
  );

  const FacebookIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24">
      <Path
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
        fill="#1877F2"
      />
    </Svg>
  );

  const AppleIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24">
      <Path
        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
        fill="#000000"
      />
    </Svg>
  );
  const SimpleAuthButton = ({ onPress, icon, text, bgColors, textColor, borderColor }) => (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="w-full mb-4 overflow-hidden rounded-xl"
    >
      <LinearGradient
        colors={bgColors}
        style={{
          paddingVertical: 16,
          paddingHorizontal: 24,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        {borderColor && (
          <View className="absolute inset-0 border border-gray-200 rounded-xl" />
        )}
        <View className="mr-3">
          {icon}
        </View>
        <Text className={`${textColor} text-lg font-poppins-semibold`}>
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      
      <LinearGradient
        colors={['#f8fafc', '#e2e8f0']}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View className="flex-1 justify-center px-8">
          {/* Header section */}
          <Animated.View
            style={{
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            }}
            className="items-center mb-12"
          >
            {/* Simple logo */}
            <View className="mb-6">
              <SimpleLeafIcon />
            </View>

            <Text className="text-3xl font-poppins-bold text-gray-900 mb-3 tracking-tight">
              Welcome Back
            </Text>
            <Text className="text-lg font-poppins text-gray-600 text-center leading-6 max-w-sm">
              Choose your preferred method to continue
            </Text>
          </Animated.View>

          {/* Auth buttons */}
          <Animated.View
            style={{
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            }}
            className="w-full"
          >
            <SimpleAuthButton
              onPress={handleGoogleSignIn}
              icon={<GoogleIcon />}
              text="Continue with Google"
              bgColors={['#ffffff', '#f8fafc']}
              textColor="text-gray-700"
              borderColor={true}
            />

            <SimpleAuthButton
              onPress={handleFacebookSignIn}
              icon={<FacebookIcon />}
              text="Continue with Facebook"
              bgColors={['#1877f2', '#4267B2']}
              textColor="text-white"
            />

            <SimpleAuthButton
              onPress={handleAppleSignIn}
              icon={<AppleIcon />}
              text="Continue with Apple"
              bgColors={['#000000', '#1a1a1a']}
              textColor="text-white"
            />
          </Animated.View>

          {/* Simple divider */}
          <Animated.View
            style={{ opacity: fadeAnim }}
            className="flex-row items-center my-8"
          >
            <View className="flex-1 h-px bg-gray-300" />
            <Text className="mx-4 text-gray-500 font-poppins text-sm">
              Secure & Private
            </Text>
            <View className="flex-1 h-px bg-gray-300" />
          </Animated.View>

          {/* Footer */}
          <Animated.View
            style={{ opacity: fadeAnim }}
            className="items-center"
          >
            <Text className="text-sm font-poppins text-gray-500 text-center leading-5 max-w-sm">
              By continuing, you agree to our{' '}
              <Text className="text-blue-600 font-poppins-semibold">Terms</Text>
              {' '}and{' '}
              <Text className="text-blue-600 font-poppins-semibold">Privacy Policy</Text>
            </Text>
          </Animated.View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default AuthScreen;
