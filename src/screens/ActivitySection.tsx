import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import ActivityCard from '../components/cards/ActivityCard';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import {activityData} from '../jsonData/activityData';
import styles from './styles/ActivitySection.style';

const ActivitySection = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return (
      <View
        style={{padding: 4, flexDirection: 'row', justifyContent: 'center'}}>
        {[...Array(2)].map((_, index) => (
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
    <View style={styles.container}>
      {activityData.map((item: any, index: number) => (
        <ActivityCard
          key={index}
          title={item.title}
          metric={item.metric}
          trend={item.trend}
          avgPerDay={item.avgPerDay}
          trendColor={item.trendColor}
        />
      ))}
    </View>
  );
};

export default ActivitySection;
