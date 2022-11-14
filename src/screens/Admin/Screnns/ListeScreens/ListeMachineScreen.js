import React from 'react';
import {View, Text, SafeAreaView,StyleSheet} from 'react-native';
import ListeMachine from '../../Component/Machinecomponents/ListeMachine';

const ListeMachineScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      
      <View >
          <Text style={{fontSize: 20,textAlign: 'center',marginBottom: 16}}>
            Liste Machine
          </Text>
      </View>

          <ListeMachine/>     
      
    </SafeAreaView>
  );
};

export default ListeMachineScreen;


const styles = StyleSheet.create({
  buttonStyle1: 
  {
    flex:2,
    justifyContent:"flex-start",
    backgroundColor: "#29CC97",
    borderRadius: 100,
    textAlign: "center",
  },
  buttonStyle2: 
    {
      flex:1,
      justifyContent:"flex-end",
      backgroundColor: "#29CC97",
      borderRadius: 100,
      textAlign: "center",
    },


})
