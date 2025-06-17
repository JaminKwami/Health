import React, { useState, useRef } from 'react';
import { View, Text, FlatList, Dimensions, TouchableOpacity, Animated, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, Circle } from 'react-native-svg';

const { width: screenWidth } = Dimensions.get('window');

const onboardingData = [
  {
    id: '1',
    title: 'Welcome to Your\nMindful Journey',
    description: 'Discover inner peace and mental clarity with personalized wellness tools.',
    icon: 'mindfulness',
    gradient: ['#667eea', '#764ba2'],
  },
  {
    id: '2',
    title: 'Track & Reflect\nYour Progress',
    description: 'Monitor your emotional journey with beautiful insights and gentle reminders.',
    icon: 'growth',
    gradient: ['#f093fb', '#f5576c'],
  },
  {
    id: '3',
    title: 'Find Your\nInner Peace',
    description: 'Access guided meditations, breathing exercises, and mindfulness practices.',
    icon: 'peace',
    gradient: ['#4facfe', '#00f2fe'],
  },
];

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

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

  const renderIcon = (iconType) => {
    const iconProps = { width: "80", height: "80", viewBox: "0 0 24 24", fill: "none" };

    switch (iconType) {
      case 'mindfulness':
        return (
          <Svg {...iconProps}>
            <Circle cx="12" cy="12" r="10" fill="#ffffff" />
            <Path
              d="M8 14s1.5 2 4 2 4-2 4-2"
              stroke="#667eea"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <Circle cx="9" cy="9" r="1.5" fill="#667eea" />
            <Circle cx="15" cy="9" r="1.5" fill="#667eea" />
          </Svg>
        );
      case 'growth':
        return (
          <Svg {...iconProps}>
            <Path
              d="M3 21L21 3"
              stroke="#ffffff"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <Circle cx="7" cy="17" r="3" fill="#ffffff" />
            <Circle cx="12" cy="12" r="2.5" fill="#ffffff" />
            <Circle cx="17" cy="7" r="3" fill="#ffffff" />
          </Svg>
        );
      case 'peace':
        return (
          <Svg {...iconProps}>
            <Path
              d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
              fill="#ffffff"
            />
            <Path
              d="M16 8L2 22"
              stroke="#667eea"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <Path
              d="M17.5 15H9"
              stroke="#667eea"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </Svg>
        );
      default:
        return null;
    }
  };

  const renderSlide = ({ item }) => (
    <View style={{ width: screenWidth }} className="flex-1">
      <LinearGradient
        colors={item.gradient}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View className="flex-1 justify-center items-center px-8">
          {/* Simple icon */}
          <View className="w-32 h-32 justify-center items-center rounded-3xl bg-white/20 mb-12">
            {renderIcon(item.icon)}
          </View>

          {/* Clean text content */}
          <View className="items-center mb-16">
            <Text className="text-white text-3xl font-poppins-bold text-center leading-tight mb-6">
              {item.title}
            </Text>
            <Text className="text-white/90 text-lg font-poppins text-center leading-7 max-w-sm">
              {item.description}
            </Text>
          </View>
        </View>

        {/* Bottom section */}
        <View className="pb-12 px-8">
          {/* Simple pagination dots */}
          <View className="flex-row justify-center mb-8">
            {onboardingData.map((_, i) => (
              <View
                key={i}
                className={`w-2 h-2 rounded-full mx-1 ${
                  i === currentIndex ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </View>

          {/* Clean button */}
          <TouchableOpacity
            onPress={handleNext}
            activeOpacity={0.8}
            className="bg-white/90 py-4 px-8 rounded-2xl"
          >
            <Text className="text-gray-800 text-lg font-poppins-semibold text-center">
              {currentIndex === onboardingData.length - 1 ? 'Begin Journey' : 'Continue'}
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      
      {/* Simple skip button */}
      <View className="absolute top-16 right-6 z-10">
        <TouchableOpacity
          onPress={handleSkip}
          className="bg-white/20 px-4 py-2 rounded-full"
          activeOpacity={0.7}
        >
          <Text className="text-white font-poppins-medium">Skip</Text>
        </TouchableOpacity>
      </View>

      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <FlatList
          ref={flatListRef}
          data={onboardingData}
          renderItem={renderSlide}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(event) => {
            const slideSize = event.nativeEvent.layoutMeasurement.width;
            const currentIndex = Math.floor(event.nativeEvent.contentOffset.x / slideSize);
            setCurrentIndex(currentIndex);
          }}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
