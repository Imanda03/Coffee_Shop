import {View, Text, Pressable} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../../utils/color';
import {styles} from './style';

interface AuthHeaderInterface {
  title?: string;
  onBackPress?: () => void;
}

const AuthHeader = ({title, onBackPress}: AuthHeaderInterface) => {
  return (
    <View style={styles.container}>
      <Pressable hitSlop={20} onPress={onBackPress}>
        <AntDesign name="arrowleft" size={26} color={colors.EARTHY_BROWN} />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default AuthHeader;
