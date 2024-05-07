import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';

// Individual profile card
const ProfileCard = ({ name, age, distance, matchPercentage, tags, bio }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.profileImage} source={require('../assets/user-icon.png')} />
      <Text style={styles.nameText}>{name}, {age}</Text>
      <Text style={styles.distanceText}>{distance}</Text>
      <View style={styles.matchContainer}>
        <Text style={styles.matchText}>{matchPercentage}% match</Text>
      </View>
      <View style={styles.tagContainer}>
        {tags.map(tag => (
          <View key={tag} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.bioText}>{bio}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Match!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Nope!</Text>
      </TouchableOpacity>
    </View>
  );
};

// Main component handling swipe cards
const CardStack = () => {
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
    return <ProfileCard {...cardData} />;
  };

  return (
    <View style={styles.container}>
      <SwipeCards
        cards={cards}
        renderCard={renderCard}
        handleYup={handleYup}
        handleNope={handleNope}
        loop={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
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
});

export default CardStack;
