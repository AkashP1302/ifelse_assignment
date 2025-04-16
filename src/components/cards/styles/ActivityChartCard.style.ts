
import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    card: {
      width: width - 42,
      marginLeft: 10,
      backgroundColor: colors.card,
      padding: 16,
      borderRadius: 16,
      shadowColor: colors.black,
      shadowOpacity: 0.05,
      shadowOffset: {width: 0, height: 2},
      shadowRadius: 6,
      elevation: 3,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 16,
      color: colors.primarySecond,
    },
    legendContainer: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10,
    },
    legendItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 20,
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginRight: 6,
    },
    legendText: {
      fontSize: 12,
      color: colors.gray,
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
  });
  
export default styles;
