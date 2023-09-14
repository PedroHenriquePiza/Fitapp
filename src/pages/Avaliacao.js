import React from "react";
import { TouchableOpacity } from "react-native";
import { View, StyleSheet, Text, TextInput, Image } from "react-native";

export default function Avaliação ({ navigation }) {
    const [ altura, onChangeAltura] = React.useState('');
    const [ peso, onChangePeso] = React.useState('');
     
    const calculateIMC = () => {
        const imc = peso / (altura * altura);
        navigation.navigate( 'ResultAvaliacao', { imc });
        
    };

    return(
        <View style={styles.Container}>

            <View> 
            <TouchableOpacity style={{top: 25}} onPress={() => navigation.navigate("Home2")}>
                <Image  style={styles.Img} source={require('../../assets/Seta.png')}/>
            </TouchableOpacity>  
            </View>

            <View style={styles.title}>
            <Text style={{fontSize: 35, color: '#000'}}>Avaliação</Text>
            </View>

            <View style={styles.logo}>
                <Text style={{color: '#FF69B4', fontSize: 35, fontWeight: 'bold'}}>FitApp</Text>
            </View>

            
            <View style={styles.Altura}>
            <Text style={{color: '#fff', fontSize: 20}}>Altura</Text>
            </View>

            <TextInput 
            style={styles.input}
            onChangeText={onChangeAltura}
            value={altura}
            placeholder= " Digite sua Altura(1.80)"
            keyboardType="text"

            />
    

            <View style={styles.Peso}>
            <Text style={{color: '#fff', fontSize: 20, alignItems: 'center'}}>Peso</Text>
            </View>  

            <TextInput 
            style={styles.input2}
            onChangeText={onChangePeso}
            value={peso}
            placeholder= " Digite seu Peso(70)"
            keyboardType="text"
            
            />
            
        <TouchableOpacity  style={styles.btnCadstro} onPress={calculateIMC} >
            <Text style={{ color: '#fff', fontSize: 20, alignItems: 'center'}}>CALCULAR</Text>
        </TouchableOpacity>
            

        </View>

       
        



    )
}

const styles = StyleSheet.create({
    Container:{
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        fontSize: 35,
        color: '#fff',
        bottom: '22.5%',
        fontWeight: 'bold',
        left: 135

    },
    title: {
        color: '#ffff',
        fontSize: 50,
        top: 80
        
    },
    Altura: {
        width: 200,
        height: 50,
        backgroundColor: '#000',
        justifyContent:'center',
        alignItems: 'center',
        color:'#FFF',
        fontSize: 25,
        top : 100,
        marginBottom: 65,
        borderRadius: 60,

    },
    Peso: {
        width: 200,
        height: 50,
        backgroundColor: '#000',
        justifyContent:'center',
        alignItems: 'center',
        color:'#FFF',
        fontSize: 25,
        top : 20,
        marginBottom: 0,
        borderRadius: 60,
        

    },
    input: {
    height: 40,
    margin: 60,
    borderWidth: 1, 
    borderColor: '#FFF',
    color:'#000',
    fontSize: 20
    
    },
    input2: {
        height: 40,
        margin: 35,
        borderWidth: 1, 
        borderColor: '#FFF',
        color:'#000',
        fontSize: 20
        
        
    },
    btnCadstro: {
        width: 200,
        height: 50,
        backgroundColor: '#000',
        justifyContent:'center',
        alignItems: 'center',
        color:'#fff',
        fontSize: 25,
        top : 20,
        borderRadius: 10


    },
    Img: {
        width: 50,
        height: 50,
        right: 180,
        bottom: '265%'

    }
    
    }
)