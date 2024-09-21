import { Image, View, StyleSheet, Switch } from "react-native";
import { useState } from "react";
import AppText from "@/components/ui/AppText";
import Colors from "@/constants/Colors";
import AppTextInput from "@/components/ui/AppTextInput";

const ListingDetailsScreen = () => {
  const [isNew, setIsNew] = useState(false);

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

      <AppTextInput
        name="email"
        placeholder="Email Seller"
        size={24}
        color={Colors.primary}
      />

      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
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
