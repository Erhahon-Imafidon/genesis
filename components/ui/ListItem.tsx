import { Avatar } from "@rneui/themed";
import { View, StyleSheet } from "react-native";
import AppText from "@/components/ui/AppText";
import { User } from "@/lib/definitions";
import Colors from "@/constants/Colors";

const ListItem = ({ image, title, subTitle }: User) => {
  return (
    <View style={styles.container}>
      <Avatar size={100} rounded source={image} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 15,
  },

  textContainer: {
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 20,
    color: Colors.black,
    fontWeight: "500",
  },
  subTitle: {
    color: Colors.mediumGray,
  },
});

export default ListItem;
