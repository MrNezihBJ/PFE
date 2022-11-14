import { Pressable, Alert, Modal, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "@apollo/client";
import { FlatList } from "react-native-gesture-handler";
import { Surface } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import {Get_Ticket} from "../../graphQl/Read/GetTicketQL"


const ListeTicketIntervenant = () => {
  let DateTicket = "";
  let HeureTicket=""
  let MyText=""
  const [modalVisible, setModalVisible] = useState(false);
  const [TextProbleme, setTextProbleme] = useState("");

  
  const {
    error: error1,
    loading: loading1,
    data: data1,
  } = useQuery(Get_Ticket); // juste changement de nom pour utliser x QUERYS

  const [Nom, setNom] = useState("");

  useEffect(() => {

    console.log('%cListeTicketScreen.js line:30 all ticket', 'color: #007acc;');
    getData()
  });

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("Name");
      if(value!=undefined){
        setNom(value);
      
      }
      

      if (value !== null) {
        return value;
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  if (!loading1 && !error1) {
    return (
      <View style={{ backgroundColor: "white" }}>
        <Text
          style={{
            backgroundColor: "white",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 30,
          }}
        >
          Liste Ticket
        </Text>

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
                {TextProbleme}
                </Text>
                </ScrollView>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <Pressable
                  style={[styles.button, styles.buttonClose2]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Fermer</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>

        <FlatList
          data={data1.findAllTicketexistant.filter((item) => item.status1)}
          // keyExtractor={(item, index) => console.log("of id ",item._id,index)}
          renderItem={({ item, index }) => (
          <View>
            <View style={{ backgroundColor: "white" }}>
              <TouchableOpacity
                onPress={() => {
                  setTextProbleme(item.TextProbleme);
                  setModalVisible(true);
                  console.log(
                    "YA NEZIH HAK ==>",
                    (DateTicket = item.createdAt.toString().substr(0, 10))
                  );
                }}
              >
                <LinearGradient
            colors={["#a6b3e0", "#d2dbfa"]}
            style={{height:"100%",width:"80%",marginLeft:"10%"}}
          >
                <View style={{flexDirection: "row",justifyContent:"space-between" }}>
    
                  <Text style={{ fontSize: 10,marginLeft:5 }}>
                    Le: {(DateTicket = item.createdAt.toString().substr(0, 10))} 
                  </Text>
                  <View style={{marginRight:5,marginTop:5}}>
                  <Surface style={{ borderRadius: 10}}>
                      <View style={
                        item.statusIntervenant?styles.CercleVert:
                        item.statusChef?styles.CercleOranger: 
                        styles.CercleRouge
                      }>
                      </View>
                  </Surface>
                  </View>
                 
                </View>

                <View style={{flexDirection: "row",justifyContent:"space-between" }}>
                  <View style={{marginLeft:5}}>
                  <Text style={{ fontSize: 10 }}>
                      a: {(HeureTicket = item.createdAt.toString().substr(11, 5))} 
                    </Text>
                  </View>
                 
                    <Text style={{textAlign:"center"}}>
                      Titre:
                    </Text>
                  
                  <View style={{marginRight:2.5}}>
                  <Text style={{color:"white",fontSize:10}}>
                      
                        {
                        item.statusIntervenant?MyText="Finished":
                        item.statusChef?MyText="InProgress":
                        MyText="Onhold"}
                      
                    </Text>
                  </View>
                    
                    
                </View>
                    
                

                  

                  <View>
                    <Text style={{ fontWeight: "bold", textAlign: "center" }}>
                      {item.TitreTicket}
                    </Text>

                    <Text style={{  textAlign: "center" }}>
                      Temps estimé pour resoudre: 48h/72h
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
                     
                      ID:{item.Id_Machine}
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
export default ListeTicketIntervenant;

const styles = StyleSheet.create({
  CercleRouge: {
    paddingEnd:0.2,
    flexShrink:100,
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: "#FF0000",
  },
  CercleVert: {
    paddingEnd:0.2,
    flexShrink:100,
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: "#8df798",
  },
  CercleOranger:{
    paddingEnd:0.2,
    flexShrink:100,
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: "#f7b454",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose2: {
    backgroundColor: "red",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

