import {View, Text, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../../utils/color';

interface HeaderProps {
  title: string;
  image: any;
  price: string;
  category: string;
  onPress?: (value: any) => void;
}

const ProductHomeItem: React.FC<HeaderProps> = ({
  title,
  image,
  onPress,
  price,
  category,
}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.category}>{category}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{price}</Text>
        <AntDesign name="pluscircle" size={30} color={colors.EARTHY_BROWN} />
      </View>
    </Pressable>
  );
};
export default React.memo(ProductHomeItem);
