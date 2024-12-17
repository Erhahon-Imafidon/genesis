import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup';

import SubmitButton from '@/components/forms/SubmitButton';
import AppFormField from '@/components/forms/AppFormField';
import AppForm from '@/components/forms/AppForm';
import Colors from '@/constants/Colors';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    pwd: Yup.string().required().min(6).label('Password'),
});

const LoginScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../../assets/images/logo-red.png')}
                style={styles.logo}
            />
            <AppForm
                initialValues={{ email: '', pwd: '' }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder={'Email'}
                    keyboardType={'email-address'}
                    textContentType={'emailAddress'}
                    inputName={'email'}
                />
                <AppFormField
                    name="lock"
                    placeholder="password"
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    secureTextEntry
                    textContentType={'password'}
                    inputName={'pwd'}
                />
                <SubmitButton title="Login" />
            </AppForm>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },

    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    },

    pwdInfo: {
        fontSize: 12,
        color: Colors.mediumGray,
        marginBottom: 10,
    },
});

export default LoginScreen;
