import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ListItem = ({ item, dispatch }) => {
    const handleRemoveItem = () => {
        dispatch({ type: 'REMOVE_ITEM', payload: item });
    };

    return (
        <View style={styles.listItem}>
            <TouchableOpacity
                style={styles.removeListItem}
                onPress={handleRemoveItem}
            >
                <Text style={styles.removeText}>✓</Text>
            </TouchableOpacity>
            <Text style={styles.itemText}>{item.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        fontFamily: 'Libre Baskerville, sans-serif',
        fontStyle: 'italic',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 5,
        paddingRight: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        marginTop: 2,
        marginBottom: 2,
        marginLeft: 3,
        marginRight: 3,
    },
    removeListItem: {
        backgroundColor: 'red',
        padding: 8,
        borderRadius: 4,
        marginRight: 8,
    },
    removeText: {
        color: '#fff',
        fontSize: 16,
    },
    itemText: {
        fontSize: 16,
    },
});

export default ListItem;
