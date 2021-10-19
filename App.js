import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

import Movie from "./src/Movie/Movie";

import api from "./src/services/api";

export default function App() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function LoadMovie() {
      const res = await api.get('r-api/?api=filmes');
      setFilmes(res.data);
    }
    LoadMovie();
  }, []);

  return (
    <View>
      <SafeAreaView />
      <FlatList
        data={filmes}
        keyExtractor={  item => String(item.id)}
        renderItem={({ item }) => <Movie data={item}
         />}
      />
      
      <StatusBar style="auto" />
    </View>
  );
}