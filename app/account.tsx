import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, FlatList } from 'react-native';
import ItemListTwo from '@/components/lists/ItemListTwo';
import ListItem from '@/components/lists/ListItem';
import Colors from '@/constants/Colors';
import Icons, { IconProps } from '@/components/ui/Icons';
import Separator from '@/components/lists/Separators';

interface IMenuProps {
    title: string;
    icon: IconProps;
}

const menuItems: IMenuProps[] = [
    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: Colors.primary,
        },
    },
    {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: Colors.secondary,
        },
    },
];

const AccountScreen = () => {
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                <ItemListTwo
                    title="Erhahon Imafidon"
                    subTitle="mafiosco4@gmail.com"
                    image={require('../assets/images/imafidon.jpeg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(item) => item.title}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponent={() => (
                                <Icons
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            )}
                        />
                    )}
                    ItemSeparatorComponent={Separator}
                />
                <View style={styles.container}>
                    <ItemListTwo
                        title="Log Out"
                        IconComponent={() => (
                            <Icons name="logout" backgroundColor="#ffe66d" />
                        )}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: Colors.lightGrey,
        flex: 1,
    },

    container: {
        marginVertical: 10,
    },
});

export default AccountScreen;
