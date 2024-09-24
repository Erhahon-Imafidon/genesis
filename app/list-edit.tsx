import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import AppPicker from "@/components/ui/AppPicker";
import AppTextInput from "@/components/forms/AppTextInput";
import AppButton from "@/components/ui/AppButton";

const ListEditScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppTextInput placeholder="Title" />
      <AppTextInput placeholder="Price" />
      <AppPicker placeholder="Category" />
      <AppTextInput placeholder="Description" />
      <AppButton title={"Post"} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
});

export default ListEditScreen;
