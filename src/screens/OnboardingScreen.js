import React, { useState, useRef } from 'react';
import { View, Text, FlatList, Dimensions, TouchableOpacity, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, Circle } from 'react-native-svg';

const { width: screenWidth } = Dimensions.get('window');

const onboardingData = [
  {
    id: '1',
    title: 'Welcome to Core Nest',
    description: 'Your safe space for mental wellness and personal growth.',
    icon: 'mind',
  },
  {
    id: '2',
    title: 'Track Your Journey',
    description: 'Monitor your mood, habits, and progress with personalized insights.',
    icon: 'chart',
  },
  {
    id: '3',
    title: 'Find Your Peace',
    description: 'Access guided meditations, breathing exercises, and mindfulness tools.',
    icon: 'peace',
  },
];

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const buttonOpacity = useRef(new Animated.Value(1)).current;

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      const nextIndex = currentIndex + 1;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    } else {
      navigation.replace('Join');
    }
  };

  const handleSkip = () => {
    navigation.replace('Join');
  };

  const handleScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const currentIndex = Math.floor(event.nativeEvent.contentOffset.x / slideSize);
    setCurrentIndex(currentIndex);
  };

  const renderIcon = (iconType) => {
    switch (iconType) {
      case 'mind':
        return (
          <Svg width="80" height="80" viewBox="0 0 24 24" fill="none">
            <Path
              d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"
              fill="#2A2AFF"
            />
            <Circle cx="9" cy="9" r="1.5" fill="white" />
            <Circle cx="15" cy="9" r="1.5" fill="white" />
            <Path
              d="M8 14s1.5 2 4 2 4-2 4-2"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </Svg>
        );
      case 'chart':
        return (
          <Svg width="80" height="80" viewBox="0 0 24 24" fill="none">
            <Path
              d="M3 3v18h18"
              stroke="#2A2AFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M7 16l4-4 4 4 6-6"
              stroke="#2A2AFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Circle cx="7" cy="16" r="2" fill="#2A2AFF" />
            <Circle cx="11" cy="12" r="2" fill="#2A2AFF" />
            <Circle cx="15" cy="16" r="2" fill="#2A2AFF" />
            <Circle cx="21" cy="10" r="2" fill="#2A2AFF" />
          </Svg>
        );
      case 'peace':
        return (
          <Svg width="80" height="80" viewBox="0 0 24 24" fill="none">
            <Path
              d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
              fill="#2A2AFF"
            />
            <Path
              d="M16 8L2 22"
              stroke="#2A2AFF"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <Path
              d="M17.5 15H9"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </Svg>
        );
      default:
        return null;
    }
  };

  const renderSlide = ({ item, index }) => (
    <View style={{ width: screenWidth }} className="flex-1">
      {/* Blue curved background */}
      <View className="h-80 relative">
        <LinearGradient
          colors={['#2A2AFF', '#4A4AFF']}
          style={{
            flex: 1,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}
        />
        {/* Icon positioned over the curve */}
        <View className="absolute bottom-[-40] left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white rounded-full justify-center items-center shadow-lg">
          {renderIcon(item.icon)}
        </View>
      </View>

      {/* Content */}
      <View className="flex-1 px-8 pt-16 justify-center">
        <Text className="text-3xl font-poppins-bold text-gray-900 text-center mb-4">
          {item.title}
        </Text>
        <Text className="text-lg font-poppins text-gray-600 text-center leading-7">
          {item.description}
        </Text>
      </View>

      {/* Pagination dots */}
      <View className="flex-row justify-center mb-8">
        {onboardingData.map((_, i) => (
          <View
            key={i}
            className={`w-3 h-3 rounded-full mx-1 ${
              i === currentIndex ? 'bg-primary' : 'bg-gray-300'
            }`}
          />
        ))}
      </View>

      {/* Button */}
      <View className="px-8 pb-10">
        <Animated.View style={{ opacity: buttonOpacity }}>
          <TouchableOpacity
            onPress={handleNext}
            className="bg-primary py-4 px-8 rounded-2xl shadow-lg"
            activeOpacity={0.8}
          >
            <Text className="text-white text-lg font-poppins-semibold text-center">
              {currentIndex === onboardingData.length - 1 ? 'Get Started' : 'Next'}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Skip button */}
      <View className="absolute top-12 right-6 z-10">
        <TouchableOpacity onPress={handleSkip} className="py-2 px-4">
          <Text className="text-gray-600 font-poppins-medium">Skip</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        ref={flatListRef}
        data={onboardingData}
        renderItem={renderSlide}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        scrollEventThrottle={16}
      />
    </SafeAreaView>
  );
};

export default OnboardingScreen;
