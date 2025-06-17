import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg';

const JoinScreen = () => {
  const navigation = useNavigation();
  const fadeAnim = new Animated.Value(0);
  const slideAnim = new Animated.Value(50);

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleJoinUs = () => {
    navigation.navigate('Auth');
  };

  const LeafIcon = () => (
    <Svg width="100" height="100" viewBox="0 0 24 24" fill="none">
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
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View className="flex-1 justify-center items-center px-8">
        <Animated.View
          style={{
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          }}
          className="items-center mb-12"
        >
          {/* Logo/Icon */}
          <View className="w-32 h-32 bg-gray-50 rounded-full justify-center items-center mb-8 shadow-lg">
            <LeafIcon />
          </View>

          {/* Title */}
          <Text className="text-4xl font-poppins-bold text-gray-900 mb-4 text-center">
            Core Nest
          </Text>

          {/* Description */}
          <Text className="text-lg font-poppins text-gray-600 text-center leading-7 max-w-sm">
            Sign in to start your mental health journey with personalized tools and insights.
          </Text>
        </Animated.View>

        {/* Join Us Button */}
        <Animated.View
          style={{
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          }}
          className="w-full"
        >
          <TouchableOpacity
            onPress={handleJoinUs}
            className="bg-primary py-4 px-8 rounded-2xl shadow-lg w-full"
            activeOpacity={0.8}
          >
            <Text className="text-white text-lg font-poppins-semibold text-center">
              Join Us
            </Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Footer text */}
        <Animated.View
          style={{
            opacity: fadeAnim,
          }}
          className="mt-8"
        >
          <Text className="text-sm font-poppins text-gray-500 text-center">
            Your wellness journey starts here
          </Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default JoinScreen;
