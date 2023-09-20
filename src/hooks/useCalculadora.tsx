import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


enum Operadores {
    sumar, restar, dividir, multiplicar
}

export const useCalculadora = () => {
    const [Numero, setNumero] = useState('100')
    const [NumeroAnterior, setNumeroAnterior] = useState('1000')

    const ultimaOperacion = useRef<Operadores>()
    const limpiar = () => {
        setNumero('0')
        setNumeroAnterior('0')
    }

    const armarNumero = (numeroTexto: string) => {
        if (Numero.includes('.') && numeroTexto === '.') return;

        if (Numero.startsWith('0') || Numero.startsWith('-0')) {
            if (numeroTexto === '.') {
                setNumero(Numero + numeroTexto);
            } else if (numeroTexto === '0' && Numero.includes('.')) {
                setNumero(Numero + numeroTexto);
            } else if (numeroTexto !== '0' && !Numero.includes('.')) {
                setNumero(numeroTexto);
            } else if (numeroTexto === '0' && !Numero.includes('.')) {
                setNumero(Numero);
            } else {
                setNumero(Numero + numeroTexto);
            }
        } else {
            setNumero(Numero + numeroTexto);
        }

        setNumeroAnterior(Numero)

    }
    const borrarUltima = () => {
        let negativo = '';
        let numeroTemp = Numero;
        if (Numero.includes('-')) {
            negativo = '-';
            numeroTemp = Numero.substring(1);
        }

        if (numeroTemp.length > 1) {
            setNumero(negativo + numeroTemp.slice(0, -1))
        } else {
            setNumero('0')
        }
    }

    const positionNegativo = () => {
        if (Numero.includes('-')) {
            setNumero(Numero.replace('-', ''))
        } else {
            setNumero('-' + Numero)
        }
    }

    const cambiarNumeroPorAnterior = () => {
        if (Numero.endsWith('.')) {
            setNumeroAnterior(Numero.slice(0, -1))
        } else {

            setNumeroAnterior(Numero);
        }
        setNumero('0')
    }

    const btnDividir = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = Operadores.dividir
    }
    const btnMultiplicar = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = Operadores.multiplicar
    }
    const btnRestar = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = Operadores.restar
    }
    const btnSumar = () => {
        cambiarNumeroPorAnterior()
        ultimaOperacion.current = Operadores.sumar
    }
    const calcular = () => {
        const num1 = Number(Numero)
        const num2 = Number(NumeroAnterior)

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${num1 + num2}`)
                break;
            case Operadores.restar:
                setNumero(`${num2 - num1}`)
                break;
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`)
                break;
            case Operadores.dividir:
                setNumero(`${num2 / num1}`)
                break;
            default:
                break;
        }
        setNumeroAnterior('0')

    }
    return {
        Numero,
        NumeroAnterior,
        limpiar,
        armarNumero,
        positionNegativo,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
        borrarUltima
    }
}
