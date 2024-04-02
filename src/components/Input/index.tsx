import {
    View,
    Text,
    TextInput,
    Pressable,
    Modal,
    TouchableWithoutFeedback,
    TouchableOpacity,
  } from 'react-native';
  import React, { useState } from 'react';
  import { styles } from './style';
  import Entypo from 'react-native-vector-icons/Entypo';
  import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
  import { colors } from '../../utils/color';
  
  interface InputProps {
    label?: string;
    placeholder?: string;
    isPassword?: Boolean;
    value?: any;
    onChangeText?: (value: any) => void;
    style?: any;
    type?: any;
    options?: any;
    props?: any;
  }
  
  const Input: React.FC<InputProps> = ({
    label,
    placeholder,
    value,
    onChangeText,
    isPassword,
    style,
    type,
    options,
    ...props
  }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isPickerModalVisible, setIsPickerModalVisible] = useState(false);
  
    const onEyePress = () => {
      setIsPasswordVisible(!isPasswordVisible);
      console.log(isPasswordVisible);
    };
  
    const onSelect = (opt: any) => {
    //   onChangeText(opt);
      setIsPickerModalVisible(false);
    };
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        {type === 'picker' ? (
          <Pressable
            style={styles.inputContainer}
            onPress={() => setIsPickerModalVisible(true)}>
            {value ? (
              <Text style={[styles.input, style]}>{value?.title}</Text>
            ) : (
              <Text style={[styles.placeholder, style]}>{placeholder}</Text>
            )}
            <MaterialIcons
              style={styles.arrow}
              name="keyboard-arrow-down"
              size={24}
              color={colors.EARTHY_BROWN}
            />
          </Pressable>
        ) : (
          <View style={styles.inputContainer}>
            <TextInput
              value={value}
              onChangeText={onChangeText}
              secureTextEntry={isPassword && !isPasswordVisible}
              placeholder={placeholder}
              placeholderTextColor={colors.GRAY}
              style={[styles.input, style]}
              {...props}
            />
            {isPassword ? (
              <Pressable onPress={onEyePress}>
                {isPasswordVisible ? (
                  <Entypo
                    style={styles.eye}
                    name="eye-with-line"
                    size={20}
                    color={colors.EARTHY_BROWN}
                  />
                ) : (
                  <Entypo
                    style={styles.eye}
                    name="eye"
                    size={20}
                    color={colors.EARTHY_BROWN}
                  />
                )}
              </Pressable>
            ) : null}
          </View>
        )}
        <Modal transparent visible={isPickerModalVisible}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setIsPickerModalVisible(false)}
            style={styles.modalWrapper}>
            <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
              <Text style={styles.heraderTitle}>Select options</Text>
              {options?.map((option: any) => {
                if (!option?.id) {
                  return null;
                }
  
                const selected = value?.id === option.id;
  
                return (
                  <Text
                    onPress={() => onSelect(option)}
                    style={[
                      styles.optionText,
                      selected ? styles.selectedOption : {},
                    ]}
                    key={option?.id}>
                    {option?.title}
                  </Text>
                );
              })}
            </TouchableOpacity>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  };
  
  export default React.memo(Input);
  