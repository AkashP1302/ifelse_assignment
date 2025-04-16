
import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
    card: {
      width: '100%',
      backgroundColor: colors.card,
      borderRadius: 12,
      padding: 16,
      elevation: 3,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: {width: 0, height: 2},
      shadowRadius: 4,
      marginBottom: 12,
    },
    title: {
      fontSize: 14,
      fontWeight: '800',
      color: colors.primarySecond,
    },
    description: {
      fontSize: 14,
      color: colors.textSecondary,
      marginBottom: 12,
    },
    progressBackground: {
      height: 8,
      backgroundColor: '#eee',
      borderRadius: 4,
      overflow: 'hidden',
      marginBottom: 12,
    },
    progressBar: {
      height: '100%',
      backgroundColor: colors.primary,
    },
    statsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 4,
    },
    statBox: {
      flex: 1,
    },
    statValue: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.primarySecond,
    },
    statLabel: {
      fontSize: 12,
      color: colors.gray,
    },
  });
  

export default styles;
