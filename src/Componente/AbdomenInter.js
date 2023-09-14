import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { PixelRatio } from "react-native";

const AbdominalInter = ({ abdominalinter }) => {
    return (
        <TouchableOpacity style={{
            width: '90%',
            height: 70,
            backgroundColor: '#DCDCDC',
            margin: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            borderRadius: 20,
            elevation: 3
        }}>
            <View style={{
                left: PixelRatio.getPixelSizeForLayoutSize(10)
            }}>
                <View style={{width: '90%'}}>
                    <Text style={{
                        color: '#000',
                        width: '100%'
                    }}>{abdominalinter.nome}</Text>
                </View>
                <Text style={{
                    color: '#000',
                }}>{abdominalinter.repeticoes}</Text>
            </View>
         
        </TouchableOpacity>
    );
}

export default AbdominalInter;