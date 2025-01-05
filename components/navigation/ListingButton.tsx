import { View, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import colors from '@/constants/Colors';

const ListingButton = ({ onPress }: { onPress: () => void }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name="plus-circle"
                    size={40}
                    color={colors.white}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderWidth: 10,
        width: 80,
        height: 80,
        borderRadius: 40,
        bottom: 20,
    },
});

export default ListingButton;
