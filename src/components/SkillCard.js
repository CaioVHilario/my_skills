import React from "react";
import {
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export function SkillCard({ skill }) {
    return (
        <TouchableOpacity style={styles.buttonSkill}>
            <Text style={styles.textSkill} >
                {skill}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 20,
        alignItems: 'center',
        marginVertical: 5,
    },
    textSkill: {
        color: '#FFF',
        backgroundColor: '#1F1E25',
        fontSize: 18,
        fontWeight: 'bold',
    }
        
    
});