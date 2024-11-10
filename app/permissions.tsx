import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import AppText from '@/components/ui/AppText';
import ImageInputList from '@/components/lists/ImageInputList';

const Permissions = () => {
    const [imageUris, setImageUris] = useState<string[]>([]);

    const handleAdd = (uri: string | null) => {
        if (uri) {
            setImageUris([...imageUris, uri]);
        }
    };

    const handleRemove = (uri: string | null) => {
        if (uri) {
            setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <AppText style={{ marginBottom: 10 }}>Permissions</AppText>

            <ImageInputList
                imageUris={imageUris}
                onRemoveImage={handleRemove}
                onAddImage={handleAdd}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },

    image: {
        width: '100%',
        height: 200,
    },
});

export default Permissions;
