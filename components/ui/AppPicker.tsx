import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
  DimensionValue,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "@/components/ui/AppText";
import Colors from "@/constants/Colors";
import { Button } from "@rneui/themed";
import PickerItem from "@/components/ui/PickerItem";

export type Category = {
  label: string;
  value: number;
};

type AppPickerProp = {
  name?: keyof typeof MaterialCommunityIcons.glyphMap;
  size?: number;
  color?: string;
  width?: DimensionValue;
  placeholder?: React.ReactNode;
  items?: Category[];
  selectedItem?: Category;
  onSelectItem?: (item: any) => void;
};

const AppPicker: React.FC<AppPickerProp> = ({
  name,
  size,
  color,
  placeholder,
  items,
  width = "100%",
  selectedItem,
  onSelectItem,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelectItem = (item: any) => {
    setModalVisible(false);
    onSelectItem?.(item);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {name && (
            <MaterialCommunityIcons
              name={name}
              size={size}
              color={color}
              style={{ marginRight: 10 }}
            />
          )}

          {selectedItem ? (
            <AppText style={styles.text}>{(selectedItem as any).label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

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
                onPress={() => handleSelectItem(item)}
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
    backgroundColor: "#f8f4f4",
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
  },

  text: {
    flex: 1,
  },

  placeholder: {
    flex: 1,
    color: Colors.mediumGray,
  },
});

export default AppPicker;
