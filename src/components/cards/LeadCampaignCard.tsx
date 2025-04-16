import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import colors from '../../constants/colors';
import styles from './styles/LeadCampaignCard.style';

interface LeadCampaignCardProps {
  title: string;
  description: string;
  completed: number;
  pending: number;
}

const LeadCampaignCard: React.FC<LeadCampaignCardProps> = ({
  title,
  description,
  completed,
  pending,
}) => {
  const total = completed + pending;
  const progress = total > 0 ? (completed / total) * 100 : 0;

  // Animated value for shadow pulsation effect on the progress bar
  const progressBarScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Create a looped animation for shadow effect on progress bar
    const progressBarLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(progressBarScale, {
          toValue: 1.1, // Increase scale for pulsation effect
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(progressBarScale, {
          toValue: 1, // Return to normal size
          duration: 600,
          useNativeDriver: true,
        }),
      ]),
    );
    progressBarLoop.start();

    // Cleanup animation when component is unmounted
    return () => progressBarLoop.stop();
  }, [progressBarScale]);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      {/* Progress Bar */}
      <View style={styles.progressBackground}>
        <Animated.View // Use Animated.View for the progress bar
          style={[
            styles.progressBar,
            {width: `${progress}%`},
            {
              transform: [{scale: progressBarScale}], // Apply scale transformation
            },
          ]}
        />
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{completed}</Text>
          <Text style={styles.statLabel}>Complete</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{pending}</Text>
          <Text style={styles.statLabel}>Pending</Text>
        </View>
      </View>
    </View>
  );
};

export default LeadCampaignCard;
