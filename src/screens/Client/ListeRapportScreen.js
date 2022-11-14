import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { List } from "react-native-paper";
import { Get_Rapport } from "../../graphQl/Read/GetRapportQL";
import { useQuery } from "@apollo/client";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const RapportScreen = () => {

  let PetitContenuRapport = [""];
  let DateCreation = "";
  let Heure= "";

  const [ContenuRapport, SetContenuRapport] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const { error, loading, data } = useQuery(Get_Rapport);

  if (!loading && !error) {
    console.log(" value==>", data.findAllRapportExistant);
    console.log("Created at value==>", data.findAllRapportExistant.createdAt);

    return (
      <View
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
         <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert;
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <ScrollView>
                    <Text style={styles.modalText}>
                      {ContenuRapport}
                    </Text>
                    </ScrollView>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-end",
                      }}
                    >
                      <TouchableOpacity
                        style={styles.Buttonfermer}
                        onPress={() => {
                          setModalVisible(!modalVisible);
                        }}
                      >
                        <Text style={styles.ButtonOuvrirText}>Fermer</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>

        <View>
          <Text>Liste Rapport</Text>
          <List.Section style={{ backgroundColor: "white" }}>
            <List.Accordion
              title="Rapport filter"
              left={(props) => <List.Icon {...props} icon="folder" />}
            >
              <List.Item title="Rapport Societe" />
              <List.Item title="Rapport User" />
            </List.Accordion>
          </List.Section>
        </View>




        <FlatList
          data={data.findAllRapportExistant}
          renderItem={({ item }) => (
            <View>
            <View style={{ backgroundColor: "white" }}>
              <TouchableOpacity
                onPress={() => {
                  SetContenuRapport(item.ContenuRapport);
                  setModalVisible(true);}}>
                    
                  <Text>
                    {DateCreation = item.createdAt.toString().substr(0, 10)}
                  </Text>

                  
               
              
                <LinearGradient
            colors={["#a6b3e0", "#d2dbfa"]}
            style={{height:"100%",width:"80%",marginLeft:"10%"}}
          >
                <View style={{flexDirection: "row",justifyContent:"space-between" }}>
    
                  <Text style={{ fontSize: 10,marginLeft:5 }}>
                    Le: {(DateCreation = item.createdAt.toString().substr(0, 10))} 
                  </Text>
                  
                 
                </View>

                <View style={{flexDirection: "row",justifyContent:"space-between" }}>
                  <View style={{marginLeft:5}}>
                  <Text style={{ fontSize: 10 }}>
                      a: {(Heure = item.createdAt.toString().substr(11, 5))} 
                    </Text>
                  </View>
                 
                    <Text style={{textAlign:"center"}}>
                      Titre:{item.TitreRapport}
                    </Text>
                </View>     

                  <View>
                    <Text style={{ fontWeight: "bold", textAlign: "center" }}>
                      {item.TitreRapport}
                    </Text>

                    <Text style={{  textAlign: "center" }}>
                      Temps de resolution == 
                    </Text>
                   
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "grey",
                        fontSize: 11,
                        marginLeft: 4,
                        marginBottom: 3,
                      }}
                    >
                     
                      ID:{item._id}
                    </Text>
                    
                  </View>
                </LinearGradient>
              </TouchableOpacity>

              <View style={{ backgroundColor: "white", height: 20 }}></View>
            </View>
            </View>
          )}
        />
      </View>
    );
  }
};
export default RapportScreen;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#FFF6A7",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  ButtonOuvrir: {
    marginBottom: 25,
    backgroundColor: "#AAE8B7",
    height: 35,
    width: 71,
    borderRadius: 10,
    marginLeft: 80,
  },
  Buttonfermer: {
    marginBottom: 25,
    backgroundColor: "#FF5858",
    height: 35,
    width: 71,
    borderRadius: 10,
    marginLeft: 80,
  },
  ButtonOuvrirText: {
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginTop: 5,
  },
});



/**
 * OLD RAPPORT ==>
 *  <View style={{ backgroundColor: "white", height: 300, width: 300 }}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert;
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <ScrollView>
                    <Text style={styles.modalText}>
                      {ContenuRapport}
                    </Text>
                    </ScrollView>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-end",
                      }}
                    >
                      <TouchableOpacity
                        style={styles.Buttonfermer}
                        onPress={() => {
                          setModalVisible(!modalVisible);
                        }}
                      >
                        <Text style={styles.ButtonOuvrirText}>Fermer</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>

              <View
                style={{
                  backgroundColor: "#C0C3FF",
                  height: "46vh",
                  width: "80%",
                  display: "flex",
                  margin: "auto",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: 5,
                  }}
                >
                  Bouton ne Marche Pas
                </Text>

                
                  <View
                    style={{
                      backgroundColor: "white",
                      height: "40%",
                      width: "90%",
                      display: "flex",
                      margin: "auto",
                    }}
                  >
                    
                    
                    <Text style={{ textAlign: "center" }}>
                      {
                        (PetitContenuRapport = item.ContenuRapport.substr(
                          0,
                          100
                        ))
                      }
                    </Text>
                   
                  </View>
                

                <TouchableOpacity
                  style={styles.ButtonOuvrir}
                  onPress={() => {
                    setModalVisible(true);
                    SetContenuRapport(item.ContenuRapport);
                  }}
                >
                  <Text style={styles.ButtonOuvrirText}>ouvrir</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: "bold", color: "grey" }}>
                    Rédiger le:
                  </Text>
                  <Text style={{ fontWeight: "bold", color: "red" }}>
                    {(DateCreation = item.createdAt.toString().substr(0, 10))}
                  </Text>
                </View>
              </View>
            </View>
 */