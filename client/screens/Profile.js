import React, { useState } from 'react';
import { StyleSheet, View,ImageBackground, Text, ScrollView, TouchableOpacity, TextInput, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const Profile = () => {

const Profile = ({navigation}) => {
  const [birthDate, setBirthDate] = useState(new Date());

  const [gender, setGender] = useState('male');
  const [lookingFor, setLookingFor] = useState('women');
  const [height, setHeight] = useState('180');
  const [weight, setWeight] = useState('65');
  const [interests, setInterests] = useState({
    sports: false,
    tech: false,
    books: false,
    videogames: false,
    gardening: false,
    dance: false,
  });

  const toggleInterest = interest => {
    setInterests({ ...interests, [interest]: !interests[interest] });
  };

  return (
    <ImageBackground
      source={require('../assets/bg.png')} // Replace with your background image
      style={styles.container}
    >
      <View style={styles.inputContainer}>
        <Text style={styles.label}>name</Text>
        <TextInput style={styles.input} placeholder="John Doe" />
        <Text style={styles.label}>birth date</Text>
        <TextInput style={styles.input} placeholder="17/03/1990" />

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={gender}
            onValueChange={(itemValue) => setGender(itemValue)}
            style={styles.picker}
            mode="dropdown">
            <Picker.Item label="I am a man" value="male" />
            <Picker.Item label="I am a woman" value="female" />
          </Picker>
          <Picker
            selectedValue={lookingFor}
            onValueChange={(itemValue) => setLookingFor(itemValue)}
            style={styles.picker}
            mode="dropdown">
            <Picker.Item label="looking for men" value="men" />
            <Picker.Item label="looking for women" value="women" />
          </Picker>
        </View>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={height}
            onValueChange={(itemValue) => setHeight(itemValue)}
            style={styles.picker}
            mode="dropdown">
            {[...Array(51)].map((_, index) => (
              <Picker.Item label={`${150 + index} cm`} value={`${150 + index}`} key={index} />
            ))}
          </Picker>
          <Picker
            selectedValue={weight}
            onValueChange={(itemValue) => setWeight(itemValue)}
            style={styles.picker}
            mode="dropdown">
            {[...Array(101)].map((_, index) => (
              <Picker.Item label={`${40 + index} kg`} value={`${40 + index}`} key={index} />
            ))}
          </Picker>
        </View>

        <View style={styles.interestsContainer}>
          {Object.keys(interests).map((interest) => (
            <View key={interest} style={styles.switchContainer}>
              <Text style={styles.switchLabel}>{interest}</Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={interests[interest] ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => toggleInterest(interest)}
                value={interests[interest]}
              />
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>let's go!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonText}>I'm not prepared yet</Text>
        </TouchableOpacity>
      </View>
      
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  picker: {
    flex: 1,
    marginHorizontal: 5,
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '50%',
    marginBottom: 10,
  },
  switchLabel: {
    fontSize: 16,
    color: 'black',
  },
  button: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    marginTop:30,
    width: 250, // Fixed width
    alignSelf: 'center' // Center button in container
  },
  buttonSecondary: {
    backgroundColor: 'lightgray',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: 250, // Fixed width
    alignSelf: 'center' // Center button in container
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    
  },
});

export default Profile;
