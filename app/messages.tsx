import { View, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MessageUser } from "@/lib/definitions";
import ListItem from "@/components/ui/ListItem";

const messages: MessageUser[] = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/images/imafidon.jpeg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/images/imafidon.jpeg"),
  },
];

const MessagesScreen = (props: MessageUser[]) => {
  return (
    <SafeAreaView>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subTitle={item.description}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default MessagesScreen;
