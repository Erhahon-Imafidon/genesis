import { Text, TextProps, StyleSheet, Platform } from "react-native";

interface AppTextProps extends TextProps {
  children: React.ReactNode;
}

const AppText = ({ children, style, ...otherProps }: AppTextProps) => {
  return (
    <Text style={[styles.defaultStyle, style]} {...otherProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
        fontSize: 20,
      },
      android: {
        fontFamily: "Roboto",
        fontSize: 18,
      },
    }),
    color: "#0c0c0c",
  },
});

export default AppText;
