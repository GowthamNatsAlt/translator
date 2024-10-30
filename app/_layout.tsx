import "@/global.css";
import Provider from "@/utils/Provider";

import { Stack } from "expo-router";
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context";

export default function index() {
  return (
    <Provider>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <Stack 
                initialRouteName="index" 
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen 
                    name="index" 
                />
                <Stack.Screen 
                    name="translate" 
                />
                <Stack.Screen 
                    name="[mode]"
                />
            </Stack>
        </SafeAreaProvider>
    </Provider>
  )
}