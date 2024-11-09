import React from 'react';
import { useFormikContext, FormikErrors } from 'formik';

import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';

interface AppFormFieldProps {
    inputName: string;
    [key: string]: any;
}

function AppFormField({ inputName, ...otherProps }: AppFormFieldProps) {
    const { setFieldTouched, handleChange, errors, touched } =
        useFormikContext<FormikErrors<any>>();

    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(inputName)}
                onChangeText={handleChange(inputName)}
                {...otherProps}
            />
            <ErrorMessage
                error={errors[inputName] || ''}
                visible={touched[inputName]}
            />
        </>
    );
}

export default AppFormField;
