import React, { useReducer } from 'react';
import Screen from '@/components/ui/Screen';
import { ScrollView } from 'react-native';
import {Card, Text,Button} from 'react-native-paper';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

export default function CategoriasScreen() {
    const [categoria, setCategoria]= useState<any[]>([]);
    const { categorias } = useLocalSearchParams();
    const styles = StyleSheet.create({
          container: {
            padding: 10,
          },
          title: {
            marginBottom: 20,
            textAlign: 'center',
          },
          card: {
          marginBottom: 15,
          padding: 10,
          
          },
          row: {
            flexDirection: 'row',
            alignItems: 'flex-start',
          },
          textContainer: {
            flex: 1,
            paddingRight: 12,
            justifyContent: "center"
          },
          imageLeft: {
            width: 100,
            height: 140,
            borderRadius: 8,
            backgroundColor: '#eee',
          },
          button: {
            marginTop: 10,
            alignSelf: 'flex-end',
          }
        });

    const router= useRouter();
        useEffect(()=>{
            
            let idGenero= categorias;
                fetch(`https://devsapihub.com/api-movies/genre/${idGenero}`)
                    .then(response => response.json())
                    .then(res => {
                        setCategoria(res); 
                    })
                    .catch(error => console.error("Error:", error));
                }
            )
                
   return(
      <Screen>
        <Stack.Screen options= {{title:"Peliculas"}}/>
        <ScrollView contentContainerStyle={styles.container}>
        {categoria.map((pelicula: any) => (
          <Card key={pelicula.id} style={styles.card}>
            
        <View style={styles.row}>
            <Card.Cover source={{ uri: pelicula.image_url}} style={styles.imageLeft}/>
        <View style={styles.textContainer}>
        <Card.Title 
          title={pelicula?.title} 
        />
          <Text variant="bodyMedium">{pelicula?.description}</Text>
          <Text variant="titleMedium" style={{ marginTop: 15 }}>
            Calificación: ⭐ {pelicula?.stars}
          </Text>
        </View>
        <Card.Actions>
            <Button onPress={()=>router.push(`/movies/${pelicula.id}`)}>Ver detalles</Button>
          </Card.Actions>
      </View>

      </Card>
    ))}
      </ScrollView>
      </Screen>
  );
}
