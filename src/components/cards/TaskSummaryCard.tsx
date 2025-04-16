import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import colors from '../../constants/colors'; // Adjust to your colors file
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import {taskSummaryData} from '../../jsonData/taskSummaryData';
import styles from './styles/TaskSummaryCard.style';

const CIRCLE_RADIUS = 40;
const STROKE_WIDTH = 8;
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

const TaskSummaryCard = () => {
  const strokeDashoffset =
    CIRCLE_CIRCUMFERENCE -
    (CIRCLE_CIRCUMFERENCE * taskSummaryData?.percentage) / 100;

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return (
      <View style={{padding: 4, flexDirection: 'row'}}>
        {[...Array(1)].map((_, index) => (
          <View key={index} style={{marginRight: 8}}>
            <ShimmerPlaceholder
              width={370}
              height={120}
              autoRun={true}
              style={{borderRadius: 10}}
            />
          </View>
        ))}
      </View>
    );
  }

  return (
    <View style={styles.card}>
      {/* Circular Progress Left */}
      <View style={styles.leftSection}>
        <Svg width={100} height={100}>
          <Circle
            cx="50"
            cy="50"
            r={CIRCLE_RADIUS}
            stroke={colors.primarySecond}
            strokeWidth={STROKE_WIDTH}
            fill="none"
          />
          <Circle
            cx="50"
            cy="50"
            r={CIRCLE_RADIUS}
            stroke={colors.card}
            strokeWidth={STROKE_WIDTH}
            strokeDasharray={CIRCLE_CIRCUMFERENCE}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="none"
            rotation="-90"
            origin="50,50"
          />
        </Svg>
        <View style={styles.percentageTextWrapper}>
          <Text style={styles.percentageText}>
            {taskSummaryData?.percentage}%
          </Text>
        </View>
      </View>

      {/* Text Info Right */}
      <View style={styles.rightSection}>
        <Text style={styles.title}>Overall task completed</Text>
        <Text style={styles.subtitle}>
          Achievement against total tasks/calls
        </Text>
        <Text style={styles.footer}>
          For the month of {taskSummaryData?.month}
        </Text>
      </View>
    </View>
  );
};

export default TaskSummaryCard;
