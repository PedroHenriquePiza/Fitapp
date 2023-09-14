import React from "react";
import { PixelRatio } from "react-native";
import { ActivityIndicator, View, Text } from "react-native";

const Loading = () => {
    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                backgroundColor: '#FFF',
            }}
        >
            <Text
                style={{
                    fontSize: 50,
                    fontWeight: 'bold',
                    bottom: PixelRatio.getPixelSizeForLayoutSize(20),
                    color: '#FF69B4',
                }}
            >
                Fit App
            </Text>
            <ActivityIndicator
                size="large"
                color="#0000ff"
            />
        </View>
    )
}

export default Loading;