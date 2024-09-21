import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "@/constants/styles";
import AppText from "@/components/ui/AppText";
import { placeholder } from "@babel/types";
import Colors from "@/constants/Colors";

type AppPickerProp = {
  name?: keyof typeof MaterialCommunityIcons.glyphMap;
  size?: number;
  color?: string;
  placeholder?: React.ReactNode;
};

const AppTextInput: React.FC<AppPickerProp> = ({
  name,
  size,
  color,
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      {name && (
        <MaterialCommunityIcons
          name={name}
          size={size}
          color={color}
          style={{ marginRight: 10 }}
        />
      )}

      <AppText style={styles.text}>{placeholder}</AppText>

      <MaterialCommunityIcons
        name="chevron-down"
        size={24}
        color={Colors.dark}
      />
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

  text: {
    flex: 1,
  },
});

export default AppTextInput;
