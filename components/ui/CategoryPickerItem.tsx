import { View, StyleSheet } from 'react-native';
import { PickerItemProps } from '@/components/ui/PickerItem';
import Icons from '@/components/ui/Icons';
import AppText from '@/components/ui/AppText';

const CategoryPickerItem: React.FC<PickerItemProps> = ({
    item,
    label,
    onPress,
}) => {
    return (
        <View style={styles.container}>
            <Icons
                backgroundColor={item.backgroundColor}
                name={item.name}
                size={60}
            />
            <AppText style={styles.label}>{label}</AppText>
        </View>
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
