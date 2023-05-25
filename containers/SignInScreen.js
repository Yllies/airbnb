import { useNavigation } from "@react-navigation/core";
import {
  Button,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Constants from "expo-constants";
import { useEffect, useState } from "react";

export default function SignInScreen({ setToken }) {
  const navigation = useNavigation();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  return (
    <KeyboardAwareScrollView>
      <View
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
      >
        <View style={styles.header}>
          <Image
            source={require("../assets/logo.png")}
            style={styles.logo}
          ></Image>
          <Text style={styles.title}>Sign in</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            placeholder="Email"
            style={styles.input}
            placeholderTextColor="#D3D3D3"
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
            placeholderTextColor="#D3D3D3"
          />
          <Text
            style={styles.btnSignIn}
            onPress={async () => {
              const userToken = "secret-token";
              setToken(userToken);
            }}
          >
            Sign in
          </Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            <Text style={styles.noAccount}>No account ? Sign up !</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
  },
  contentContainer: {
    alignItems: "center",
  },
  form: {
    marginTop: 40,
    alignItems: "center",
    width: 300,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    color: "#717171",
    fontSize: 20,
    fontWeight: "bold",
  },
  header: {
    alignItems: "center",
    marginVertical: 40,
  },
  input: {
    borderBottomWidth: 1,
    width: 300,
    borderBottomColor: "#FA6F74",
    marginVertical: 20,
    padding: 8,
  },
  btnSignIn: {
    borderWidth: 3,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    borderColor: "#FA6F74",
    color: "#717171",
    marginTop: 100,
    marginBottom: 20,
  },
  noAccount: {
    color: "#717171",
  },
});
// Add comment
