import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { Link } from "expo-router";
import Colors from "../constants/Colors";
import CustomButton from "@/components/ui/Button";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={10}
        style={styles.background}
        source={require("../assets/images/background.jpg")}
      >
        <Image
          source={require("../assets/images/logo-red.png")}
          style={styles.logo}
        />
        <Text style={styles.text}>Sell what you don't need</Text>

        <Link href="/listings">Listings Screen</Link>
        <Link href="/details">View Details Screen</Link>
        <Link href="/messages">Messages Screen</Link>
        <Link style={{ marginTop: 5 }} href="/account">
          Account Screen
        </Link>

        <View style={styles.login}>
          <CustomButton title={"Login"} onPress={() => {}} />
        </View>

        <View style={styles.register}>
          <CustomButton
            title={"Register"}
            color="secondary"
            onPress={() => {}}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  background: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    paddingTop: 100,
  },

  logo: {
    width: 100,
    height: 100,
    marginTop: 30,
  },

  text: {
    color: Colors.black,
    fontSize: 25,
    fontWeight: "600",
    marginTop: 10,
  },

  login: { marginTop: "auto", width: "100%", paddingHorizontal: 10 },

  register: {
    width: "100%",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});

export default HomeScreen;
