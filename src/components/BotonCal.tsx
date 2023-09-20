import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../theme/appTheme'
interface props {
    text: string;
    color?: string;
    ancho?: Boolean;
    action: (numerotexto: string) => void;
}
export const BotonCal = (Props: props) => {
    const { text, color = '#333333', ancho = false, action } = Props
    return (
        <TouchableOpacity
            onPress={() => action(text)}
        >
            <View style={{ ...styles.botton, backgroundColor: color, width: (ancho) ? 180 : 80 }}>
                <Text style={{ ...styles.bottonText, color: (color === '#A5A5A5') ? 'black' : 'white' }}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

