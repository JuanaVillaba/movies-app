import React from 'react';
import Screen from '@/components/ui/Screen';
import BrandHeader from '@/components/ui/BrandHeader';
import { useRouter } from 'expo-router';
import { Button } from 'react-native';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
export default function Home() {
  const styles = StyleSheet.create({
    espacio:{
      paddingBottom: 20
    }
  })
  const router = useRouter();
  return (
    <Screen>
      <View style={styles.espacio}>
      <Button title="Movies" onPress={()=>router.push("/movies")} />
      </View>
      <Button title="Categorias" onPress={()=>router.push("/categorias")}/>
      
      </Screen>
  );
}
