import {StyleSheet} from 'react-native';
import {colors} from '../../utils/color';

export const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 24,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  title: {
    alignItems: 'center',
    color: colors.LIGHT_BLACK,
    fontSize: 20,
    fontWeight: 'bold',
  },
  space: {
    width: 24,
  },
});
