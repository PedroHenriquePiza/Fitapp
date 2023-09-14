import React from "react";
import { Text } from "react-native";
import { View, TouchableOpacity, StyleSheet } from "react-native";

export default function ManterForma({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={{ color: "#FF69B4", fontSize: 35, fontWeight: "bold" }}>
          FitApp
        </Text>
      </View>

      <View style={styles.title}>
        <Text style={{ fontSize: 20 }}>Qual é seu objetivo principal?</Text>
      </View>

      <View>
        <TouchableOpacity
          style={styles.buttonSedent}
          onPress={() => navigation.navigate("ManterForma")}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>Perder peso</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonLevAtiv}
          onPress={() => navigation.navigate("ManterForma")}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>
            Aumento de músculos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonMuitAtiv}
          onPress={() => navigation.navigate("ManterForma")}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>Manter a forma</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  title: {
    color: "#000",
  },
  logo: {
    fontSize: 35,
    color: "#FF69B4",
    bottom: "27.5%",
    left: 130,
    fontWeight: "bold",
  },
  buttonSedent: {
    width: 300,
    height: 50,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF",
    fontSize: 25,
    top: 100,
    marginBottom: 40,
  },
  buttonLevAtiv: {
    width: 300,
    height: 50,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF",
    fontSize: 25,
    top: 100,
    marginBottom: 40,
  },
  buttonModAtiv: {
    width: 300,
    height: 50,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF",
    fontSize: 25,
    top: 100,
    marginBottom: 40,
  },
  buttonMuitAtiv: {
    width: 300,
    height: 50,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF",
    fontSize: 25,
    top: 100,
    marginBottom: 40,
  },
});
