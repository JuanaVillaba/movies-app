import React from 'react';
import Screen from '@/components/ui/Screen';
import { View } from 'react-native';
import {Card, Text} from 'react-native-paper';
import { useLocalSearchParams, Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

export default function DetallesMoviesScreen(){
    const [movie, setMovie]= useState<any>(null);
    const { movies } = useLocalSearchParams();
        const styles = StyleSheet.create({
          imagen: {
            width: 500,
            height: 700,
            borderRadius: 8,
            alignSelf: "center",
          }, 
        }
        )
    useEffect(()=>{
            let idPelicula= Number(movies);
            fetch(`https://devsapihub.com/api-movies/${idPelicula}`)
                .then(response => response.json())
                .then(res => {
                    setMovie(res); 
                })
                .catch(error => console.error("Error:", error));
            }
    )
    return(
    <Screen>
      <Stack.Screen options= {{title: movie?.title}}/>
      <Card style={{ margin: 10 }}>
        {/* Usamos los datos que guardamos en el estado 'movie' */}
        <Card.Cover source={{ uri: movie?.image_url }} resizeMode="cover" style={styles.imagen}/>
        <Card.Title 
          title={`Calificacion: ⭐ ${movie?.stars}`} 
          subtitle={`Genero: ${movie?.genre}`} 
        />
        <Card.Content>
          <Text variant="bodyMedium">{movie?.description}</Text>
          <Text variant="titleMedium" style={{ marginTop: 15 }}>
            Año: {movie?.year}
          </Text>
        </Card.Content>
      </Card>
    </Screen>
    )
}
