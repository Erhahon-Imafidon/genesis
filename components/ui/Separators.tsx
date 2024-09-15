import { View, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.lightGrey,
  },
});

export default Separator;
