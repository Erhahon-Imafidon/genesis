import { forwardRef } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

type ColorsKeys = keyof typeof Colors;

type ButtonProps = {
  title: string;
  color?: ColorsKeys;
  onPress?: () => void;
};

const AppButton: React.FC<ButtonProps> = forwardRef<
  TouchableOpacity,
  ButtonProps
>(({ title, onPress, color = "primary" }, ref) => {
  return (
    <TouchableOpacity
      ref={ref}
      onPress={onPress}
      style={[styles.button, { backgroundColor: Colors[color] }]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
  },

  buttonText: {
    color: Colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
