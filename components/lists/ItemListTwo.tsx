import React, { ReactNode } from 'react';
import { Avatar } from '@rneui/themed';
import {
    View,
    StyleSheet,
    ImageSourcePropType,
    TouchableHighlight,
} from 'react-native';
import AppText from '@/components/ui/AppText';
import Colors from '@/constants/Colors';

interface ItemListTwoProps {
    image?: ImageSourcePropType;
    title: string;
    subTitle?: string;
    onPress?: () => void;
    IconComponent?: () => ReactNode; // Different method of creating a type that returns a jsx or tsx Function
}

const ItemListTwo: React.FC<ItemListTwoProps> = ({
    image,
    title,
    subTitle,
    onPress,
    IconComponent,
}) => {
    return (
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor={Colors.lightGrey}
            onPress={onPress}
        >
            <View style={styles.container}>
                {IconComponent && <IconComponent />}
                {image && <Avatar size={70} rounded source={image} />}
                <View style={styles.textContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    {subTitle && (
                        <AppText style={styles.subTitle}>{subTitle}</AppText>
                    )}
                </View>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: Colors.white,
    },

    textContainer: {
        paddingHorizontal: 10,
        justifyContent: 'center',
    },

    title: {
        fontSize: 20,
        color: Colors.black,
        fontWeight: '500',
    },
    subTitle: {
        color: Colors.mediumGray,
    },
});

export default ItemListTwo;
