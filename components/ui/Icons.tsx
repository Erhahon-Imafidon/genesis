import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface IconProps {
  backgroundColor: string;
  name: typeof MaterialCommunityIcons.glyphMap;
  size: number;
  iconColor: string;
}

const Icons = ({
  backgroundColor = "#000",
  name,
  size = 40,
  iconColor = "#fff",
}: IconProps) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
      }}
    >
      <MaterialCommunityIcons name={name} size={size} color={iconColor} />
    </View>
  );
};

export default Icons;
