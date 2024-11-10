import { View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import AppText from '@/components/ui/AppText';
import AppButton from '@/components/ui/AppButton';

const Permissions = () => {
    const [image, setImage] = useState<string | null>(null);

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if (!granted) {
            alert('You need to enable permission to access the library.');
        }
    };

    useEffect(() => {
        requestPermission();
    }, []);

    const selectImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                quality: 1,
            });

            console.log(result);

            if (!result.canceled) {
                setImage(result.assets[0].uri);
            }
        } catch (error) {
            console.log('Error reading an image', error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <AppText>Permissions</AppText>
            <AppButton
                title={'Select Image'}
                onPress={selectImage}
                style={{ marginTop: 10 }}
            />
            {image && <Image source={{ uri: image }} style={styles.image} />}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },

    image: {
        width: '100%',
        height: 200,
    },
});

export default Permissions;
