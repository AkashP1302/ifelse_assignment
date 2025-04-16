import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Dimensions,
} from 'react-native';
import colors from '../constants/colors';
import styles from './styles/InfoCard.style';

interface InfoCardProps {
  backgroundColor?: string;
  title: string;
  subtitle: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const {width} = Dimensions.get('window');

const InfoCard: React.FC<InfoCardProps> = ({
  backgroundColor = colors.primary,
  title,
  subtitle,
  leftIcon,
  rightIcon,
}) => {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <View style={styles.topRow}>
        <View style={styles.iconLeft}>{leftIcon}</View>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.bottomRow}>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <View style={styles.iconRight}>{rightIcon}</View>
      </View>
    </View>
  );
};

export default InfoCard;
