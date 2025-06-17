import React, { useEffect, useRef } from 'react';
import { View, Animated, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, Circle } from 'react-native-svg';

const SplashScreen = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    // Simple, smooth animation
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

    // Navigate after 2.5 seconds
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation]);

  const SimpleLeafIcon = () => (
    <Svg width="60" height="60" viewBox="0 0 24 24" fill="none">
      <Path
        d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
        fill="#ffffff"
      />
      <Path
        d="M16 8L2 22"
        stroke="#667eea"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M17.5 15H9"
        stroke="#667eea"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Circle cx="14" cy="10" r="1" fill="#667eea" />
    </Svg>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View className="flex-1 justify-center items-center">
          {/* Clean, simple icon container */}
          <Animated.View
            style={{
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            }}
            className="w-32 h-32 bg-white rounded-3xl justify-center items-center shadow-lg mb-8"
          >
            <SimpleLeafIcon />
          </Animated.View>

          {/* Clean typography */}
          <Animated.View
            style={{ opacity: fadeAnim }}
            className="items-center"
          >
            <Text className="text-white text-3xl font-poppins-bold mb-2">
              Core Nest
            </Text>
            <Text className="text-white/70 text-base font-poppins">
              Mindful Living
            </Text>
          </Animated.View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SplashScreen;
