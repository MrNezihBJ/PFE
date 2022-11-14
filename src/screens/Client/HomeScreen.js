import { FontAwesome,AntDesign } from '@expo/vector-icons';
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Icon = ({ icon, item, background }) => (
    <FontAwesome
        name={icon}
        size={40}
        color={
            item.iconColor || (!item.background || !background ? '#3498db' : '#fff')
        }
        style={item.styleIcon}
    />
);

const data = [
    {
        name: 'Me',
        background: '#3498db',
        icon: (item, background) => Icon({ icon: 'user', item, background }),
        iconColor: '#0d47a1',
        rippleColor: '#000',
    },
    
    {
        name: 'Team',
        background: '#4caf50',
        icon: (item, background) => Icon({ icon: 'users', item, background }),
        styleName: { color: '#0d47a1', fontWeight: 'bold' },
    },
    {
        name: ' Dashboard \n personel',
        nameColor: '#3498db',
        background: '#02cbef',
        icon: (item, background) => Icon({ icon: 'area-chart', item, background }),
    },
    {
        name: 'S.L.A',
        background: '#ff5722',
        icon: (item, background) => Icon({ icon: 'pie-chart', item, background }),
    },
];

const HomeScreen = () => {
    const card = ({name}) => console.log(name);
    return (
        <View style={styles.container}>
            
        </View>
    );
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        
    },
});




