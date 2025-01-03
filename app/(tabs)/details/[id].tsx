import { useState, useEffect } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import AppText from '@/components/ui/AppText';
import Colors from '@/constants/Colors';
import AppTextInput from '@/components/forms/AppTextInput';
import AppPicker from '@/components/ui/AppPicker';
import { Category } from '@/components/ui/AppPicker';
import { listings } from '@/lib/data';
import { MessageUser } from '@/lib/definitions';

const categories = [
    { label: 'Furniture', value: 1 },
    { label: 'Clothing', value: 2 },
    { label: 'Camera', value: 3 },
];

const ListingDetailsScreen = () => {
    const [category, setCategory] = useState<Category | undefined>(
        categories[0]
    );
    const [listing, setListing] = useState<MessageUser | null>(null);
    const { id } = useLocalSearchParams<{ id: string }>();

    useEffect(() => {
        const selectedListing =
            listings.find((item) => item.id?.toString() === id) || null;
        setListing(selectedListing);
    }, [id]);

    if (!listing) {
        return <AppText>Loading...</AppText>;
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={listing.image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>#{listing.price}</AppText>
            </View>

            <AppPicker
                selectedItem={category}
                onSelectItem={(item) => setCategory(item)}
                items={categories}
                name="apps"
                placeholder="Category"
                size={24}
                color={Colors.dark}
            />

            <AppTextInput
                name="email"
                placeholder="Email Seller"
                size={24}
                color={Colors.primary}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    image: {
        width: '100%',
        height: 300,
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
    },
    price: {
        color: Colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
    },
});

export default ListingDetailsScreen;
