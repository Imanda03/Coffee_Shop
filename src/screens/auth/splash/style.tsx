import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/color';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  image: {
    width: '100%',
    height: 200,
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  innerTitle: {
    color: colors.BROWN,
    textDecorationLine: 'underline',
  },
  footerText: {
    color: colors.EARTHY_BROWN,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '800',
    marginTop: 30,
  },
  titleContainer: {
    marginVertical: 54,
  },
  signUpContainer: {
    width: '100%', 
    flexDirection: 'row'
},
});
