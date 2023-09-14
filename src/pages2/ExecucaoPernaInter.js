import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import PernaExecItem from "../Componente2/PernaExecItem";

export default function AbdominalExec({ navigation }) {
  const [exercicio, setExercicio] = useState([]);
  const [indiceExercicio, setIndiceExercicio] = useState(0);
  const [exerciciosVisitados, setExerciciosVisitados] = useState([]);

  useEffect(() => {
    fetch("https://fitapp-tcc.azurewebsites.net/api/PNintermediario", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => setExercicio(json))
      .catch((err) => {
        console.log(err);
        alert("Erro ao buscar exercicios");
      });
  }, []);

  const exibirProximoExercicio = () => {
    if (indiceExercicio < exercicio.length - 1) {
      setExerciciosVisitados([...exerciciosVisitados, indiceExercicio]);
      setIndiceExercicio(indiceExercicio + 1);
    } else {
      navigation.navigate("Home2");
    }
  };

  const exibirExercicioAnterior = () => {
    if (exerciciosVisitados.length > 0) {
      const ultimoIndiceVisitado = exerciciosVisitados[exerciciosVisitados.length - 1];
      setExerciciosVisitados(exerciciosVisitados.slice(0, -1));
      setIndiceExercicio(ultimoIndiceVisitado);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home2")}>
          <Image style={styles.Img} source={require("../../assets/Seta.png")} />
        </TouchableOpacity>
        <Text style={styles.textoFitApp}>FitApp</Text>
      </View>

      

      <TouchableOpacity style={styles.botaoproximo} onPress={exibirProximoExercicio}>
        <Text style={styles.proximo}>Proximo</Text>
      </TouchableOpacity>

      {exercicio[indiceExercicio] && (
        <PernaExecItem PN={exercicio[indiceExercicio]} />
      )}

      <TouchableOpacity style={styles.botaovoltar} onPress={exibirExercicioAnterior}>
        <Text style={styles.anterior}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 5,
    marginTop: 20,
  },
  botaovoltar: {
    width: 175,
    height: 50,
    backgroundColor: "#40E0D0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    color: "#000",
    fontSize: 25,
    bottom:103,
    right: 220,
    position: "absolute",
  },

  
  botaoproximo: {
    width: 175,
    height: 50,
    backgroundColor: "#40E0D0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    color: "#000",
    fontSize: 25,
    top:'75%',
    left: 100,
    
  },
  

  Img: {
    width: 50,
    height: 50,
  },

  proximo: {
    fontWeight: "bold",
    fontSize: 20,
  },

  anterior: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#000",
  },

  textoFitApp: {
    color: "#FF69B4",
    fontSize: 35,
    fontWeight: "bold",
  },
});




