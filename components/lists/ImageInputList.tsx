import { View, StyleSheet, ScrollView } from 'react-native';
import { useRef } from 'react';
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
    const scrollView = useRef<ScrollView>(null);

    return (
        <ScrollView
            ref={scrollView}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.container}
            onContentSizeChange={() => scrollView.current?.scrollToEnd()}
        >
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
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
});

export default ImageInputList;
