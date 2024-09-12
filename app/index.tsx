import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import Colors from "../constants/Colors";
import CustomButton from "@/components/ui/Button";
import Card from "@/components/ui/Card";

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

        <View style={styles.login}>
          <CustomButton title={"Login"} onPress={() => {}} />
        </View>

        <View style={styles.register}>
          <CustomButton
            title={"Register"}
            color="secondary"
            onPress={() => {}}
          />

          <Card
            image={require("../assets/images/jacket.jpg")}
            title="Chair for Sale"
            subTitle="#5000"
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
