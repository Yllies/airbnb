import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState } from "react";
import { StyleSheet } from "react-native-web";
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
    if (password === confirmPassword) {
      if (email && username && description && password && confirmPassword) {
        setError("");

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
          console.log(error.response);
          setError("Signup Failed");
        }
      } else {
        setError("Please, enter your informations in the form.");
      }
    } else {
      setError("Please, put the same password.");
    }
  };

  return (
    <KeyboardAwareScrollView>
      <Text>Sign up</Text>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => {
          setError("");
          setEmail(text);
        }}
        value={email}
        style={styles.input}
      />
      <TextInput
        placeholder="Username"
        onChangeText={(text) => {
          setError("");

          setUsername(text);
        }}
        value={username}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        multiline
        onChangeText={(text) => {
          setError("");

          setDescription(text);
        }}
        value={description}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
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
        onChangeText={(text) => {
          setError("");

          setConfirmPassword(text);
        }}
        value={confirmPassword}
        style={styles.input}
        secureTextEntry={true}
      />
      {error && <Text>{error}</Text>}
      <TouchableOpacity onPress={submit}>
        <Text>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Signin");
        }}
      >
        <Text>Already have an account ? Sign in</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginVertical: 15,
  },
});
