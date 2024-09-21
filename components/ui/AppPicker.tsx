import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "@/components/ui/AppText";
import Colors from "@/constants/Colors";
import { Button } from "@rneui/themed";
import PickerItem from "@/components/ui/PickerItem";

type AppPickerProp = {
  name?: keyof typeof MaterialCommunityIcons.glyphMap;
  size?: number;
  color?: string;
  placeholder?: React.ReactNode;
  items?: any[];
};

const AppTextInput: React.FC<AppPickerProp> = ({
  name,
  size,
  color,
  placeholder,
  items,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {name && (
            <MaterialCommunityIcons
              name={name}
              size={size}
              color={color}
              style={{ marginRight: 10 }}
            />
          )}

          <AppText style={styles.text}>{placeholder}</AppText>

          <MaterialCommunityIcons
            name="chevron-down"
            size={24}
            color={Colors.dark}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <SafeAreaView>
          <Button onPress={() => setModalVisible(false)}>Close</Button>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => console.log(item)}
              />
            )}
          />
        </SafeAreaView>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#f8f4f4",
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
  },

  text: {
    flex: 1,
  },
});

export default AppTextInput;
