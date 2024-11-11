import { DimensionValue } from 'react-native';
import AppPicker, { Category } from '@/components/ui/AppPicker';
import ErrorMessage from '@/components/forms/ErrorMessage';
import { FormikErrors, useFormikContext } from 'formik';
import React from 'react';

type AppFormPickerProps = {
    items: any[];
    inputName: string;
    placeholder: string;
    numberOfColumns?: number;
    width?: DimensionValue;
    PickerItemComponent?: React.FC<any>;
};

// Type guard to check if an object is of type Category
const isCategory = (item: any): item is Category => {
    return (
        item && typeof item === 'object' && 'label' in item && 'value' in item
    );
};

const AppFormPicker = ({
    items,
    inputName,
    placeholder,
    width,
    PickerItemComponent,
    numberOfColumns,
}: AppFormPickerProps) => {
    const { errors, setFieldValue, setFieldTouched, touched, values } =
        useFormikContext<FormikErrors<any>>();

    const error =
        typeof errors[inputName] === 'string' ? errors[inputName] : '';

    // const visible = typeof touched[inputName] === 'boolean' ? touched[inputName] : false;
    const visible = !!touched[inputName]; // Simplified version of the code above

    const selectedItem = isCategory(values[inputName])
        ? values[inputName]
        : undefined;

    const handleSelectItem = async (item: any) => {
        await setFieldValue(inputName, item);
        await setFieldTouched(inputName, true, true);
    };

    return (
        <>
            <AppPicker
                items={items}
                placeholder={placeholder}
                onSelectItem={handleSelectItem}
                selectedItem={
                    isCategory(selectedItem) ? selectedItem : undefined
                }
                numberOfColumns={numberOfColumns}
                width={width}
                PickerItemComponent={PickerItemComponent}
            />
            <ErrorMessage error={error || ''} visible={visible} />
        </>
    );
};

export default AppFormPicker;
