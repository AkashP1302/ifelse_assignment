import React, {useEffect, useState, useRef} from 'react';
import {View, ScrollView, Animated} from 'react-native';
import InfoCard from '../components/InfoCard';
import {infoCards} from '../jsonData/infoCardData';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../constants/colors';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

const Dashboard = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Animation for shaking the left icon
  const shakeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Loop the shake animation for the left icon
    const shake = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(shakeAnim, {
            toValue: 1, // Move right
            duration: 150,
            useNativeDriver: true,
          }),
          Animated.timing(shakeAnim, {
            toValue: -1, // Move left
            duration: 150,
            useNativeDriver: true,
          }),
          Animated.timing(shakeAnim, {
            toValue: 0, // Reset position
            duration: 150,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    };

    // Start the animation when the component mounts
    shake();

    // Cleanup on unmount
    return () => shakeAnim.stopAnimation();
  }, [shakeAnim]);

  if (showLoader) {
    return (
      <View style={{padding: 4, flexDirection: 'row'}}>
        {[...Array(3)].map((_, index) => (
          <View key={index} style={{marginRight: 5}}>
            <ShimmerPlaceholder
              width={150}
              height={100}
              autoRun={true}
              style={{borderRadius: 10}}
            />
          </View>
        ))}
      </View>
    );
  }

  return (
    <View style={{padding: 4}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {infoCards.map(card => (
          <View key={card.id} style={{marginRight: 5}}>
            <InfoCard
              backgroundColor={card.backgroundColor}
              title={card.title}
              subtitle={card.subtitle}
              leftIcon={
                <Animated.View
                  style={[
                    {
                      borderRadius: 20,
                      width: 30,
                      height: 30,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: colors.secondary,
                    },
                    {
                      transform: [
                        {
                          translateX: shakeAnim, // Apply the shaking effect
                        },
                      ],
                    },
                  ]}>
                  <FontAwesome
                    name={card.leftIcon}
                    size={20}
                    color={colors.primary}
                  />
                </Animated.View>
              }
              rightIcon={
                <View
                  style={{
                    borderRadius: 20,
                    width: 30,
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.card,
                  }}>
                  <FontAwesome
                    name={card.rightIcon}
                    size={12}
                    color={colors.primary}
                  />
                </View>
              }
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Dashboard;
