import { View, StyleSheet, FlatList } from 'react-native';
import ImageInput from '@/components/ui/ImageInput';

type ImageInputListProps = {
    imageUris?: string[];
    onAddImage: (uri: string | null) => void;
    onRemoveImage: (uri: string | null) => void;
};

const ImageInputList = ({
    imageUris = [],
    onRemoveImage,
    onAddImage,
}: ImageInputListProps) => {
    return (
        <View style={styles.container}>
            {imageUris.map((uri) => (
                <ImageInput
                    key={uri}
                    imageUri={uri}
                    onChangeImage={() => onRemoveImage(uri)}
                />
            ))}
            <ImageInput onChangeImage={onAddImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
});

export default ImageInputList;
