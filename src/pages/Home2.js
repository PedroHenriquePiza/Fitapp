import React, { useRef, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Text } from "react-native";
import { ScrollView } from "react-native";

export default function Home2({ navigation }) {
  return (
    <ScrollView style={{ width: "100%", height: 1500 }}>
      <View style={styles.container2}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: 1780,
            bottom: "30%",
          }}
        >
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("TrocarUsu")}>
              <Image
                source={require("../../assets/Icone.png")}
                style={styles.Icone2}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.logo}>
            <Text
              style={{ color: "#FF69B4", fontSize: 35, fontWeight: "bold" }}
            >
              FitApp
            </Text>
          </View>
          <View style={styles.title}>
            <Text style={{ fontSize: 20 }}>
              O que você deseja treinar hoje ?
            </Text>
          </View>

          <View style={styles.container}>
            <Image
              source={require("../../assets/PeitBrac.png")}
              style={styles.Img1}
            />
            <Image
              source={require("../../assets/Abdômen.png")}
              style={styles.Img2}
            />
            <Image
              source={require("../../assets/OmbroCosta.png")}
              style={styles.Img3}
            />
            <Image
              source={require("../../assets/Perna.png")}
              style={styles.Img4}
            />
            <Image
              source={require("../../assets/PeitBrac.png")}
              style={styles.Img5}
            />
            <Image
              source={require("../../assets/Abdômen.png")}
              style={styles.Img6}
            />
            <Image
              source={require("../../assets/OmbroCosta.png")}
              style={styles.Img7}
            />
            <Image
              source={require("../../assets/Perna.png")}
              style={styles.Img8}
            />
            <Image
              source={require("../../assets/PeitBrac.png")}
              style={styles.Img9}
            />
            <Image
              source={require("../../assets/Abdômen.png")}
              style={styles.Img10}
            />
            <Image
              source={require("../../assets/OmbroCosta.png")}
              style={styles.Img11}
            />
            <Image
              source={require("../../assets/Perna.png")}
              style={styles.Img12}
            />
          </View>

          <View>
            <TouchableOpacity
              style={styles.buttonPeitBraIni}
              onPress={() => navigation.navigate("PeitoBraco")}
            >
              <Text>PEITO E BRAÇO INICIANTE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonAbdómenIni}
              onPress={() => navigation.navigate("Abdomen")}
            >
              <Text>ABDÔMEN INICIANTE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonOmbrCostIni}
              onPress={() => navigation.navigate("OmbroCostas")}
            >
              <Text>OMBRO E COSTAS INICIANTE </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonPernaIni}
              onPress={() => navigation.navigate("Perna")}
            >
              <Text style={{ alignItems: "center" }}>PERNA INICIANTE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonPeitBraInter}
              onPress={() => navigation.navigate("PeitoBracoInter")}
            >
              <Text>PEITO E BRAÇO INTERMEDIÁRIO</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonAbdómenInter}
              onPress={() => navigation.navigate("AbdomenInter")}
            >
              <Text>ABDÔMEN INTERMEDIÁRIO</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonOmbrCostInter}
              onPress={() => navigation.navigate("OmbroCostasInter")}
            >
              <Text>OMBRO E COSTAS INTERMEDIÁRIO </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonPernaInter}
              onPress={() => navigation.navigate("PernaIntermediario")}
            >
              <Text style={{ alignItems: "center" }}>PERNA INTERMEDIÁRIO</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonPeitBraAvan}
              onPress={() => navigation.navigate("PeitoBracoAvan")}
            >
              <Text>PEITO E BRAÇO AVANÇADO</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonAbdómenAvan}
              onPress={() => navigation.navigate("AbdomenAvan")}
            >
              <Text>ABDÔMEN AVANÇADO</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonOmbrCostAvan}
              onPress={() => navigation.navigate("OmbroCostasAvan")}
            >
              <Text>OMBRO E COSTAS AVANÇADO </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonPernaAvan}
              onPress={() => navigation.navigate("PernaAvancado")}
            >
              <Text style={{ alignItems: "center" }}>PERNA AVANÇADO</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 35,
    color: "#fff",
    fontWeight: "bold",
    left: 135,
    top: '0.2%',
  },
  title: {
    color: "#000",
    alignItems: "center",
    top: '2%',
  },
  container: {
    width: "0%",
    height: 50,
    alignItems: "center",
    left: 100,
    fontSize: 20,
    backgroundColor: "#fff",
  },
  buttonPeitBraIni: {
    padding: 10,
    top: 65,
    left: "10%",
    flexDirection: "row",
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#FFF",
    width: "90%",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonPeitBraInter: {
    padding: 10,
    top: 385,
    left: "10%",
    flexDirection: "row",
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#FFF",
    width: "90%",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonPeitBraAvan: {
    padding: 10,
    top: 705,
    left: "10%",
    flexDirection: "row",
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#FFF",
    width: "90%",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonAbdómenIni: {
    padding: 10,
    top: 145,
    left: "10%",
    flexDirection: "row",
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#FFF",
    width: "90%",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonAbdómenInter: {
    padding: 10,
    top: 465,
    left: "10%",
    flexDirection: "row",
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#FFF",
    width: "100%",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonAbdómenAvan: {
    padding: 10,
    top: 785,
    left: "10%",
    flexDirection: "row",
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#FFF",
    width: "90%",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonOmbrCostIni: {
    padding: 10,
    top: 225,
    left: "10%",
    flexDirection: "row",
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#FFF",
    width: "90%",
    height: 50,
    alignItems: "center",
  },
  buttonOmbrCostInter: {
    padding: 10,
    top: 540,
    left: "10%",
    flexDirection: "row",
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#FFF",
    width: "90%",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonOmbrCostAvan: {
    padding: 10,
    top: 865,
    left: "10%",
    flexDirection: "row",
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#FFF",
    width: "90%",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonPernaIni: {
    padding: 10,
    top: 305,
    left: "10%",
    flexDirection: "row",
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#FFF",
    width: "90%",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonPernaInter: {
    padding: 10,
    top: 625,
    left: "10%",
    flexDirection: "row",
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#FFF",
    width: "90%",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonPernaAvan: {
    padding: 10,
    top: 945,
    left: "10%",
    flexDirection: "row",
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#FFF",
    width: "90%",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
  },
  Img1: {
    width: 100,
    height: 100,
    right: 250,
    top: "150%",
    margin: 15,
    borderRadius: 200 / 2,
    borderWidth: 5,
    borderColor: "#A61F77",
  },
  Img2: {
    width: 100,
    height: 100,
    right: 250,
    top: "150%",
    margin: 15,
    borderRadius: 200 / 2,
    borderWidth: 5,
    borderColor: "#A61F77",
  },
  Img3: {
    width: 100,
    height: 100,
    right: 250,
    top: "150%",
    margin: 15,
    borderRadius: 200 / 2,
    borderWidth: 5,
    borderColor: "#A61F77",
  },
  Img4: {
    width: 100,
    height: 100,
    right: 250,
    top: "150%",
    margin: 15,
    borderRadius: 200 / 2,
    borderWidth: 5,
    borderColor: "#A61F77",
  },
  container2: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  Icone2: {
    width: 60,
    height: 60,
    right: 155,
    top: "80%",
    margin: 15,
  },
  Img5: {
    width: 100,
    height: 100,
    right: 250,
    top: "150%",
    margin: 15,
    borderRadius: 200 / 2,
    borderWidth: 5,
    borderColor: "#A61F77",
  },
  Img6: {
    width: 100,
    height: 100,
    right: 250,
    top: "150%",
    margin: 15,
    borderRadius: 200 / 2,
    borderWidth: 5,
    borderColor: "#A61F77",
  },
  Img7: {
    width: 100,
    height: 100,
    right: 250,
    top: "150%",
    margin: 15,
    borderRadius: 200 / 2,
    borderWidth: 5,
    borderColor: "#A61F77",
  },
  Img8: {
    width: 100,
    height: 100,
    right: 250,
    top: "150%",
    margin: 15,
    borderRadius: 200 / 2,
    borderWidth: 5,
    borderColor: "#A61F77",
  },
  Img9: {
    width: 100,
    height: 100,
    right: 250,
    top: "150%",
    margin: 15,
    borderRadius: 200 / 2,
    borderWidth: 5,
    borderColor: "#A61F77",
  },
  Img10: {
    width: 100,
    height: 100,
    right: 250,
    top: "150%",
    margin: 15,
    borderRadius: 200 / 2,
    borderWidth: 5,
    borderColor: "#A61F77",
  },
  Img11: {
    width: 100,
    height: 100,
    right: 250,
    top: "150%",
    margin: 15,
    borderRadius: 200 / 2,
    borderWidth: 5,
    borderColor: "#A61F77",
  },
  Img12: {
    width: 100,
    height: 100,
    right: 250,
    top: "150%",
    margin: 15,
    borderRadius: 200 / 2,
    borderWidth: 5,
    borderColor: "#A61F77",
  },
});
