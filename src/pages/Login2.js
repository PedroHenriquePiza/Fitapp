import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import axios from "axios";

export default function Logar({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function FazerLogin() {
    try {
      const formData = new URLSearchParams();
      formData.append("email", email);
      formData.append("senha", senha);

      const response = await axios.post(
        "https://fitapp-tcc.azurewebsites.net/api/auth/login",
        formData.toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (response.status == 200) {
        navigation.navigate("Home2");
      } else {
        Alert.alert("Erro", response.data.message);
      }
    } catch (error) {
      console.log("Erro ao fazer login:", error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Personal Trainer Doméstico</Text>
      </View>

      <Image source={require("../../assets/logo.png")} style={styles.logo} />

      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="E-mail"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input2}
        onChangeText={setSenha}
        value={senha}
        placeholder="Senha"
        secureTextEntry={true}
      />

      <View>
        <TouchableOpacity
          style={styles.text}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={{ color: "#fff" }}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.buttonLogin} onPress={FazerLogin}>
          <Text>ENTRAR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Mais}>
        <TouchableOpacity></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },

  title: {
    fontSize: 25,
    color: "#FFF",
    bottom: 170,
  },
  logo: {
    width: 225,
    height: 225,
    resizeMode: "stretch",
    bottom: 65,
  },
  input: {
    height: 45,
    width: 300,
    margin: 35,
    borderWidth: 1,
    borderColor: "#FFF",
    color: "#000",
    fontSize: 20,
    backgroundColor: "#FFF",
    borderRadius: 3,
  },
  input2: {
    height: 45,
    width: 300,
    margin: 0,
    borderWidth: 1,
    borderColor: "#FFF",
    color: "#000",
    fontSize: 20,
    backgroundColor: "#FFF",
    borderRadius: 2,
  },
  buttonLogin: {
    width: 250,
    height: 50,
    backgroundColor: "#40E0D0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    color: "#000",
    fontSize: 25,
    top: 50,
  },
  text: {
    color: "#FFF",
    top: "5%",
  },
});
