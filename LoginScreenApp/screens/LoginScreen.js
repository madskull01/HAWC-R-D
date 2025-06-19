import React, { useState } from 'react';
import { View, Text, Image, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import CustomTextLink from '../components/CustomTextLink';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert('Login Successful', `Email: ${email}\nPassword: ${password}`);
      
      // Here you would typically send the data to your backend
      const loginData = {
        email,
        password
      };
      console.log('Login data to be sent:', loginData);
      
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={globalStyles.container}
    >
      <ScrollView
        contentContainerStyle={globalStyles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        {/* Logo or App Title */}
        <View style={globalStyles.logoContainer}>
          <Text style={globalStyles.logoText}>MyApp</Text>
          {/* Alternatively, use an image */}
          {/* <Image source={require('../assets/logo.png')} style={globalStyles.logo} /> */}
        </View>

        {/* Email Input */}
        <CustomInput
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Password Input */}
        <CustomInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          iconName={showPassword ? 'eye-off' : 'eye'}
          onIconPress={() => setShowPassword(!showPassword)}
        />

        {/* Forgot Password Link */}
        <CustomTextLink
          text="Forgot Password?"
          onPress={() => Alert.alert('Forgot Password', 'Password reset functionality would go here')}
          align="right"
        />

        {/* Login Button */}
        <CustomButton
          title="Login"
          onPress={handleLogin}
          loading={isLoading}
        />

        {/* Sign Up Link */}
        <View style={globalStyles.bottomTextContainer}>
          <Text style={globalStyles.bottomText}>Don't have an account?</Text>
          <CustomTextLink
            text="Sign Up"
            onPress={() => Alert.alert('Sign Up', 'Navigation to sign up screen would go here')}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;