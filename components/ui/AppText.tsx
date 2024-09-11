import { Text, TextProps, StyleSheet, Platform } from "react-native";

interface AppTextProps extends TextProps {
  children: React.ReactNode;
}

const AppText = ({ children, style, ...props }: AppTextProps) => {
  return <Text style={[styles.defaultStyle, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  defaultStyle: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
