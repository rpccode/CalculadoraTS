import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: '#000000'
    },
    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10
    },
    calculadoraScreen: {
        flex: 1,
        paddingHorizontal: 20,
        // backgroundColor: 'red',bor
        justifyContent: 'flex-end'

    },
    resultadoPequeño: {
        color: '#6A6F73',
        fontSize: 30,
        textAlign: 'right',
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },

    botton: {
        height: 80,
        width: 80,
        backgroundColor: '#333333',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10

    }, bottonText: {
        textAlign: 'center',
        padding: 10,
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold'
    }
});