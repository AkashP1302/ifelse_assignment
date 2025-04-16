
import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
    card: {
      backgroundColor: colors.card,
      padding: 10,
      borderRadius: 12,
      elevation: 3,
      shadowColor: colors.black,
      shadowOpacity: 0.1,
      shadowRadius: 5,
      shadowOffset: {width: 0, height: 2},
      marginVertical: 10,
      width: 180,
    },
    title: {
      fontSize: 14,
      color: colors.primarySecond,
      marginBottom: 8,
      fontWeight: '800',
    },
    metric: {
      fontSize: 16,
      fontWeight: '800',
      color: colors.primary,
    },
    trendRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    trendText: {
      fontWeight: '600',
      marginLeft: 4,
    },
    subtext: {
      marginTop: 6,
      fontSize: 13,
      color: colors.primarySecond,
    },
  });

export default styles;
