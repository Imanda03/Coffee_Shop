import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import Button from '../../../components/Button';
import {SafeAreaView} from 'react-native-safe-area-context';
import { styles } from './style';

const Splash = ({navigation}: any) => {
  const onSignUp = () => {
    navigation.navigate('Signup');
  };

  const onSignIn = () => {
    navigation.navigate('Signin');
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={require('../../../assets/splash.jpeg')}
        />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>You'll Find All Your</Text>
          <Text style={[styles.title, styles.innerTitle]}>Favourite Coffee</Text>
          <Text style={styles.title}>Here!</Text>
        </View>
        <View style={styles.signUpContainer}>
          <Button style={{}} onPress={onSignUp} title="SignUp" />
        </View>
        <Pressable  onPress={onSignIn}>
          <Text style={styles.footerText}>Sign In</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
