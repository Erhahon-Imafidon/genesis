import { StyleSheet, TouchableOpacity } from 'react-native';
import { PickerItemProps } from '@/components/ui/PickerItem';
import Icons from '@/components/ui/Icons';
import AppText from '@/components/ui/AppText';

const CategoryPickerItem: React.FC<PickerItemProps> = ({ item, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icons
                backgroundColor={item.backgroundColor}
                name={item.name}
                size={60}
            />
            <AppText style={styles.label}>{item.label}</AppText>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: 'center',
        width: '33%',
    },

    label: {
        marginTop: 5,
        textAlign: 'center',
    },
});

export default CategoryPickerItem;
