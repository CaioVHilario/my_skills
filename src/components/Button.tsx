import React from "react";
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from 'react-native';

// type ButtonProps = TouchableOpacityProps;

interface ButtonProps extends TouchableOpacityProps {
    title: string,
}

export function Button({ title, ...rest } : ButtonProps) {
    return (
        <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.5}
        {...rest}
        >
            <Text style={styles.buttonText}>{ title }</Text>
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