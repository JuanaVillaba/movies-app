import React from 'react';
import Screen from '@/components/ui/Screen';
import BrandHeader from '@/components/ui/BrandHeader';
import { useRouter } from 'expo-router';
import { Button } from 'react-native';

export default function Home() {
  const router = useRouter();
  return (
    <Screen>
      <Button title="Movies" onPress={()=>router.push("/movies/index")}/>
      <Button title="Categorias" onPress={()=>router.push("/categorias/index")}/>
      </Screen>
  );
}
