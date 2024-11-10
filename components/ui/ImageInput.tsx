import {
    View,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    Alert,
} from 'react-native';
import { useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Colors from '@/constants/Colors';

type ImageInputProps = {
    imageUri: string;
    onChangeImage: (uri: string | null) => void;
};

const ImageInput = ({ imageUri, onChangeImage }: ImageInputProps) => {
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
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                quality: 0.5,
            });

            console.log(result);

            if (!result.canceled) {
                onChangeImage(result.assets[0].uri);
            }
        } catch (error) {
            console.log('Error reading an image', error);
        }
    };

    const handlePress = () => {
        if (!imageUri) selectImage();
        else
            Alert.alert(
                'Delete',
                'Are you sure you want to delete this image?',
                [
                    { text: 'Yes', onPress: () => onChangeImage(null) },
                    { text: 'No' },
                ]
            );
    };

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && (
                    <MaterialCommunityIcons
                        name="camera"
                        size={40}
                        color={Colors.mediumGray}
                    />
                )}

                {imageUri && (
                    <Image source={{ uri: imageUri }} style={styles.image} />
                )}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.lightGrey,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        height: 100,
        width: 100,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default ImageInput;