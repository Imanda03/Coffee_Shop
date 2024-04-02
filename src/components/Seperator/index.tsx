import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './style';

const Seperator = ({title}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{title}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default Seperator;
