import { StyleSheet } from 'react-native';
import AppText from '@/components/ui/AppText';

type ErrorProps = {
    error: string;
    visible?: boolean;
};

const ErrorMessage: React.FC<ErrorProps> = ({ error, visible }) => {
    if (!error || !visible) return null;

    return <AppText style={styles.error}>{error}</AppText>;
};

const styles = StyleSheet.create({
    error: {
        color: 'red',
        marginBottom: 10,
    },
});

export default ErrorMessage;
