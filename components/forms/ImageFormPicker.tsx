import { useFormikContext } from 'formik';
import ImageInputList from '@/components/lists/ImageInputList';
import ErrorMessage from '@/components/forms/ErrorMessage';

type ImagePickerProps = {
    name: string;
};

const ImageFormPicker = ({ name }: ImagePickerProps) => {
    const { values, errors, touched, setFieldValue, setFieldTouched } =
        useFormikContext<{
            [key: string]: string[];
        }>();

    const error = Array.isArray(errors[name])
        ? (errors[name] as string[]).join(', ')
        : (errors[name] as string) || '';

    const visible = !!touched[name]; // Simplified true : false

    const imageUris = Array.isArray(values[name]) ? values[name] : [];

    const handleAdd = async (uri: string | null) => {
        if (uri) {
            await setFieldValue(name, [...(values[name] as string[]), uri]);
            await setFieldTouched(name, true);
        }
    };

    const handleRemove = async (uri: string | null) => {
        if (uri) {
            await setFieldValue(
                name,
                (values[name] as string[]).filter(
                    (imageUri) => imageUri !== uri
                )
            );
            await setFieldTouched(name, true);
        }
    };

    return (
        <>
            <ImageInputList
                imageUris={imageUris}
                onRemoveImage={handleRemove}
                onAddImage={handleAdd}
            />
            <ErrorMessage error={error} visible={visible} />
        </>
    );
};

export default ImageFormPicker;
