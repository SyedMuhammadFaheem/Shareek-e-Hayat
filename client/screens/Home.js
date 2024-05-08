import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground, Platform, StatusBar } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/bg.png')} 
      style={styles.container}
    >
      
      <Image
        source={require('../assets/icon2.png')}
        style={styles.illustration}
      />
      <Text style={styles.title}>MINGLE </Text>
      <Text style={styles.description}>
        
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
        <Text style={styles.buttonText}>Let's Start →</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width:'100%',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    alignItems: 'center',
    justifyContent: 'center',
 
    
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 60,
  },
  illustration: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
  },
  description: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF6F91',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 60,
    shadowColor: '#FF6F91',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Home;
