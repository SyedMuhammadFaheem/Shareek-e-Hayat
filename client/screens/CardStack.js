import React from 'react';
import { StyleSheet, View, Text, Image,ImageBackground, TouchableOpacity } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import { useNavigation } from '@react-navigation/native';
;

// Individual profile card
const ProfileCard = ({ name, age, distance, matchPercentage, tags, bio }) => {

 
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'

const ProfileCard = ({ name, age, status, sex, orientation, body_type, pets, sign, speaks, ethnicity, essay0}) => {
  const tags=[
    orientation,
    body_type,
    pets,
    sign,
    speaks,
    ethnicity
  ]
  return (
  
    <View style={styles.card}>
      <Image style={styles.profileImage} source={require('../assets/user-icon.png')} />
      <Text style={styles.nameText}>{name}, {age}</Text>
      <Text style={styles.distanceText}>{status}</Text>
      <View style={styles.matchContainer}>
        <Text style={styles.matchText}>{sex}</Text>
      </View>
      <View style={styles.tagContainer}>
        {tags.map(tag => (
          <View key={tag} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.bioText}>{essay0}</Text>

        <Text style={styles.buttonText}>Swipe Right for Match!</Text>
      
        <Text style={styles.buttonText}>Swipe Left for Reject!</Text>

    </View>
   
  );
};

// Main component handling swipe cards

const CardStack = () => {
  const navigation = useNavigation();

  const viewMyProfile = () => {
    navigation.navigate('Profile'); // Ensure 'MyProfile' is defined in your navigator
  };

export const CardStack = ({navigation}) => {
  
const [users, setUsers]= useState([])
useEffect(()=>{
  getCards()
},[])
const getCards= async()=>{
  try {
    const id = Number(await AsyncStorage.getItem('userId'))
    console.log(Number(id))
    const data={
      id:id
    }
    const response= await axios.post('http://10.0.2.2:5000/find-matches',data)
    console.log(response.data)
    setUsers(response.data.users)
  } catch (error) {
    console.log(error.message)
  }
}

  const cards = [
    {
      name: 'Matt',
      age: 23,
      distance: '30 km away',
      matchPercentage: 82,
      tags: ['books', 'tech', 'dance'],
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },

    {
      name: 'Anthony',
      age: 23,
      distance: '30 km away',
      matchPercentage: 82,
      tags: ['books', 'tech', 'dance'],
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },

    {
      name: 'henry',
      age: 23,
      distance: '30 km away',
      matchPercentage: 82,
      tags: ['books', 'tech', 'dance'],
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },

    {
      name: 'robert',
      age: 23,
      distance: '30 km away',
      matchPercentage: 82,
      tags: ['books', 'tech', 'dance'],
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    // Add more profiles here as needed
  ];

  // Actions on swiping the card right
  const handleYup = (card) => {
    console.log("Yup for ", card.name);
  };

  // Actions on swiping the card left
  const handleNope = (card) => {
    console.log("Nope for ", card.name);
  };

  // Render each card
  const renderCard = (cardData) => {
    return <ProfileCard {...cardData}/>;
  };

  const navigateToProfile = () => {
    console.log(navigation)
    // navigation.navigate('Profile'); // Navigate to the 'Profile' screen
  };

  return (
    
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.profileButton} onPress={navigateToProfile}>
        <Text style={styles.profileButtonText}>Profile</Text>
      </TouchableOpacity> */}
      <SwipeCards
        cards={users}
        renderCard={renderCard}
        handleYup={handleYup}
        handleNope={handleNope}
        loop={true}
      />

      <TouchableOpacity style={styles.viewProfileButton} onPress={viewMyProfile}>
        <Text style={styles.viewProfileButtonText}>View My Profile</Text>
      </TouchableOpacity>
    </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingBottom: 20, 
  },
  viewProfileButton: {
    backgroundColor: '#4CAF50', // A green color for a positive action
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    position: 'absolute', // Keep the button at the bottom
    bottom: 20, // Distance from the bottom
    alignSelf: 'center' // Center it horizontally
  },
  viewProfileButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  distanceText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  matchContainer: {
    marginBottom: 10,
  },
  matchText: {
    color: '#eb2f64',
    fontWeight: 'bold',
  },
  tagContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  tag: {
    backgroundColor: '#eb2f64',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  tagText: {
    color: '#fff',
    fontSize: 14,
  },
  bioText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#eb2f64',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  profileButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#eb2f64',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  profileButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

