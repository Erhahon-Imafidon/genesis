import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "@/components/ui/AppText";

export type PickerItemProps = {
  label?: string;
  onPress?: () => void;
  item?: any;
};

const PickerItem = ({ item, onPress }: PickerItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;
