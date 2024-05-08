import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Switch,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const Profile = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    status: "",
    sex: "",
    orientation: "",
    bodyType: "",
    drinks: "",
    education: "",
    ethnicity: "",
    height: "",
    income: "",
    job: "",
    lastOnline: "",
    location: "",
    pets: "",
    religion: "",
    sign: "",
    smokes: "",
    speaks: "",
    essay0: "",
    offspring: "",
    diet: "",
    drugs: "",
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
   
    console.log(formData);
  };

  return (
    <ImageBackground
      source={require("../assets/bg.png")} 
      style={styles.container}
    >
      <ScrollView>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="John Doe"
            value={formData.name}
            onChangeText={(value) => handleChange("name", value)}
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="example@example.com"
            value={formData.email}
            onChangeText={(value) => handleChange("email", value)}
          />
          <Text style={styles.label}>Age</Text>
          <TextInput
            style={styles.input}
            placeholder="30"
            value={formData.age}
            onChangeText={(value) => handleChange("age", value)}
            keyboardType="numeric"
          />
          <Text style={styles.label}>Status</Text>
          <TextInput
            style={styles.input}
            placeholder="Single"
            value={formData.status}
            onChangeText={(value) => handleChange("status", value)}
          />
          <Text style={styles.label}>Sex</Text>
          <Picker
            selectedValue={formData.sex}
            onValueChange={(value) => handleChange("sex", value)}
            style={styles.picker}
            mode="dropdown"
          >
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            {/* Add other options as needed */}
          </Picker>
          <Text style={styles.label}>Orientation</Text>
          <TextInput
            style={styles.input}
            placeholder="Straight"
            value={formData.orientation}
            onChangeText={(value) => handleChange("orientation", value)}
          />
          <Text style={styles.label}>Body Type</Text>
          <TextInput
            style={styles.input}
            placeholder="Slim"
            value={formData.bodyType}
            onChangeText={(value) => handleChange("bodyType", value)}
          />
          <Text style={styles.label}>Drinks</Text>
          <TextInput
            style={styles.input}
            placeholder="Occasionally"
            value={formData.drinks}
            onChangeText={(value) => handleChange("drinks", value)}
          />
          <Text style={styles.label}>Education</Text>
          <TextInput
            style={styles.input}
            placeholder="College"
            value={formData.education}
            onChangeText={(value) => handleChange("education", value)}
          />
          <Text style={styles.label}>Ethnicity</Text>
          <TextInput
            style={styles.input}
            placeholder="Caucasian"
            value={formData.ethnicity}
            onChangeText={(value) => handleChange("ethnicity", value)}
          />
          <Text style={styles.label}>Height</Text>
          <TextInput
            style={styles.input}
            placeholder="180"
            value={formData.height}
            onChangeText={(value) => handleChange("height", value)}
            keyboardType="numeric"
          />
          <Text style={styles.label}>Income</Text>
          <TextInput
            style={styles.input}
            placeholder="50000"
            value={formData.income}
            onChangeText={(value) => handleChange("income", value)}
            keyboardType="numeric"
          />
          <Text style={styles.label}>Job</Text>
          <TextInput
            style={styles.input}
            placeholder="Engineer"
            value={formData.job}
            onChangeText={(value) => handleChange("job", value)}
          />
          <Text style={styles.label}>Last Online</Text>
          <TextInput
            style={styles.input}
            placeholder="2024-05-09"
            value={formData.lastOnline}
            onChangeText={(value) => handleChange("lastOnline", value)}
          />
          <Text style={styles.label}>Location</Text>
          <TextInput
            style={styles.input}
            placeholder="New York"
            value={formData.location}
            onChangeText={(value) => handleChange("location", value)}
          />
          <Text style={styles.label}>Pets</Text>
          <TextInput
            style={styles.input}
            placeholder="Dog"
            value={formData.pets}
            onChangeText={(value) => handleChange("pets", value)}
          />
          <Text style={styles.label}>Religion</Text>
          <TextInput
            style={styles.input}
            placeholder="Christian"
            value={formData.religion}
            onChangeText={(value) => handleChange("religion", value)}
          />
          <Text style={styles.label}>Sign</Text>
          <TextInput
            style={styles.input}
            placeholder="Capricorn"
            value={formData.sign}
            onChangeText={(value) => handleChange("sign", value)}
          />
          <Text style={styles.label}>Smokes</Text>
          <TextInput
            style={styles.input}
            placeholder="Occasionally"
            value={formData.smokes}
            onChangeText={(value) => handleChange("smokes", value)}
          />
          <Text style={styles.label}>Speaks</Text>
          <TextInput
            style={styles.input}
            placeholder="English"
            value={formData.speaks}
            onChangeText={(value) => handleChange("speaks", value)}
          />
          <Text style={styles.label}>Essay0</Text>
          <TextInput
            style={styles.input}
            placeholder="Write something about yourself"
            value={formData.essay0}
            onChangeText={(value) => handleChange("essay0", value)}
          />
          <Text style={styles.label}>Offspring</Text>
          <TextInput
            style={styles.input}
            placeholder="None"
            value={formData.offspring}
            onChangeText={(value) => handleChange("offspring", value)}
          />
          <Text style={styles.label}>Diet</Text>
          <TextInput
            style={styles.input}
            placeholder="Vegetarian"
            value={formData.diet}
            onChangeText={(value) => handleChange("diet", value)}
          />
          <Text style={styles.label}>Drugs</Text>
          <TextInput
            style={styles.input}
            placeholder="Never"
            value={formData.drugs}
            onChangeText={(value) => handleChange("drugs", value)}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Let's Go!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonText}>I'm not prepared yet</Text>
        </TouchableOpacity>
      </ScrollView>
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
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "black",
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    height: 40,
    borderColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  picker: {
    flex: 1,
    marginHorizontal: 5,
  },
  interestsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "50%",
    marginBottom: 10,
  },
  switchLabel: {
    fontSize: 16,
    color: "black",
  },
  button: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
    marginTop: 30,
    width: 250, 
    alignSelf: "center", 
  },
  buttonSecondary: {
    backgroundColor: "lightgray",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    width: 250, 
    alignSelf: "center", 
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Profile;
