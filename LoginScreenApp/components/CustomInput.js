import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { globalStyles } from '../styles/globalStyles';

const CustomInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  iconName,
  onIconPress,
}) => {
  return (
    <View style={globalStyles.inputContainer}>
      {label && <Text style={globalStyles.inputLabel}>{label}</Text>}
      <View style={globalStyles.inputWrapper}>
        <TextInput
          style={globalStyles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize || 'none'}
          placeholderTextColor="#999"
        />
        {iconName && (
          <TouchableOpacity onPress={onIconPress} style={globalStyles.inputIcon}>
            <Icon name={iconName} size={20} color="#666" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomInput;