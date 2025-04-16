
import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
    container: {
      padding: 16,
      borderRadius: 12,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    textContainer: {
      flex: 1,
    },
    greeting: {
      fontSize: 28,
      fontWeight: '800',
      color: colors.primarySecond,
    },
    phoneRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 4,
    },
    phoneText: {
      marginLeft: 6,
      color: colors.gray,
      fontSize: 14,
    },
    profileImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: colors.primary,
    },
  });
  

export default styles;
