import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, FlatList } from "react-native";
import ItemListTwo from "@/components/ui/ItemListTwo";
import ListItem from "@/components/ui/ListItem";
import Colors from "@/constants/Colors";
import Icons, { IconProps } from "@/components/ui/Icons";

interface MenuProps extends IconProps {
  title: string;
}

const menuItems: MenuProps[] = [
  {
    title: "My Listings",
    name: "format-list-bulleted",
    backgroundColor: Colors.primary,
  },
  {
    title: "My Messages",
    name: "email",
    backgroundColor: Colors.secondary,
  },
];

const AccountScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ItemListTwo
          title="Erhahon Imafidon"
          subTitle="mafiosco4@gmail.com"
          image={require("../assets/images/imafidon.jpeg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={() => (
                <Icons
                  name={item.name}
                  backgroundColor={item.backgroundColor}
                />
              )}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});

export default AccountScreen;
