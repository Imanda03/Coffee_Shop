import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/color';

export const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    // backgroundColor: colors.LIGHT_BEIGE,
    padding: 20,
    marginVertical: 20,
  },
  HeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  ProfileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  UserName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.DARK_BROWN,
  },
  UserEmail: {
    fontSize: 16,
    color: colors.GRAY,
  },
  ContentContainer: {
    flex: 1,
  },
  SectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.EARTHY_BROWN,
    marginBottom: 10,
  },
  FavoritesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  FavoriteItem: {
    width: '48%',
    alignItems: 'center',
  },
  FavoriteImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  FavoriteName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.DARK_BROWN,
  },
  OrderItem: {
    marginBottom: 15,
  },
  OrderName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.DARK_BROWN,
  },
  OrderDate: {
    fontSize: 14,
    color: colors.GRAY,
  },
  Button: {
    paddingVertical: 10,
    marginTop: 20,
  },
  ButtonText: {
    fontSize: 16,
    color: colors.LIGHT_BEIGE,
  },
});
