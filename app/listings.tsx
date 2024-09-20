import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, StyleSheet } from "react-native";
import { MessageUser } from "@/lib/definitions";
import Colors from "@/constants/Colors";
import Card from "@/components/ui/Card";

const listings: MessageUser[] = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/images/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in Great Condition",
    price: 1000,
    image: require("../assets/images/couch.jpg"),
  },
];

const ListingsScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            image={item.image}
            subTitle={"₦" + item.price}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: Colors.lightGrey,
  },
});

export default ListingsScreen;
