import React from 'react';
import { Tabs } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Tabs screenOptions={{tabBarActiveTintColor:"pink",headerShown:false}}>
        <Tabs.Screen name="index" options={{ title: 'Home' ,headerShown:true}} ></Tabs.Screen>
        <Tabs.Screen name="movies" options={{ title: 'Movies' }} ></Tabs.Screen>
        <Tabs.Screen name="categorias" options={{ title: 'Categorias' }} ></Tabs.Screen>
      </Tabs>
    </SafeAreaProvider>
  );
}