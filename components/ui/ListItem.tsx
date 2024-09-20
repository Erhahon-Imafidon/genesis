import { View, StyleSheet, TouchableHighlight, Image } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppText from "@/components/ui/AppText";
import { User } from "@/lib/definitions";
import Colors from "@/constants/Colors";

const ListItem = ({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  ImageComponent,
}: User) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor={Colors.lightGrey}
          onPress={onPress}
        >
          <View style={styles.container}>
            {ImageComponent && <ImageComponent />}
            {image && <Image style={styles.imageStyle} source={image} />}
            <View style={styles.textContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && (
                <AppText style={styles.subTitle}>{subTitle}</AppText>
              )}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
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

  imageStyle: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
});

export default ListItem;
