import { View, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

const ListDeleteAction = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.danger,
    width: 70,
  },
});

export default ListDeleteAction;
