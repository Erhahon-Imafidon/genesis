import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import AppText from '@/components/ui/AppText';
import ImageInput from '@/components/ui/ImageInput';

const Permissions = () => {
    const [image, setImage] = useState<string | null>(null);

    return (
        <SafeAreaView style={styles.container}>
            <AppText style={{ marginBottom: 10 }}>Permissions</AppText>

            <ImageInput
                imageUri={image || ''}
                onChangeImage={(uri) => setImage(uri)}
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
