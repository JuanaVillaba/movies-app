import React from 'react';
import Screen from '@/components/ui/Screen';
import {Card, Text, Button} from 'react-native-paper';
import { ScrollView, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import BrandHeader from '@/components/ui/BrandHeader';
import { View } from 'react-native';

interface cardMovies{
        id: number;
        title: string;
        description: string;
        year: number;
        image_url: string;
        genre: string;
        stars: number;
};

export default function MoviesScreen(){
    const [movies, setMovies] = useState<cardMovies[]>([]);
    let router=useRouter();
    
    useEffect(() => {
        fetch('https://devsapihub.com/api-movies/limit/3')
            .then(response => response.json())
            .then(res => {setMovies(res); 
      })
      .catch(error => console.error("Error:", error));
  }, []);
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
    
    return(
    <Screen>
      
        <ScrollView contentContainerStyle={styles.container}>
        <Text variant="headlineMedium" style={styles.title}>Películas Populares</Text>
        {movies.map((pelicula) => (
        <Card key={pelicula.id} style={styles.card}>
          <View style={styles.row}>
          <Card.Cover source={{ uri: pelicula.image_url}} style={styles.imageLeft}/>
          <View style={styles.textContainer}>
          
          <Card.Title title={pelicula.title} subtitle={"Año " + pelicula.year} />
          <Card.Content>
            <Text variant="bodyMedium">{pelicula.description}</Text>
          </Card.Content>
          <Card.Actions>
          <Button onPress={()=>router.push(`/movies/${pelicula.id}`)}>Ver detalles</Button>
          </Card.Actions>
          </View>
          </View>
        </Card>
        ))}
      </ScrollView>
    </Screen>
    );
}