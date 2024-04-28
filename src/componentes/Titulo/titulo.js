import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Titulo(){
    return(
        <View >
        <Text style={styles.texto}>APP COMPUTADOR</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 25,
        color: '#2196F3'
    }
  });