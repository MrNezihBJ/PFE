import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import { StyleSheet } from 'react-native';
import Component_User_Liste from '../../Component/Usercomponents/ListeUsers';
import AccordionUser from '../../Component/Usercomponents/AccordionUserListe';

const ListeUserScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor:"white"}}>
      
        <Text style={{fontSize: 20,textAlign: 'center',marginBottom: 5,fontWeight:"bold"}}>
               Liste USERS:
          </Text>

      <AccordionUser/>
   
      
      <View style={{alignItems: 'center',padding: 16,justifyContent: 'center'}}> 
            <Component_User_Liste />
      </View>

    </SafeAreaView>
  );
};

export default ListeUserScreen;


const styles = StyleSheet.create({
  buttonStyle1: 
  {
    //justifyContent:"flex-start",
    width:150,
    height:50,
    backgroundColor: "lightblue",
    borderRadius: 100,
    textAlign: "center",
  },
  buttonStyle2: 
    {
      //justifyContent:"flex-end",
      width:150,
      height:50,
      backgroundColor: "#29CC97",
      borderRadius: 100,
      textAlign: "center",
    },
    TextS:
    {
      ontWeight: "bold",
      textAlign: 'center',
      color:"white",
    }
})
