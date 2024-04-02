import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {colors} from '../../utils/color';

interface CheckboxInterface {
  checked?: boolean;
  onCheck?: any;
}

const CheckBox = ({checked, onCheck}: CheckboxInterface) => {
  return (
    <TouchableOpacity onPress={() => onCheck(!checked)} activeOpacity={0.6}>
      {checked ? (
        <Fontisto
          name="checkbox-passive"
          color={colors.EARTHY_BROWN}
          size={24}
        />
      ) : (
        <FontAwesome
          name="check-square"
          color={colors.EARTHY_BROWN}
          size={24}
        />
      )}
    </TouchableOpacity>
  );
};

export default React.memo(CheckBox);
