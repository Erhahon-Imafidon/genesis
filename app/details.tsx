import { Image, View, StyleSheet } from "react-native";
import AppText from "@/components/ui/AppText";
import Colors from "@/constants/Colors";
import ListItem from "@/components/ui/ListItem";

const ListingDetailsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={styles.image}
        source={require("../assets/images/jacket.jpg")}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Chair for Sale</AppText>
        <AppText style={styles.price}>#5000</AppText>
      </View>

      <ListItem
        image={require("../assets/images/imafidon.jpeg")}
        title="Micheal Imafidon"
        subTitle="5 Listings"
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
