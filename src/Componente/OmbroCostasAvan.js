import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { PixelRatio } from "react-native";

const OmbrCostAvan = ({ ombrocostasavan }) => {
  return (
    <TouchableOpacity
      style={{
        width: "90%",
        height: 70,
        backgroundColor: "#DCDCDC",
        margin: 5,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 20,
        elevation: 3,
      }}
    >
      <View
        style={{
          left: PixelRatio.getPixelSizeForLayoutSize(10),
        }}
      >
        <View style={{ width: "90%" }}>
          <Text
            style={{
              color: "#000",
              width: "100%",
            }}
          >
            {ombrocostasavan.nome}
          </Text>
        </View>
        <Text
          style={{
            color: "#000",
          }}
        >
          {ombrocostasavan.repeticoes}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default OmbrCostAvan;
