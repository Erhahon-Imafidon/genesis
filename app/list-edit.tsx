import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, StyleSheet } from "react-native";
import AppPicker from "@/components/ui/AppPicker";
import AppText from "@/components/ui/AppText";

const ListEditScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppText>List Edit Screen</AppText>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListEditScreen;
