import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, Circle, Defs, RadialGradient, Stop } from 'react-native-svg';

const JoinScreen = () => {
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

  const handleJoinUs = () => {
    navigation.navigate('Auth');
  };
  const SimpleLogoIcon = () => (
    <Svg width="80" height="80" viewBox="0 0 24 24" fill="none">
      <Defs>
        <RadialGradient id="logoGrad" cx="50%" cy="50%" r="70%">
          <Stop offset="0%" stopColor="#667eea" />
          <Stop offset="100%" stopColor="#764ba2" />
        </RadialGradient>
      </Defs>
      <Path
        d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
        fill="url(#logoGrad)"
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
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      
      <LinearGradient
        colors={['#f8fafc', '#e2e8f0']}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View className="flex-1 justify-center items-center px-8">
          <Animated.View
            style={{
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            }}
            className="items-center w-full"
          >
            {/* Simple logo */}
            <View className="mb-12">
              <SimpleLogoIcon />
            </View>

            {/* Clean typography */}
            <View className="items-center mb-16">
              <Text className="text-4xl font-poppins-bold text-gray-900 mb-3 tracking-tight">
                Core Nest
              </Text>
              <Text className="text-lg font-poppins text-gray-600 text-center leading-6 max-w-sm">
                Begin your journey to mindful living and inner peace
              </Text>
            </View>

            {/* Simple CTA button */}
            <TouchableOpacity
              onPress={handleJoinUs}
              activeOpacity={0.8}
              className="w-full overflow-hidden rounded-xl"
            >
              <LinearGradient
                colors={['#667eea', '#764ba2']}
                style={{
                  paddingVertical: 18,
                  paddingHorizontal: 32,
                }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text className="text-white text-lg font-poppins-semibold text-center">
                  Start Your Journey
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* Simple features */}
            <View className="flex-row justify-center mt-12 space-x-8">
              {[
                { icon: '🧘', label: 'Meditate' },
                { icon: '📊', label: 'Track' },
                { icon: '🌱', label: 'Grow' },
              ].map((feature, index) => (
                <View key={index} className="items-center">
                  <Text className="text-xl mb-1">{feature.icon}</Text>
                  <Text className="text-gray-500 text-sm font-poppins">
                    {feature.label}
                  </Text>
                </View>
              ))}
            </View>
          </Animated.View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default JoinScreen;
