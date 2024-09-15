import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="imageviewer" />
        <Stack.Screen name="details" />
        <Stack.Screen name="messages" />
      </Stack>
    </SafeAreaProvider>
  );
};

export default RootLayout;
