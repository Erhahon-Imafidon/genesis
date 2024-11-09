import AppButton from '@/components/ui/AppButton';
import { useFormikContext } from 'formik';

const SubmitButton = ({ title }: { title: string }) => {
    const { handleSubmit } = useFormikContext();

    return <AppButton title={title} onPress={handleSubmit} />;
};

export default SubmitButton;
