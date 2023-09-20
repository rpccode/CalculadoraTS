import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { BotonCal } from '../components/BotonCal';
import { useCalculadora } from '../hooks/useCalculadora';


export const CalculadoraScreen = () => {
    const {
        NumeroAnterior,
        Numero,
        limpiar,
        positionNegativo,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        armarNumero,
        calcular,
        borrarUltima } = useCalculadora()
    return (
        <View style={styles.calculadoraScreen} >
            {
                (NumeroAnterior === '0') && <Text style={styles.resultadoPequeño}>{NumeroAnterior}</Text>
            }
            <Text style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >{Numero} </Text>
            <View style={styles.fila}>
                <BotonCal text='C' color='#A5A5A5' action={limpiar} />
                <BotonCal text='+/-' color='#A5A5A5' action={positionNegativo} />
                <BotonCal text='del' color='#A5A5A5' action={borrarUltima} />
                <BotonCal text='/' color='#F3990A' action={btnDividir} />



            </View>
            <View style={styles.fila}>
                <BotonCal text='7' action={armarNumero} />
                <BotonCal text='8' action={armarNumero} />
                <BotonCal text='9' action={armarNumero} />
                <BotonCal text='X' color='#F3990A' action={btnMultiplicar} />
            </View>
            <View style={styles.fila}>
                <BotonCal text='4' action={armarNumero} />
                <BotonCal text='5' action={armarNumero} />
                <BotonCal text='6' action={armarNumero} />
                <BotonCal text='-' color='#F3990A' action={btnRestar} />
            </View>

            <View style={styles.fila}>
                <BotonCal text='1' action={armarNumero} />
                <BotonCal text='2' action={armarNumero} />
                <BotonCal text='3' action={armarNumero} />
                <BotonCal text='+' color='#F3990A' action={btnSumar} />
            </View>

            <View style={styles.fila}>
                <BotonCal text='0' ancho action={armarNumero} />
                <BotonCal text='.' action={armarNumero} />
                <BotonCal text='=' color='#F3990A' action={calcular} />
            </View>


        </View >
    );
}

