import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import * as Location from 'expo-location';

import { categories } from '@/lib/data';
import SubmitButton from '@/components/forms/SubmitButton';
import AppFormPicker from '@/components/forms/AppFormPicker';
import AppForm from '@/components/forms/AppForm';
import AppFormField from '@/components/forms/AppFormField';
import CategoryPickerItem from '@/components/ui/CategoryPickerItem';
import ImageFormPicker from '@/components/forms/ImageFormPicker';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    category: Yup.object().required().nullable().label('Category'),
    description: Yup.string().label('Description'),
    images: Yup.array().min(1, 'Please select at least one image.'),
});

const ListEditScreen = () => {
    const [location, setLocation] = useState<object | null>(null);

    const getLocation = async () => {
        const { granted } = await Location.requestForegroundPermissionsAsync();
        if (!granted) return;

        let result = await Location.getLastKnownPositionAsync();
        if (result?.coords) {
            const { latitude, longitude } = result.coords;
            setLocation({ latitude, longitude });
        }
    };

    useEffect(() => {
        getLocation();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <AppForm
                initialValues={{
                    title: '',
                    price: '',
                    description: '',
                    category: null,
                    images: [],
                }}
                onSubmit={(values) =>
                    console.log(values, 'location:', location)
                }
                validationSchema={validationSchema}
            >
                <ImageFormPicker name="images" />

                <AppFormField
                    placeholder="Title"
                    inputName={'title'}
                    maxLength={255}
                />

                <AppFormField
                    inputName={'price'}
                    placeholder="Price"
                    keyboardType="numeric"
                    maxLength={8}
                    width="50%"
                />

                <AppFormPicker
                    items={categories}
                    inputName="category"
                    placeholder="Category"
                    width="50%"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                />

                <AppFormField
                    inputName={'description'}
                    placeholder="Description"
                    maxLength={255}
                    multiline
                    numberOfLines={2}
                />

                <SubmitButton title="Post" />
            </AppForm>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
    },
});

export default ListEditScreen;
