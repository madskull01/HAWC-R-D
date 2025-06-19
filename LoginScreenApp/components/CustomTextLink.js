import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const CustomTextLink = ({ text, onPress, align = 'left' }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[globalStyles.textLink, { textAlign: align }]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomTextLink;