/*import { Modal,Pressable,  View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { useQuery,useMutation } from "@apollo/client";
import { FlatList } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons'; 
import { useState } from "react";
import { GET_MACHINES } from "../../graphQl/Read/GetMachineQL";
import Swal from 'sweetalert2'


const  ListeMachineClient = () => 
{
  const [modalVisible, setModalVisible] = useState(false);
  const {error,loading,data} =  useQuery(GET_MACHINES);

if (!loading && !error) 
{   
     return (     
      <View style={{backgroundColor:"yellow"}}>
        
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert;
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <Text style={styles.modalText}>
              Voulez Vous Supprimer Machine?
              </Text>

            <View style={{flexDirection:"row", justifyContent:"space-between"}} >
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={
                () => 
                {   
                  //Appel Mutation Supprimer
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Machine Supprimer',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  setModalVisible(!modalVisible);
                  console.log("Voici le status de la machine");
                  
                }
              }>
              <Text style={styles.textStyle}>oui je veux</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose2]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Non je veux pas</Text>
            </Pressable>
            </View>
          
            <Text style={styles.modalText}>
            Voulez Vous Apporter des mise a jour a la machine?
              </Text>

             <View style={{flexDirection:"row", justifyContent:"space-between"}} >
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>oui je veux</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose2]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Non je veux pas</Text>
            </Pressable>
            </View>


          </View>
        </View>
      </Modal>
<View>
    <Text style={{fontWeight:"bold"}}>
            Liste Machine de votre Societe
    </Text>
</View>
        <FlatList
          data={data.findAllMachine}
          renderItem={({ item }) => (
            
            <View
              style={{
                backgroundColor: "lightblue",
                justifyContent: "space-between",
              }}
            >        
          
               

            
              <View style={{ flexDirection: "row" }}>

                <Image
                  style={{
                    height: 80,
                    width: 80,
                    marginRight: 25,
                    marginTop: 17.5,
                  }}
                  source={ 
                 item.Nom_Machine === "Newton 3" ? 
                  require("../../../../images/NEWTON3.jpg")
                :item.Nom_Machine === "TPE"?
                  require("../../../../images/TPE.jpg")
                :item.Nom_Machine === "DAB"?
                  require("../../../../images/DAB.jpg")
                :require("../../../../images/MACHINE.jpg")
              }
                />

                <View style={{ flexDirection: "column" }}>

                  <View style={{ flexDirection: "row", marginBottom: 5 }}>
                    <Text style={styles.NameStyle}>
                    {item.Nom_Machine}
                    </Text>
            <View style={{justifyContent:"flex-end"}}>
                  <TouchableOpacity   onPress={() => setModalVisible(true)}>
                      <AntDesign name="bars" size={24} color="black" />
                  </TouchableOpacity>
              </View>
                                
                    
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
      marginLeft:10,
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
  */

