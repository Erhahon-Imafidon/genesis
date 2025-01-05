import { router, Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import ListingButton from '@/components/navigation/ListingButton';

const TabBarLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
                tabBarStyle: {
                    paddingBottom: 10,
                    height: 70,
                    borderColor: 'white',
                },
            }}
        >
            <Tabs.Screen
                name="listings"
                options={{
                    title: 'Feed',
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons
                            name="home"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="list-edit"
                options={{
                    title: 'ListEdit',
                    tabBarButton: ({ onPress }) => (
                        <ListingButton
                            onPress={() => router.push('/list-edit')}
                        />
                    ),
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons
                            name="plus-circle"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="(accountNavigator)"
                options={{
                    title: 'Account',
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons
                            name="account"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="details/[id]"
                options={{
                    title: 'Details',
                    href: null,
                }}
            />
        </Tabs>
    );
};

export default TabBarLayout;
