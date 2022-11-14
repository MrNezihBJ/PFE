import {Modal,Pressable,View,Text,StyleSheet,Image,TouchableOpacity,Alert} from "react-native";
import React from "react";
import { useQuery } from "@apollo/client";
import { FlatList } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons'; 
import { useState } from "react";
import { Get_Users } from "../../../../graphQl/Read/GetUsersQL";

const Component_User_Liste = ({navigation}) => {

  const [modalVisible, setModalVisible] = useState(false);
  const { error, loading, data } = useQuery(Get_Users);

  let GREEN="#BEEFC3"
  let RED="#F46F5D"

  if (!loading && !error) {
    
    let UserStatusColor = "#BEEFC3";

    return (
      <View style={{backgroundColor:"yellow"}}>
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

            <Text style={styles.modalText}>
              Voulez Vous Supprimer User?
              </Text>

            <View style={{flexDirection:"row", justifyContent:"space-around", marginRight:10}} >
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
          
            <Text style={styles.modalText}>
            Voulez Vous Apporter des mise a jour a un User?
              </Text>

             <View style={{flexDirection:"row", justifyContent:"space-around"}} >
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => 
              {setModalVisible(!modalVisible)}}>
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

        <FlatList
          data={data.findAllUser}
          renderItem={({ item }) => (
            <View
              style=
              {{
                backgroundColor:  
                  item.status?   
                    UserStatusColor = GREEN:
                    UserStatusColor = RED,
                justifyContent: "space-between"}}>
              
               
              <View style={{ flexDirection: "row" }}>
             
                <Image
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 20,
                    marginRight: 25,
                    marginTop: 17.5,
                  }}
                  source={require("../../../../images/images.png")}
                />

                <View style={{ flexDirection: "column",marginBottom: 5 }}>

                  <View style={{ flexDirection: "row",justifyContent:"space-between"  }}>

                    <Text style={styles.NameStyle}>
                      {item.prenom}{"  "}{item.nom}      
                    </Text>

                    <TouchableOpacity 
                      onPress={() => setModalVisible(true)}>
                      <AntDesign name="bars" size={20} color="black" />
                    </TouchableOpacity>
                    
                  </View>

                  <View style={{ flexDirection: "row", marginBottom: 5 }}>
                    <Text style={styles.TextStyle}>Societe: </Text>
                    <Text>
                      {"  "}
                    </Text>
                    <Text style={styles.DataStyle}>{item.societe}</Text>
                  </View>

                  <View style={{ flexDirection: "row", marginBottom: 5 }}>
                    <Text style={styles.TextStyle}>
                      Phone Number: 
                      </Text>
                    <Text>
                      {"  "}
                    </Text>
                    <Text style={styles.DataStyle}>
                      {item.Numero_Telephone}
                    </Text>
                  </View>

                  <View style={{ flexDirection: "row", marginBottom: 5 }}>
                    <Text style={styles.TextStyle}>
                      Email: 
                    </Text>
                    <Text>
                      {"  "}
                    </Text>
                    <Text style={styles.DataStyle}>
                      {item.mail}
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
    );
  }
};
export default Component_User_Liste;

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

/**
 * 
 * <View style={{backgroundColor:"#BEEFC3",justifyContent:"space-between"}}>
    <View style={{flexDirection:"row"}} >
      <Image style={{
            height: 50,
            width: 50,
            borderRadius: 20,
            marginRight:25,
            marginTop:17.5
          }}
          source={require("../../../images/images.png")}/>

        <View style={{flexDirection:"column"}}>

          <View style={{flexDirection:"row",marginBottom:5}} >
                <Text style={styles.TextStyle}>
                    Nom:   
                </Text>
                <Text style={styles.DataStyle}>
                   
                    
                </Text>
          </View>

          <View style={{flexDirection:"row",marginBottom:5}} >
                <Text style={styles.TextStyle}>
                Societe:   .
                </Text>
                <Text style={styles.DataStyle}>
                
                </Text>
          </View>

          <View style={{flexDirection:"row",marginBottom:5}} >
                <Text style={styles.TextStyle}>
                Phone Number:   .
                </Text>
                <Text style={styles.DataStyle}>
                
                </Text>
          </View>

          <View style={{flexDirection:"row",marginBottom:5}} >
                <Text style={styles.TextStyle}>
                Email:   . 
                </Text>
                <Text style={styles.DataStyle}>
                
                </Text>
          </View>

         
        </View>

    </View>

</View>
 */

/*let Noms = data.findAllUserexistant.map(item => {return item.nom})
    let Prenom= data.findAllUserexistant.map(item=>{return item.prenom})
    let Phone=data.findAllUserexistant.map(item=>{return item.Numero_Telephone})
    let Mail= data.findAllUserexistant.map(item=>{return item.mail})
    let Societe=data.findAllUserexistant.map(item=>{return item.societe})
    let Status=data.findAllUserexistant.map(item=>{return item.status})*/
