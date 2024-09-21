import { Image, View, StyleSheet, Switch } from "react-native";
import { useState } from "react";
import AppText from "@/components/ui/AppText";
import Colors from "@/constants/Colors";
import AppTextInput from "@/components/ui/AppTextInput";
import AppPicker from "@/components/ui/AppPicker";
import { Category } from "@/components/ui/AppPicker";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

const ListingDetailsScreen = () => {
  const [category, setCategory] = useState<Category | undefined>(categories[0]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/jacket.jpg")}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Chair for Sale</AppText>
        <AppText style={styles.price}>#5000</AppText>
      </View>

      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        name="apps"
        placeholder="Category"
        size={24}
        color={Colors.dark}
      />

      <AppTextInput
        name="email"
        placeholder="Email Seller"
        size={24}
        color={Colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: Colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
});

export default ListingDetailsScreen;
