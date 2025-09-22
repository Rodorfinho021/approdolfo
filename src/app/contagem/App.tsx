import React, { use, useState } from "react";
import { SafeAreaView, Text, StyleSheet, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons"; 




export default function App() {
    const [click, setClick] = useState(1);
    const [click10, setClick10] = useState(10);
    const [click100, setClick100] = useState(100);

    function addClick() {
        let a = click + 1;
        setClick(a);
        setClick10(a*10)
        setClick100(a*100)
        console.log(click);
    }


    return (
  <View style={styles.container}>
      <View style={styles.tittle}>
        <Text style={styles.text}>Contagem </Text>
      </View>

    <View style={styles.container_search}>   

      

      <TouchableOpacity style={styles.button} onPress={addClick} >
      <AntDesign name="plus" size={24} color="white"   />
      </TouchableOpacity>
       
 
    </View>

    <ScrollView style={styles.products}>
       <Text>1: 1x{click} = {click} </Text>
       <Text>10: 10 x {click} = {click10}</Text>
       <Text>100: 10 x {click} = {click100}</Text>
      </ScrollView>



  </View>

  
  );
}

