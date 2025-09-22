import React, { use, useState } from "react";
import { SafeAreaView, Text, StyleSheet, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons"; 




export default function App() {

  const [itens, setItens] = useState<string[]>([]);
  const [caixinha, setCaixinha] = useState("");

  function addPala() {
    if (caixinha.trim().length > 0) {
        setItens([...itens, caixinha] );
      setCaixinha('');

    }

  }

  function PalaDell(index: number) {
    const novaLista = [...itens];
    novaLista.splice(index,1);
    setItens(novaLista);

  }

    return (
  <View style={styles.container}>
      <View style={styles.tittle}>
        <Text style={styles.text}>Lista de Compras </Text>
      </View>

    <View style={styles.container_search}>   
      <TextInput
        style={styles.input}
        placeholder="Ex: Maria"
        placeholderTextColor={'#fff'}
        onChangeText={e => setCaixinha(e)}  
      />
      

      <TouchableOpacity style={styles.button} onPress={addPala}>
      <AntDesign name="plus" size={24} color="white"   />
      </TouchableOpacity>
       
 
    </View>


    <View style={styles.products}>
        {itens.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
          <Text style={styles.itemText2}>- {item}</Text>
          <TouchableOpacity style={styles.buttonDel} onPress={() => PalaDell(index)}>
            <AntDesign name="minus" size={20} color="white" />
          </TouchableOpacity>
        </View>
        
        ))}
      </View>


  </View>

  
  );
}

