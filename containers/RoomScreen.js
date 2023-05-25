import { useRoute } from "@react-navigation/core";
import { Text, View } from "react-native";
import { useEffect } from "react";
// import axios from "axios";

export default function ProfileScreen() {
  const { params } = useRoute();

  return <View>{/* <Text>user id : {params.id}</Text> */}</View>;
}
//
