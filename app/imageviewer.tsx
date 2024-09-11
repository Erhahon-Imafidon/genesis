import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../constants/Colors';

const ViewImageScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <View style={styles.closeIcon}></View>
                <View style={styles.deleteIcon}></View>
            </View>

            <Image
                source={require('../assets/images/chair.jpg')}
                style={styles.image}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black,
        justifyContent: 'center',
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        marginTop: 50,
    },

    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        width: '100%',
        position: 'absolute',
        top: 50,
    },

    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: Colors.primary,
    },

    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: Colors.secondary,
    },
});

export default ViewImageScreen;
