import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.appHeader}>
            <Text style={styles.headingOne}>Off Your Mind</Text>
            <Text style={styles.headingFour}>Less remembering more doing</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    appHeader: {
        backgroundColor: '#b3926c',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        color: '#efebe2',
        fontFamily: 'League Spartan, sans-serif',
        borderRadius: 18,
    },
    headingOne: {
        fontFamily: 'League Spartan',
        textTransform: 'uppercase',
        justifyContent: 'center',
        textAlign: 'center',
        display: 'flex', // or 'block', depending on the use case
    },
    headingFour: {
        fontFamily: 'Libre Baskerville',
        fontStyle: 'italic',
        justifyContent: 'center',
        textAlign: 'center',
        display: 'flex', // or 'block', depending on the use case
    },
});

export default Header;