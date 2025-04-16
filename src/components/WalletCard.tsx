import React, {useEffect, useRef, useState} from 'react';
import {View, Text Animated} from 'react-native'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../constants/colors';
import {convertDateToFormattedText} from '../constants/utility';
import {useGetCardDataQuery} from '../services/cardDataApi';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import styles from './styles/WalletCard.style';

const WalletCard = () => {
  const {data, isLoading, error} = useGetCardDataQuery();
  const [showLoader, setShowLoader] = useState(true);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.15,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading || showLoader) {
    return (
      <View style={styles.card}>
        <View style={styles.topRow}>
          <View style={styles.iconAndAmount}>
            <ShimmerPlaceholder style={styles.leftCircleIcon} autoRun={true} />
            <View style={{marginLeft: 10}}>
              <ShimmerPlaceholder
                style={styles.amount}
                autoRun={true}
                width={100}
                height={30}
              />
              <ShimmerPlaceholder
                style={styles.subtitle}
                autoRun={true}
                width={80}
                height={10}
              />
            </View>
          </View>

          <ShimmerPlaceholder
            style={styles.rightCircleIcon}
            autoRun={true}
            width={30}
            height={30}
          />
        </View>

        <View style={styles.dottedLine} />

        <View style={styles.bottomRow}>
          <View style={styles.bottomItem}>
            <ShimmerPlaceholder
              style={styles.label}
              autoRun={true}
              width={80}
              height={20}
            />
            <ShimmerPlaceholder
              style={styles.subLabel}
              autoRun={true}
              width={60}
              height={10}
            />
          </View>

          <View style={styles.verticalLine} />

          <View style={[styles.bottomItem, {marginLeft: 10}]}>
            <ShimmerPlaceholder
              style={styles.label}
              autoRun={true}
              width={80}
              height={20}
            />
            <ShimmerPlaceholder
              style={styles.subLabel}
              autoRun={true}
              width={60}
              height={10}
            />
          </View>
        </View>
      </View>
    );
  }

  if (error) return <Text style={styles.error}>Error loading data</Text>;
  if (!data) return <Text style={styles.error}>No data available</Text>;

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.iconAndAmount}>
          <Animated.View
            style={[styles.leftCircleIcon, {transform: [{scale: scaleAnim}]}]}>
            <FontAwesome
              name="credit-card"
              size={24}
              color={colors.primarySecond}
            />
          </Animated.View>

          <View style={{marginLeft: 10}}>
            <Text style={styles.amount}>${data?.balance}</Text>
            <Text style={styles.subtitle}>Wallet Balance</Text>
          </View>
        </View>
        <View style={styles.rightCircleIcon}>
          <FontAwesome name="angle-right" size={18} color={colors.gray} />
        </View>
      </View>

      <View style={styles.dottedLine} />

      <View style={styles.bottomRow}>
        <View style={styles.bottomItem}>
          <Text style={styles.label}>
            {convertDateToFormattedText(data?.auto_fill_date)}
          </Text>
          <Text style={styles.subLabel}>Auto-filled date</Text>
        </View>

        <View style={styles.verticalLine} />

        <View style={[styles.bottomItem, {marginLeft: 10}]}>
          <Text style={styles.label}>${data?.auto_fill_amount}</Text>
          <Text style={styles.subLabel}>Auto-filled amount</Text>
        </View>
      </View>
    </View>
  );
};

export default WalletCard;
