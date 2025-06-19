import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const CustomButton = ({ title, onPress, loading, disabled }) => {
  return (
    <TouchableOpacity
      style={[globalStyles.button, disabled && globalStyles.buttonDisabled]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={globalStyles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;