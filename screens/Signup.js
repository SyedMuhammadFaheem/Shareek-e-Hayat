import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const Signup = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground
      source={require('../assets/bg.png')} // Replace with your background image
      style={styles.container}
    >
      
      <Text style={styles.header}>Create Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        onChangeText={setFullName}
        value={fullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        onChangeText={setGender}
        value={gender}
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
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
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already have an account? Log In</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  // ...reuse styles from your Login component
  // Only the header and buttonText should be updated for clarity:
  header: {
    // ...other styles
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000', // Change as needed
    textAlign: 'center', // Added for center alignment
    marginBottom:'10%'
  },
  buttonText: {
    // ...other styles
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginText: {
    color: '#eb2f64', // Adjust the text color as needed
    fontSize: 16,
    marginTop: 15, // Add some space above the text
  },
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
  // ...rest of your styles
});

export default Signup;
