import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "@/components/ui/AppText";

type PickerItemProps = {
  label: string;
  onPress?: () => void;
};

const PickerItem = ({ label, onPress }: PickerItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;
