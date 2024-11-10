import { View, StyleSheet, ScrollView } from 'react-native';
import { useRef } from 'react';
import ImageInput from '@/components/ui/ImageInput';

export type ImageInputListProps = {
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
        <View>
            <ScrollView
                ref={scrollView}
                horizontal
                showsHorizontalScrollIndicator={false}
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
});

export default ImageInputList;
