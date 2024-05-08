import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import SwipeCards from "react-native-swipe-cards";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const ProfileCard = ({
  name,
  age,
  status,
  sex,
  orientation,
  body_type,
  pets,
  sign,
  speaks,
  ethnicity,
  essay0,
}) => {
  const tags = [orientation, body_type, pets, sign, speaks, ethnicity];
  const realTags = tags.filter((tag) => tag !== "" && (tag.length>0 && tag.length<10));
  console.log(tags);
  return (
    <View style={styles.card}>
      <Image
        style={styles.profileImage}
        source={require("../assets/user-icon.png")}
      />
      <Text style={styles.nameText}>
        {name}, {age}
      </Text>
      <Text style={styles.distanceText}>{status}</Text>
      <View style={styles.matchContainer}>
        <Text style={styles.matchText}>{sex=="m" ? "Male" : "LGBT"}</Text>
      </View>
      <View style={styles.tagContainer}>
        {realTags.map((tag) => (
          <View key={tag} style={styles.tag}>
            {tag.length < 10 ? (
              <Text style={styles.tagText}>{tag}</Text>
            ) : null}
          </View>
        ))}
      </View>
      <Text style={styles.bioText}>
        {essay0.length <= 100 ? essay0 : essay0.substr(0, 100) + "... (show more)"}
      </Text>

      <Text style={styles.buttonText}>Swipe Right for Match!</Text>

      <Text style={styles.buttonText}>Swipe Left for Reject!</Text>
    </View>
  );
};

export const CardStack = ({ navigation }) => {
  const viewMyProfile = () => {
    navigation.navigate("Profile");
  };

  const [users, setUsers] = useState([]);
  useEffect(() => {
    getCards();
  }, []);
  const [loading, setLoading] = useState(true);
  const getCards = async () => {
    try {
      const id = Number(await AsyncStorage.getItem("userId"));
      console.log(Number(id));
      const data = {
        id: id,
      };
      const response = await axios.post(
        "http://10.0.2.2:5000/find-matches",
        data
      );
      console.log(response.data);
      setUsers(response.data.users);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleYup = (card) => {
    console.log("Yup for ", card.name);
  };

  const handleNope = (card) => {
    console.log("Nope for ", card.name);
  };

  const renderCard = (cardData) => {
    return <ProfileCard {...cardData} />;
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SwipeCards
        cards={users}
        renderCard={renderCard}
        handleYup={handleYup}
        handleNope={handleNope}
        loop={true}
      />

      <TouchableOpacity
        style={styles.viewProfileButton}
        onPress={viewMyProfile}
      >
        <Text style={styles.viewProfileButtonText}>View My Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingBottom: 20,
  },
  viewProfileButton: {
    backgroundColor: "#eb2f64",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
  viewProfileButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: "#ccc",
    marginBottom: 10,
  },
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  distanceText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  matchContainer: {
    marginBottom: 10,
  },
  matchText: {
    color: "#eb2f64",
    fontWeight: "bold",
  },
  tagContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  tag: {
    backgroundColor: "#eb2f64",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  tagText: {
    color: "#fff",
    fontSize: 14,
  },
  bioText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#eb2f64",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 10,
  },
  buttonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
});
