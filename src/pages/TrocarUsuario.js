import { BottomSheet } from "@rneui/base";
import React from "react";

import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function TrocarUsu({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.Icone}>
        <TouchableOpacity onPress={() => navigation.navigate("Avaliacao")}>
          <Image
            source={require("../../assets/IconeAvali.png")}
            style={styles.Icone}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Home2")}>
          <Image style={styles.Img} source={require("../../assets/Seta.png")} />
        </TouchableOpacity>
      </View>

      <View style={styles.logo}>
        <Text style={{ color: "#FF69B4", fontSize: 35, fontWeight: "bold" }}>
          FitApp
        </Text>
      </View>

      <View style={styles.title}>
        <Text style={{ fontSize: 30, color: "#000" }}>Usuário</Text>
      </View>

      <View>
        <Image
          source={require("../../assets/Icone.png")}
          style={styles.Icone2}
        />
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Image
            source={require("../../assets/IconeMais.png")}
            style={styles.IconeMais}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 35,
    fontWeight: "bold",
    left: "33%",
    bottom: "38%",
  },
  title: {
    alignItems: "center",
    bottom: "30%",
  },
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  IconeMais: {
    alignItems: "center",
    top: "380%",
    width: 255,  // Defina a largura desejada para o ícone
    height: 55, 
    resizeMode: 'contain', 
  },
  Icone: {
    width: 25,
    height: 30,
    right: "29%",
    bottom: "27%",
  },
  Icone2: {
    width: 60,
    height: 60,
    right: "39%",
    bottom: "300%",
  },

  Img: {
    width: 50,
    height: 50,
    bottom: "580%",
    right: "350%",
  },
});
