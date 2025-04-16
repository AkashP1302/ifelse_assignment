import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../constants/colors';
import styles from './styles/ActivityCard.style';

interface ActivityCardProps {
  title: string;
  metric: string;
  trend: number;
  avgPerDay: string;
  trendColor: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  metric,
  trend,
  avgPerDay,
  trendColor,
}) => {
  const translateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const toValue = trend >= 0 ? -6 : 6;

    const loopAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(translateAnim, {
          toValue,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]),
    );

    loopAnimation.start();

    // Clean up on unmount
    return () => loopAnimation.stop();
  }, [trend]);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.trendRow}>
        <Text style={[styles.metric, {color: trendColor}]}>{metric}</Text>

        <Animated.View style={{transform: [{translateY: translateAnim}]}}>
          <FontAwesome
            name={trend >= 0 ? 'arrow-up' : 'arrow-down'}
            size={14}
            color={trendColor}
          />
        </Animated.View>

        <Text style={[styles.trendText, {color: trendColor}]}>
          {trend > 0 ? '+' : ''}
          {trend}%
        </Text>
      </View>

      <Text style={styles.subtext}>{avgPerDay}</Text>
    </View>
  );
};

export default ActivityCard;
