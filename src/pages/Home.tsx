import React, { useState, useEffect } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    FlatList,
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
    id: string;
    name: string;
}

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillData[]>([]);
    const [gretting, setGretting] = useState('');

    function handleAddNewSkill() {
        const data ={
            id: String(new Date().getTime()),
            name: newSkill
        }

        setMySkills(oldState => [...oldState, data]);

    }

    function handleRemoveSkill(id: string) {
        setMySkills(oldState => oldState.filter(
            skill => skill.id !== id
        ))

    }

    useEffect(() => {
        const currentHour = new Date().getHours();

        if(currentHour < 12){
            setGretting('Good morning');
        }
        else if(currentHour >= 12 && currentHour < 18){
            setGretting('Good afternoon');
        }
        else{
            setGretting('Good evening');
        }
    }, [])

  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Welcome, Caio!
        </Text>

        <Text style={styles.greetings}>
            {gretting}
        </Text>
        
        <TextInput
            style={styles.imput}
            placeholder='New skill'
            placeholderTextColor="#555"
            onChangeText={setNewSkill}
        />

        <Button 
        onPress={handleAddNewSkill}
        title='Add'
        />

        <Text style={[styles.title, { marginVertical: 20 }]} >
            My SKills
        </Text>

        <FlatList 
            data={mySkills}
            keyExtractor={item => item.id}
            renderItem={({ item}) => (
                <SkillCard 
                    skill={item.name}
                    onPress={() => handleRemoveSkill(item.id)}
                />
            )}
        />

    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 70,

        backgroundColor: '#121015',
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    imput: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7,
    },
    greetings: {
        color: '#FFF'
    }
});