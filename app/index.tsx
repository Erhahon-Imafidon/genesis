import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import Colors from '../constants/Colors';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.background}
                source={require('../assets/images/background.jpg')}
            >
                <Image
                    source={require('../assets/images/logo-red.png')}
                    style={styles.logo}
                />
                <Text style={styles.text}>Sell what you don't need</Text>
                <View style={styles.login}></View>
                <View style={styles.register}></View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    background: {
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center',
        paddingTop: 100,
    },

    logo: {
        width: 100,
        height: 100,
        marginTop: 30,
    },

    text: {
        color: Colors.black,
    },

    login: {
        backgroundColor: Colors.primary,
        width: '100%',
        height: 70,
        marginTop: 'auto',
    },

    register: {
        backgroundColor: Colors.secondary,
        width: '100%',
        height: 70,
    },
});

export default HomeScreen;
