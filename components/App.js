import React from "react";
import {SafeAreaView,StyleSheet} from "react-native";
import Card from "./CardComponents/Card";

const App = () => { 
    return(
      <SafeAreaView style={SafeStyles.container}>
        <Card 
        title={"Eddard Stark"}
        text={"Winter is coming..."}
        />
        <Card
        title={"Arif Işık"}
        text={"Çeku, hazırsan çıkalım balım."}
        />
        <Card
        title={"Feyyaz Yiğit"}
        text={"Kimsenin hiçbir şey bilmediği yerde, bir insan her şeyi bilebilir."}
        />
      </SafeAreaView>
    );
};

const SafeStyles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: "#e2e2e2",
    }
})

export default App;