import { Stack } from 'expo-router';

const AccountNavigator = () => {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="account" />
            <Stack.Screen name="messages" />
            <Stack.Screen name="myListings" />
        </Stack>
    );
};

export default AccountNavigator;
