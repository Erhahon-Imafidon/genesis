import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@react-navigation/native';
import NavigationTheme from '@/components/navigation/navigationTheme';

const RootLayout = () => {
    return (
        <SafeAreaProvider>
            <ThemeProvider value={NavigationTheme}>
                <Stack
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="(welcome)" />
                    <Stack.Screen name="(tabs)" />
                    <Stack.Screen name="+not-found" />
                </Stack>
            </ThemeProvider>
        </SafeAreaProvider>
    );
};

export default RootLayout;
