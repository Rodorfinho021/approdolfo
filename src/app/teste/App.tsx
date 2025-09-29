import React, { use, useState } from "react";
import { SafeAreaView, Text, StyleSheet, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons"; 
import styles  from "./styles";

export default function App() {
    const[caixinha,setcaixinha] = useState("")
        
    return (
        <View>
            <View style={styles.titlle}><Text style={styles.titlleText}>Lista de Compras Prova</Text></View>
            <View style={styles.container_search}>
            <View style={styles.search}>
                <TextInput style={styles.inputText} placeholder="Teste" onChangeText={(e) => setcaixinha(e)}></TextInput>
            </View>
                <TouchableOpacity style={styles.buttonclick} ><Text style={styles.buttontext}>Teste</Text></TouchableOpacity>
            </View>
            

            <View  style={styles.products}></View>

        </View>
    )
    
}