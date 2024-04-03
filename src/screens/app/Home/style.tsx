import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/color';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
});
