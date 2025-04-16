import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../constants/colors';
import LineChartWithFill from '../LineChartWithFill';
import {activityChartData} from '../../jsonData/activityChartData';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import styles from './styles/ActivityChartCard.style';

const ActivityChartCard = () => {
  const {title, height, data} = activityChartData;
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return (
      <View style={{padding: 4, flexDirection: 'row'}}>
        {[...Array(1)].map((_, index) => (
          <View key={index} style={{marginRight: 5}}>
            <ShimmerPlaceholder
              width={380}
              height={250}
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
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.rightCircleIcon}>
          <FontAwesome name="angle-right" size={18} color={colors.gray} />
        </View>
      </View>

      <View style={styles.legendContainer}>
        {data.map((item, index) => (
          <View key={index} style={styles.legendItem}>
            <View style={[styles.dot, {backgroundColor: item.color}]} />
            <Text style={styles.legendText}>{item.label}</Text>
          </View>
        ))}
      </View>

      <View style={{height}}>
        {data.map((item, index) => (
          <LineChartWithFill
            key={index}
            data={item.data}
            strokeColor={item.color}
            showGrid={index === data.length - 1}
          />
        ))}
      </View>
    </View>
  );
};

export default ActivityChartCard;
