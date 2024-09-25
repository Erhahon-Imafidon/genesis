import { StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MessageUser } from "@/lib/definitions";
import ListItem from "@/components/lists/ListItem";
import Separator from "@/components/lists/Separators";
import ListDeleteAction from "@/components/lists/ListDeleteAction";

const initialMessage: MessageUser[] = [
  {
    id: 1,
    title: "Erhahon Imafidon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam corporis debitis dolorum eligendi est illum itaque labore nam nobis non perspiciatis porro quisquam quod, quos reiciendis repellat sapiente sequi vero.",
    image: require("../assets/images/imafidon.jpeg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/images/imafidon.jpeg"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState<MessageUser[]>(initialMessage);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (messageId: number) => {
    setMessages(messages.filter((message) => message.id !== messageId));
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subTitle={item.description}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListDeleteAction onPress={() => handleDelete(item.id)} />
            )}
          />
        )}
        ItemSeparatorComponent={Separator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/images/imafidon.jpeg"),
            },
          ]);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MessagesScreen;
