import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../utils/color';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    // backgroundColor: colors.WHITE,
    marginTop: 20,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    flex: 1,
  },
  greetText: {
    color: colors.GRAY,
    fontSize: 18,
    fontWeight: 'bold',
  },
  txt: {
    color: colors.EARTHY_BROWN,
    fontSize: 24,
    fontWeight: '600',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.LIGHT,
    borderRadius: 20,
    paddingHorizontal: 20,
    marginHorizontal: 15,
    marginVertical: 10,
    height: 65,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    // height: 40,
    color: colors.BROWN,
  },
  list: {
    // paddingVertical: 24,
    // flex: 1,
    // margin: 5,
  },
  products: {
    paddingHorizontal: 16,
  },
  speacialText: {
    flexDirection: 'row',
    marginLeft: 20,
    marginVertical: 10,
  },
  special: {
    color: colors.EARTHY_BROWN,
    // marginTop: 6,
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 20,
  },
  slaeContainer: {
    // borderColor: colors.BLACK,
    // borderWidth: 1,
    height: 120,
    marginHorizontal: 20,
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10, // Optional padding
    borderRadius: 8, // Optional border radius
    backgroundColor: colors.LIGHT,
  },
  image: {
    borderRadius: 15,
  },
  discount: {
    color: colors.COPPER,
    fontWeight: '700',
    fontSize: 10,
    padding: 5,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.LIGHT,
    backgroundColor: colors.WHITE,
    width: 100,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  DiscountText: {
    fontSize: 11,
    fontWeight: '600',
  },
  saleText: {
    color: colors.EARTHY_BROWN,
    fontSize: 16,
    fontWeight: 'bold',
  },
  saleContainer: {
    flexDirection: 'column',
    marginLeft: 10,
  },
});
