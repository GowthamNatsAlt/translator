import "@/global.css";

import { Stack } from "expo-router";
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context";

export default function index() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <Stack 
            initialRouteName="index" 
        >
            <Stack.Screen 
                name="index" 
            />
            <Stack.Screen 
                name="profile" 
            />
        </Stack>
    </SafeAreaProvider>
  )
}