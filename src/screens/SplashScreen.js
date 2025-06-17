import React, { useEffect } from 'react';
import { View, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg';

const SplashScreen = () => {
  const navigation = useNavigation();
  const scaleAnim = new Animated.Value(0);

  useEffect(() => {
    // Animate the icon
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1.1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();

    // Navigate to onboarding after 2.5 seconds
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation]);

  const FeatherIcon = () => (
    <Svg width="60" height="60" viewBox="0 0 24 24" fill="none">
      <Path
        d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
        stroke="#2A2AFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#2A2AFF"
      />
      <Path
        d="M16 8L2 22"
        stroke="#2A2AFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.5 15H9"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#2A2AFF' }}>
      <View className="flex-1 justify-center items-center bg-primary">
        <Animated.View
          style={{
            transform: [{ scale: scaleAnim }],
          }}
          className="w-32 h-32 bg-white rounded-full justify-center items-center shadow-lg"
        >
          <FeatherIcon />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
