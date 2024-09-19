import { View, StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MessageUser } from "@/lib/definitions";
import ListItem from "@/components/ui/ListItem";
import Separator from "@/components/ui/Separators";
import ListDeleteAction from "@/components/ui/ListDeleteAction";
import Icons from "@/components/ui/Icons";

const initialMessage: MessageUser[] = [
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
  const [messages, setMessages] = useState<MessageUser[]>(initialMessage);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (messageId: number) => {
    setMessages(messages.filter((message) => message.id !== messageId));
  };
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
      <Icons backgroundColor="red" name="email" size={50} iconColor="#fff" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MessagesScreen;
