import { Slot, Stack } from 'expo-router';

const HomeLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="index" />
            <Stack.Screen name="register" />
            <Stack.Screen name="login" />
        </Stack>
    );
};

export default HomeLayout;
