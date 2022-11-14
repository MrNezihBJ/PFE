import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useQuery } from "@apollo/client";
import { FlatList } from "react-native-gesture-handler";
import { useState } from "react";
import { GET_MACHINES } from "../../../graphQl/Read/GetMachineQL";

const  ListeMachineClient = () => 
{
  //A faire changer findall user avec machine du client seulement affecter a la societe biensur
  const {error,loading,data} =  useQuery(GET_MACHINES);

    if (!loading && !error) 
      {
     return (
      
      <View style={{backgroundColor:"yellow"}}>
        <FlatList
          data={data.findAllMachine}
          renderItem={({ item }) => (
            
            <View
              style={{
                backgroundColor: "lightblue",
                justifyContent: "space-between",
              }}
            >       
            <TouchableOpacity>
              <View style={{ flexDirection: "row" }}>
           
                <Image style={{
                    height: 80,
                    width: 80,
                    marginRight: 25,
                    marginTop: 17.5,
                  }}
                  source={
                 item.Nom_Machine === "Newton 3" ? require("../../../images/NEWTON3.jpg")
                :item.Nom_Machine === "TPE"?require("../../../images/TPE.jpg")
                :item.Nom_Machine === "DAB"?require("../../../images/DAB.jpg")
                :require("../../../images/MACHINE.jpg")
              }
                />

                <View style={{ flexDirection: "column" }}>

                  <View style={{ flexDirection: "row", marginBottom: 5 }}>
                    <Text style={styles.NameStyle}>
                    {item.Nom_Machine}
                    </Text>  
                  </View>

                  <View style={{ flexDirection: "row", marginBottom: 5 }}>
                    <Text style={styles.TextStyle}>
                        Appartiens a {item.nom_Societe} 
                        </Text>
                  
                  
                  </View>

                  <View style={{ flexDirection: "row", marginBottom: 5 }}>
                    <Text style={styles.TextStyle}>
                     ID:{item.idMachine}
                      </Text>
                  
                  </View>

                  <View style={{ flexDirection: "row", marginBottom: 5 }}>
                    <Text style={styles.TextStyle}>
                      Serial number: {item.Serial_Number}
                    </Text>
                   
                  </View>

                </View>

              </View>
              </TouchableOpacity>
              <View style={{ backgroundColor: "#fcfba7", height: 20 }}>

              </View>

            </View>
            
          )}
        />
      </View>
     )
    } 
}


  export default ListeMachineClient;

 


  const styles = StyleSheet.create({
    TextStyle: {
      color: "black",
      fontWeight: "bold",
    },
    NameStyle: {
      color: "#0024FF",
      fontWeight: "bold",
      fontSize:20,
      textAlign: "center",
  
    },
    DataStyle: {
      color: "lightblack",
      fontWeight: "bold",
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    buttonClose2: {
      backgroundColor: "red",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      fontWeight:'bold'
    }
  });
  