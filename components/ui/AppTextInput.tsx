import { View, TextInput, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type AppInputProp = {
  name?: keyof typeof MaterialCommunityIcons.glyphMap;
  size?: number;
  color?: string;
} & React.ComponentProps<typeof TextInput>;

const AppTextInput: React.FC<AppInputProp> = ({
  name,
  size,
  color,
  ...otherProps
}) => {
  return (
    <View style={styles.container}>
      {name && <MaterialCommunityIcons name={name} size={size} color={color} />}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#f8f4f4",
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
  },

  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    marginLeft: 10,
    color: "#0c0c0c",
  },
});

export default AppTextInput;
