import React from "react";
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

export function Button({ onPress }) {
    return (
        <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.5}
        onPress={onPress}
        >
            <Text style={styles.buttonText}>Add</Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#A03538',
        padding: 18,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFF',
    },
});