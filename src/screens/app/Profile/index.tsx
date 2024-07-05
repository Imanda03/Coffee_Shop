import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import Button from '../../../components/Button';

const UserProfileScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.MainContainer}>
      <View style={styles.HeaderContainer}>
        <Image
          style={styles.ProfileImage}
          source={require('../../../assets/Images/avatar.jpg')}
        />
        <View>
          <Text style={styles.UserName}>John Doe</Text>
          <Text style={styles.UserEmail}>john.doe@example.com</Text>
        </View>
      </View>

      <View style={styles.ContentContainer}>
        <Text style={styles.SectionTitle}>Favorite Drinks</Text>
        <View style={styles.FavoritesContainer}>
          <View style={styles.FavoriteItem}>
            <Image
              style={styles.FavoriteImage}
              source={{uri: 'https://your-image-url.com/drink1.jpg'}}
            />
            <Text style={styles.FavoriteName}>Cappuccino</Text>
          </View>
          <View style={styles.FavoriteItem}>
            <Image
              style={styles.FavoriteImage}
              source={{uri: 'https://your-image-url.com/drink2.jpg'}}
            />
            <Text style={styles.FavoriteName}>Mocha</Text>
          </View>
        </View>

        <Text style={styles.SectionTitle}>Recent Orders</Text>
        <View style={styles.OrderItem}>
          <Text style={styles.OrderName}>Latte</Text>
          <Text style={styles.OrderDate}>June 20, 2024</Text>
        </View>
        <View style={styles.OrderItem}>
          <Text style={styles.OrderName}>Espresso</Text>
          <Text style={styles.OrderDate}>June 18, 2024</Text>
        </View>

        <Button
          title="Edit Profile"
          onPress={() => {
            /* Add navigation or action */
            navigation.navigate('EditProfile');
          }}
          style={styles.Button}
        />
      </View>
    </ScrollView>
  );
};

export default UserProfileScreen;
