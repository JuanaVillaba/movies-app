import React from 'react';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
        <Stack.Screen name='index' options={{ title:"Peliculas" ,headerShown:true}}/>
        <Stack.Screen name='[movies]' options={{ title:"Movies" ,headerShown:false}}/>
    </Stack>
  );
}
