import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <View>
          <MaterialCommunityIcons name="close" size={35} color={Colors.white} />
        </View>
        <View>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={35}
            color={Colors.white}
          />
        </View>
      </View>

      <Image
        source={require("../assets/images/chair.jpg")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    justifyContent: "center",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    marginTop: 50,
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    width: "100%",
    position: "absolute",
    top: 50,
  },
});

export default ViewImageScreen;
