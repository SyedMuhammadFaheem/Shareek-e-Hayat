import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
// import Checkbox from 'react-native-checkbox';
// import DatePicker from 'react-native-date-picker';

const Profile = () => {
  const [birthDate, setBirthDate] = useState(new Date());
  const [gender, setGender] = useState('male');
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
    <ScrollView style={styles.container}>
      {/* <Text style={styles.header}>registration</Text> */}
      <View style={styles.inputContainer}>
        {/* <DatePicker
          date={birthDate}
          onDateChange={setBirthDate}
          mode="date"
          locale="en"
        /> */}
        <Picker
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)}
        >
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
        </Picker>
        <Picker
          selectedValue={height}
          onValueChange={(itemValue) => setHeight(itemValue)}
        >
          {/* Generate height options */}
          {[...Array(51)].map((_, index) => (
            <Picker.Item label={`${150 + index} cm`} value={`${150 + index}`} key={index} />
          ))}
        </Picker>
        <Picker
          selectedValue={weight}
          onValueChange={(itemValue) => setWeight(itemValue)}
        >
          {/* Generate weight options */}
          {[...Array(101)].map((_, index) => (
            <Picker.Item label={`${40 + index} kg`} value={`${40 + index}`} key={index} />
          ))}
        </Picker>
        <View style={styles.interestsContainer}>
          {Object.keys(interests).map((interest) => (
            <View key={interest} style={styles.checkboxContainer}>
              <Checkbox
                label={interest}
                checked={interests[interest]}
                onChange={() => toggleInterest(interest)}
              />
            </View>
          ))}
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>let's go!</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Profile;
