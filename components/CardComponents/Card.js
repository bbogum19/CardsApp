import React from "react";
import { View, Text, TouchableOpacity, Alert} from "react-native";
import CardStyles from "./CardStyles";

const Card = (props) => {
    return (
        <View style={CardStyles.container}>
            <View style={CardStyles.body}>
                <Text style={CardStyles.title}>{props.title}</Text>
                <Text style={CardStyles.word}>{props.text}</Text>
            </View>
            <TouchableOpacity style={CardStyles.button_container}
            onPress={() => Alert.alert("Liked..")}>
                <Text style={CardStyles.button_text}>I LIKED</Text>
            </TouchableOpacity>
        </View>

    )
}


export default Card;