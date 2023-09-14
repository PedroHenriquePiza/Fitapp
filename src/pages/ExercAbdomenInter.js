import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import AbdominalInter from "../Componente/AbdomenInter";
import Loading from "../Componente/Loading/Loading";

export default function AbdomenInter({ navigation }) {

    const [exercicio, setExercicio] = useState([]);

       //carregar
       const [isloading, setloading] = useState(true);


    useEffect(() => {
        fetch('https://fitapp-tcc.azurewebsites.net/api/ABSIntermediario', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((json) => setExercicio(json))
            .then(() => setloading(false))
            .catch((err) => {
                console.log(err);
                alert('Erro ao buscar exercicios');
            })
    }, [])

    if(isloading == true)
    return(
        <Loading/>
        );

    return (
        <ScrollView style={{ width: '100%', height: 1200 }}>
            <View style={styles.container}>
            <View>
                
                <TouchableOpacity style={{top: 25}} onPress={() => navigation.navigate("Home2")}>
                <Image  style={styles.Img} source={require('../../assets/Seta.png')}/>

                </TouchableOpacity>
                
                </View>
                <View style={styles.logo}>
                    <Text style={{ color: '#FF69B4', fontSize: 35, fontWeight: 'bold' }}>FitApp</Text>
                </View>

                <View style={{ width: '100%', alignItems: 'center'}}>
                    {
                        exercicio.map((abdominalinter, index) => (
                            <AbdominalInter abdominalinter={abdominalinter} key={index}/>
                            ))
                    }
                </View>
               
                <View>
                    <TouchableOpacity style={styles.buttonComecar} onPress={() => navigation.navigate("Execucaoabdinter")}>
                        <Text> COMEÇAR </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    logo: {
        fontSize: 35,
        color: '#fff',
        bottom: '1.8%',
        fontWeight: 'bold',
        left: 135
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 1400
    },
    Img: { 
        width: 50,
        height: 50,
        right: 180
    },
    buttonComecar: {
        width: 300,
        height: 50,
        backgroundColor: '#40E0D0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        color: '#000',
        fontSize: 25,
        marginTop: 10,

    },

}
)