import React from 'react';
import Screen from '@/components/ui/Screen';
import { View } from 'react-native';
import {Text, Button} from 'react-native';
import { useRouter, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
export default function CategoriasScreen(){
    const styles = StyleSheet.create({
        espacio:{
          paddingBottom: 20
        }
        
        
      })
    const router = useRouter();
      return (
        <Screen>
            <Stack.Screen options= {{title:"Categorias"}}/>
            <View style={styles.espacio}>
            <Button title="Accion" onPress={()=>router.push("/categorias/Action")}/>
            </View>
            <View style={styles.espacio}>
            <Button title="Aventura" onPress={()=>router.push("/categorias/Adventure")}/>
            </View>
            <View style={styles.espacio}>
            <Button title="Comedia" onPress={()=>router.push("/categorias/Comedy")}/>
            </View>
            <Button title="Fantasia" onPress={()=>router.push("/categorias/Fantasy")}/>
        </Screen>
    )
}