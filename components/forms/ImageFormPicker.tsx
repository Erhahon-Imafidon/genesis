import { useFormikContext } from 'formik';
import ImageInputList from '@/components/lists/ImageInputList';
import ErrorMessage from '@/components/forms/ErrorMessage';

type ImagePickerProps = {
    name: string;
};

const ImageFormPicker = ({ name }: ImagePickerProps) => {
    const { values, errors, touched, setFieldValue } = useFormikContext<{
        [key: string]: string[];
    }>();

    const error = Array.isArray(errors[name])
        ? errors[name]?.join(', ')
        : errors[name] || '';

    const visible = typeof touched[name] === 'boolean' ? touched[name] : false;

    const imageUris = Array.isArray(values[name]) ? values[name] : [];

    const handleAdd = (uri: string | null) => {
        if (uri) {
            setFieldValue(name, [...values[name], uri]);
        }
    };

    const handleRemove = (uri: string | null) => {
        if (uri) {
            setFieldValue(
                name,
                values[name].filter((imageUri) => imageUri !== uri)
            );
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
