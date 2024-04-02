import {StyleSheet} from 'react-native';
import {colors} from '../../utils/color';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BROWN,
    paddingVertical: 20,
    paddingHorizontal: 8,
    borderRadius: 8,
    flex: 1,
  },
  title: {
    color: colors.GRAY,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
