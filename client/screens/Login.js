import React, { useState } from 'react';
import { StyleSheet, View,ImageBackground, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import axios from 'axios'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const loginUser = async ()=>{
    const data={
      username: email,
      password: password
    }
    try {
      const response = await axios.post('http://10.0.2.2:5001/login',data)
      console.log(response.data)
      navigation.navigate('Home')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <ImageBackground
      source={require('../assets/bg.png')} // Replace with your background image
      style={styles.container}
    >
      <Image
        source={require('../assets/heart-icon.png')} 
        style={styles.heartIcon}
      />
      <Text style={styles.header}>Log In</Text>
      <Text style={styles.subtitle}>Enter your login details to access your account</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={loginUser}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      <TouchableOpacity  onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signUpText}>Don’t have an account? Sign Up</Text>
      </TouchableOpacity>
 </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  heartIcon: {
    width: 50, // Adjust the size as needed
    height: 50, // Adjust the size as needed
    marginBottom: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    backgroundColor: '#f2f2f2', // Background color of input fields
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    width: '100%',
    backgroundColor: '#eb2f64', // Adjust the button color as needed
    padding: 20,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgotPasswordText: {
    color: '#333', // Adjust the text color as needed
    marginBottom: 10,
  },
  signUpText: {
    color: '#333', // Adjust the text color as needed
    fontSize: 16,
  },
});

export default Login;
