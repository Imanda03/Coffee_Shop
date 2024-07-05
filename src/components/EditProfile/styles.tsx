import {StyleSheet} from 'react-native';
import {colors} from '../../utils/color';

export const styles = StyleSheet.create({
  MainContainer: {
    // backgroundColor: 'green',
    padding: 20,
  },
  HeaderText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.BROWN,
  },
  FieldContainer: {
    marginTop: 10,
  },
  Content: {
    fontSize: 18,
    color: colors.DARK_BROWN,
  },
  submitBtn: {
    height: 30,
  },
  passwordContainer: {
    marginBottom: 20,
    display: 'flex',
    alignItems: 'flex-end',
  },
  passwordText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.COPPER,
  },
});
