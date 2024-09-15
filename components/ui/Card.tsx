import { Text, View, Image, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import AppText from "@/components/ui/AppText";
import { User } from "@/lib/definitions";

const Card = ({ image, title, subTitle }: User) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: Colors.white,
    marginVertical: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    objectFit: "cover",
    height: 200,
  },
  textContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 16,
    color: Colors.secondary,
    marginTop: 5,
  },
});

export default Card;
