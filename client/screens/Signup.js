import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Signup = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupUser = async () => {
    const data = {
      name: name,
      email: email,
      password: password,
      age: "",
      status: "",
      sex: "",
      orientation: "",
      body_type: "",
      drinks: "",
      education: "",
      ethnicity: "",
      height: "",
      income: "",
      job: "",
      last_online: "",
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
    };
    try {
      const response = await axios.post("http://10.0.2.2:5001/signup", data);
      console.log(response.data.ID.ID);
      await AsyncStorage.setItem("userId", response.data.ID.ID.toString());
      navigation.navigate("CardStack");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/bg.png")}
      style={styles.container}
    >
      <Text style={styles.header}>Create Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={setName}
        value={name}
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
      <TouchableOpacity style={styles.button} onPress={signupUser}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginText}>Already have an account? Log In</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
    textAlign: "center",
    marginBottom: "10%",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  loginText: {
    color: "#eb2f64",
    fontSize: 16,
    marginTop: 15,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  heartIcon: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 16,
    color: "#333",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    width: "100%",
    backgroundColor: "#eb2f64",
    padding: 20,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 10,
  },
});

export default Signup;
