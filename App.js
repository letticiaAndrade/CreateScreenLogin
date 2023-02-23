import { SafeAreaView, StyleSheet, Dimensions } from "react-native";
import { Routes } from "./src/routes";

import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={style.container}>
      <Routes />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
