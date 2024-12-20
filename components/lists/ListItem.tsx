import { View, StyleSheet, TouchableHighlight, Image } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons/';
import AppText from '@/components/ui/AppText';
import { User } from '@/lib/definitions';
import Colors from '@/constants/Colors';

const ListItem = ({
    image,
    title,
    subTitle,
    onPress,
    renderRightActions,
    IconComponent,
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
                        {IconComponent && <IconComponent />}
                        {image && (
                            <Image style={styles.imageStyle} source={image} />
                        )}
                        <View style={styles.textContainer}>
                            <AppText style={styles.title} numberOfLines={1}>
                                {title}
                            </AppText>
                            {subTitle && (
                                <AppText
                                    style={styles.subTitle}
                                    numberOfLines={2}
                                >
                                    {subTitle}
                                </AppText>
                            )}
                        </View>
                        <MaterialCommunityIcons
                            color={Colors.mediumGray}
                            name="chevron-right"
                            size={25}
                        />
                    </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: Colors.white,
    },

    textContainer: {
        paddingHorizontal: 20,
        justifyContent: 'center',
        flex: 1,
    },

    title: {
        fontSize: 20,
        color: Colors.black,
        fontWeight: '500',
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
