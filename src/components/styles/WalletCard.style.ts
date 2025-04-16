
import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../constants/colors';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    card: {
      width: width * 0.9,
      backgroundColor: colors.card,
      padding: 16,
      borderRadius: 16,
      marginVertical: 10,
      alignSelf: 'center',
      shadowColor: colors.black,
      shadowOpacity: 0.1,
      shadowRadius: 4,
      shadowOffset: {width: 0, height: 2},
      elevation: 3,
    },
    topRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    iconAndAmount: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    amount: {
      color: colors.primarySecond,
      fontSize: 26,
      fontWeight: '800',
    },
    leftCircleIcon: {
      width: 45,
      height: 45,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.secondary,
    },
    rightCircleIcon: {
      borderRadius: 20,
      borderWidth: 2,
      borderColor: colors.gray,
      width: 30,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    subtitle: {
      color: colors.gray,
      fontSize: 13,
      marginTop: -4,
    },
    dottedLine: {
      borderStyle: 'dotted',
      borderWidth: 0.5,
      borderColor: 'gray',
      marginVertical: 10,
    },
    bottomRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    bottomItem: {
      flex: 1,
    },
    verticalLine: {
      width: 1,
      height: 40,
      backgroundColor: 'gray',
      marginHorizontal: 10,
      opacity: 0.5,
    },
    label: {
      color: colors.primarySecond,
      fontWeight: '800',
      fontSize: 16,
    },
    subLabel: {
      color: colors.gray,
      fontSize: 12,
    },
    error: {color: 'red', textAlign: 'center', marginTop: 20},
  });
  
  
export default styles;
