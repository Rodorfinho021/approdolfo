  import React, { useState } from "react";
  import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
  import { useNavigation } from "@react-navigation/native";
  import { StackNavigationProp } from "@react-navigation/stack";
  import styles from "./styles";
  import { RootStackParamList } from "../../../navigation.js"; // ajuste o caminho certo


  // armazenamento em memória (simulação de AsyncStorage)
  const storage: Record<string, string | null> = {};

  const setItem = async (key: string, value: string) => {
    storage[key] = value;
  };

  const getItem = async (key: string): Promise<string | null> => {
    return storage[key] ?? null;
  };

  const removeItem = async (key: string) => {
    delete storage[key];
  };

  export default function Login() {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleLogin = async () => {
      if (!email.trim() || !senha.trim()) {
        Alert.alert("Erro", "Preencha todos os campos.");
        return;
      }

      try {
        const response = await fetch(
          "https://apidoubts.dev.vilhena.ifro.edu.br/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, senha }),
          }
        );

        const data: { token?: string; user?: any; mensagem?: string } =
          await response.json();

        if (response.ok && data.token && data.user) {
          await setItem("token", data.token);
          await setItem("user", JSON.stringify(data.user));

          Alert.alert("Sucesso", "Login bem-sucedido!");
          navigation.navigate("home");
        } else {
          Alert.alert("Erro", data.mensagem || "Email ou senha inválidos.");
        }
      } catch (err) {
        console.error("Erro no login:", err);
        Alert.alert("Erro", "Não foi possível conectar ao servidor.");
      }
    };

    return (
      <View style={styles.loginContainer}>
        <Text style={styles.h2}>Login</Text>

        <TextInput
          style={styles.mensagemInput}
          placeholder="Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.mensagemInput}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={styles.botaoEnviar} onPress={handleLogin}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Entrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
