import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../utils/color';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  title: {
    color: colors.EARTHY_BROWN,
    fontWeight: 'bold',
    fontSize: 18,
  },
  image: {
    width: (width - 40) / 2,
    height: 180,
    borderRadius: 8,
  },
  price: {
    color: colors.EARTHY_BROWN,
    paddingVertical: 8,
    fontWeight: 'bold',
    fontSize: 18,
  },
  category: {
    color: colors.GRAY,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  innerContainer: {
    backgroundColor: colors.LIGHT,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
