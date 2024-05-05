import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const Card = () => {
  // Placeholder for profile details. You might want to fetch this data from your backend.
  const profile = {
    name: 'Matt',
    age: 23,
    distance: '30 km away',
    matchPercentage: 82,
    tags: ['books', 'tech', 'dance'],
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  };

  return (
    <View style={styles.container}>
        
      <View style={styles.card}>
        <Image style={styles.profileImage} source={require('../assets/user-icon.png')} />
        <Text style={styles.nameText}>{profile.name}, {profile.age}</Text>
        <Text style={styles.distanceText}>{profile.distance}</Text>
        <View style={styles.matchContainer}>
          <Text style={styles.matchText}>{profile.matchPercentage}% match</Text>
        </View>
        <View style={styles.tagContainer}>
          {profile.tags.map(tag => (
            <View key={tag} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.bioText}>{profile.bio}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>match!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>nope!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Adjust the background color to match your design
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
    backgroundColor: '#ccc', // Placeholder color
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
    // Additional styling may be required here
  },
  matchText: {
    color: '#eb2f64',
    fontWeight: 'bold',
    marginBottom: 10,
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
  nopeButton: {
    // Similar to the match button but with different color or style
  },
  nopeButtonText: {
    // Similar to the buttonText but with different color or style
  },
  // ...add any other styles that you need to complete the design
});

export default Card;
