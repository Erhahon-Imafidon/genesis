import { Image, View, StyleSheet } from "react-native";
import AppText from "@/components/ui/AppText";
import Colors from "@/constants/Colors";
import ItemListTwo from "@/components/ui/ItemListTwo";
import Icons from "@/components/ui/Icons";

const ListingDetailsScreen = () => {
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

      <ItemListTwo
        title={"Myrmidon"}
        ImageComponent={() => (
          <Icons
            name="email"
            size={50}
            iconColor={Colors.white}
            backgroundColor={Colors.black}
          />
        )}
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
