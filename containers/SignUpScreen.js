import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState } from "react";
import Constants from "expo-constants";
import axios from "axios";
import { useNavigation } from "@react-navigation/core";

export default function SignUpScreen({ setToken }) {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async () => {
    if (email && username && description && password && confirmPassword) {
      setError("");
      if (password === confirmPassword) {
        try {
          const data = await axios.post(
            "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/sign_up",
            {
              email,
              username,
              description,
              password,
            }
          );

          alert("Success");
        } catch (error) {
          // console.log(error.response);

          setError(error.response.data.error);
        }
      } else {
        setError("Please, put the same password.");
      }
    } else {
      setError("Please, enter your informations in the form.");
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
    >
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Sign up</Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#D3D3D3"
          onChangeText={(text) => {
            setError("");
            setEmail(text);
          }}
          value={email}
          style={styles.input}
        />
        <TextInput
          placeholder="Username"
          placeholderTextColor="#D3D3D3"
          onChangeText={(text) => {
            setError("");

            setUsername(text);
          }}
          value={username}
          style={styles.input}
        />
        <TextInput
          placeholder="Description"
          placeholderTextColor="#D3D3D3"
          multiline
          onChangeText={(text) => {
            setError("");

            setDescription(text);
          }}
          value={description}
          style={styles.description}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#D3D3D3"
          onChangeText={(text) => {
            setError("");

            setPassword(text);
          }}
          value={password}
          style={styles.input}
          secureTextEntry={true}
        />
        <TextInput
          placeholder="Confirm your password"
          placeholderTextColor="#D3D3D3"
          onChangeText={(text) => {
            setError("");

            setConfirmPassword(text);
          }}
          value={confirmPassword}
          style={styles.input}
          secureTextEntry={true}
        />
        {error && <Text style={styles.error}>{error}</Text>}
      </View>
      <TouchableOpacity onPress={submit}>
        <Text style={styles.btnSignUp}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignIn");
        }}
      >
        <Text style={styles.alreadyAccount}>
          Already have an account ? Sign in !
        </Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
  contentContainer: {
    alignItems: "center",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#FA6F74",
    padding: 8,
    marginVertical: 15,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginVertical: 30,
  },
  title: {
    color: "#717171",
    fontSize: 20,
    fontWeight: "bold",
  },
  btnSignUp: {
    borderWidth: 3,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25,
    borderColor: "#FA6F74",
    color: "#717171",
    marginBottom: 20,
    marginTop: 30,
    fontSize: 20,
  },
  alreadyAccount: {
    color: "#717171",
  },
  form: {
    width: 300,
  },
  description: {
    borderWidth: 1,
    height: 70,
    borderColor: "#FA6F74",
    padding: 10,
    marginVertical: 15,
    borderRadius: 3,
  },
  error: {
    color: "red",
    marginVertical: 20,
    fontWeight: "300",
  },
});
