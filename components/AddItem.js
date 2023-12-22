import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AddItem = ({ dispatch }) => {
    const [inputValue, updateInput] = useState('');
    const handleInput = (event) => {
        updateInput(event.target.value);

    };
    const submitHandler = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_ITEM', payload: inputValue });
        updateInput('');
    };
    return (
        <View style={styles.appContainer}>
            <TextInput
                style={styles.input}
                value={inputValue}
                onChangeText={handleInput}
                placeHolder='Write it down...'
            />
            <TouchableOpacity style={styles.button} onPress={submitHandler}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </View>
    );

};

const styles = StyleSheet.create({
    button: {
        borderColor: 'secondary',
        background: '#e6e6e6',
        borderRadius: 20,
        hover: {
            backgroundColor: '#b8a598'
        }
    },
    buttonText: {
        fontFamily: 'Libre Baskerville',
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
    
    },
    appContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: ''
    }
})

export default AddItem;