
import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      padding: 5,
    },
    greeting: {
      fontSize: 22,
      fontWeight: 'bold',
      color: colors.primary,
      marginBottom: 4,
    },
    phoneRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    phoneText: {
      fontSize: 14,
      color: colors.textSecondary,
      marginLeft: 6,
    },
  });
  

export default styles;
