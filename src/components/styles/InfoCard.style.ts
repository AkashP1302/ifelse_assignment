
import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');


const styles = {
    container: {
      width: width * 0.6,
      padding: 16,
      borderRadius: 16,
      margin: 6,
      justifyContent: 'space-between',
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowRadius: 4,
      shadowOffset: {width: 0, height: 2},
      elevation: 2,
    },
    topRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginBottom: 12,
    },
    iconLeft: {
      marginRight: 6,
    },
    title: {
      color: '#fff',
      fontSize: 14,
      fontWeight: '600',
      flexShrink: 1,
    },
    bottomRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    subtitle: {
      color: '#fff',
      fontSize: 12,
      flexShrink: 1,
    },
    iconRight: {
      marginLeft: 10,
    },
  }
  
  
export default styles;
