
import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      backgroundColor: colors.primary,
      borderRadius: 12,
      padding: 16,
      elevation: 2,
      shadowColor: colors.black,
      shadowOpacity: 0.1,
      shadowRadius: 4,
      shadowOffset: {width: 0, height: 2},
      margin: 10,
      alignItems: 'center',
    },
    leftSection: {
      width: 100,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    percentageTextWrapper: {
      position: 'absolute',
      top: '38%',
      left: '30%',
    },
    percentageText: {
      fontSize: 16,
      fontWeight: '800',
      color: colors.card,
      justifyContent: 'center',
      marginLeft: 6,
    },
    rightSection: {
      flex: 1,
      paddingLeft: 16,
    },
    title: {
      fontSize: 16,
      fontWeight: '700',
      color: colors.card,
      marginBottom: 4,
    },
    subtitle: {
      fontSize: 13,
      color: colors.card,
      marginBottom: 4,
    },
    footer: {
      fontSize: 12,
      color: colors.card,
    },
  });
  

export default styles;
