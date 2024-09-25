import { View, StyleSheet } from "react-native";
import { PickerItemProps } from "@/components/ui/PickerItem";
import Icons from "@/components/ui/Icons";
import AppText from "@/components/ui/AppText";

const CategoryPickerItem: React.FC<PickerItemProps> = ({
  item,
  label,
  onPress,
}) => {
  return (
    <View>
      <Icons
        backgroundColor={item.backgroundColor}
        name={item.name}
        size={60}
      />
      <AppText>{label}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CategoryPickerItem;
