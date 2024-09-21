import Colors from "@/constants/Colors";
import { Platform } from "react-native";

export default {
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: Colors.dark,
  },
};
