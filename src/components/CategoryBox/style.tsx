import {StyleSheet} from 'react-native';
import {colors} from '../../utils/color';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    // paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.LIGHT,
    borderRadius: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginRight: 10,
    color: colors.BROWN,
  },
  image: {
    width: 30,
    height: 30,
  },
  imageContainer: {
    backgroundColor: colors.LIGHT_GRAY,
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
});
