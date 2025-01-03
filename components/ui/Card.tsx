import {
    View,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';
import Colors from '@/constants/Colors';
import AppText from '@/components/ui/AppText';
import { MessageUser } from '@/lib/definitions';

const Card = ({ image, title, price, onPress }: MessageUser) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image source={image} style={styles.image} />
                <View style={styles.textContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{price}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: Colors.white,
        marginVertical: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        objectFit: 'cover',
        height: 200,
    },
    textContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 16,
        color: Colors.secondary,
        marginTop: 5,
    },
});

export default Card;
