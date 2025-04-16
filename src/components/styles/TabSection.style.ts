
import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../constants/colors';


const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
    tabRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
    },
    tabs: {
      flexDirection: 'row',
      gap: 22,
    },
    tabButton: {
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 20,
    },
    activeTabButton: {
      backgroundColor: colors.primary,
    },
    tabText: {
      fontSize: 16,
      color: '#666',
      fontWeight: '500',
    },
    activeTabText: {
      color: '#fff',
    },
    contentBox: {
      padding: 8,
      borderRadius: 10,
    },
    contentText: {
      fontSize: 16,
      color: '#333',
    },
  });
  
  
export default styles;
