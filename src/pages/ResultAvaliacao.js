import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import TabelaImc from "../Componente/TabelaImc";

export default function ResultAvaliacao({ navigation, route }) {

  const { imc } = route.params;
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={{ top: 25 }}
          onPress={() => navigation.navigate("Home2")}
        >
          <Image style={styles.Img} source={require("../../assets/Seta.png")} />
        </TouchableOpacity>
      </View>

      <View style={styles.logo}>
        <Text style={{ color: "#FF69B4", fontSize: 35, fontWeight: "bold" }}>
          FitApp
        </Text>
      </View>

      <View style={styles.title}>
        <Text style={{ fontSize: 35, color: "#000", alignItems: "center" }}>
          Avaliação
        </Text>
      </View>

      <View style={{color: '#000', top: '5%'}}>
        <Text style={{ fontSize: 20, color: "#000", left: 10, margim: 30}}>
      Seu IMC é:  { imc.toFixed(2) }
        </Text>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center", top: '10%' }}>
        {/* <Image source={require('../../assets/imc.png')} style={{height: '65%', width: '97%'}} /> */}
        <TabelaImc></TabelaImc>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 35,
    fontWeight: "bold",
    left: 255,
    fontWeight: "bold",
    margin: 20,
    bottom: '4.5%',
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFF",
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
  },
  Img: {
    width: 50,
    height: 50,
    top: '4%'
  },
});
