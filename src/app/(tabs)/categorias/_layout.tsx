import React from 'react';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
        <Stack.Screen name='index' options={{ title:"Categorias",headerShown:true}}/>
        <Stack.Screen name='/categorias/[id]' options={{ title:"Categorias" ,headerShown:false}}/>
      
    </Stack>
  );
}
