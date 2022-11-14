import {
  Modal,
  Pressable,
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useQuery } from "@apollo/client";
import { FlatList } from "react-native-gesture-handler";
import { useState } from "react";
import { GET_Societe } from "../../../../graphQl/Read/GetSocieteQl";
import { AntDesign } from "@expo/vector-icons";

const Component_Societe_Liste = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { error, loading, data } = useQuery(GET_Societe);
  console.log("Component_Societe_Liste");
  console.log("data of liste societe", data);

  /**
   *
   */
  if (!loading && !error) {
    return (
      <View>
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
              <Text style={styles.modalText}>Voulez Vous Supprimer User?</Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>oui je veux</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose2]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Non je veux pas</Text>
                </Pressable>
              </View>

              <Text style={styles.modalText}>
                Voulez Vous Apporter des mise a jour a un User?
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>oui je veux</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose2]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Non je veux pas</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>

        <FlatList
          data={data.findAllSocieteexistant}
          renderItem={({ item }) => (
            <View>
              <View style={{ backgroundColor: "white", height: 20 }}></View>
              <View
                style={{
                  backgroundColor: "white",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    backgroundColor: "lightgrey",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 100,
                    width: 100,
                  }}
                >
                  <Image
                    style={{
                      height: 80,
                      width: 80,
                    }}
                    source={require("../../../../images/Carrefour.png")}
                  />
                </View>

                <View style={{ flexDirection: "column" }}>

                <View style={{ flexDirection: "row" }}>
                  <View >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 25,
                        textAlign: "center",
                      }}
                    >
                      {item.nomSociete}
                    </Text>
                  </View>

                  <View style={{ justifyContent: "flex-end" }}>
                    <TouchableOpacity 
                        onPress={() => setModalVisible(true)}>
                        <AntDesign name="bars" size={20} color="black" />
                      </TouchableOpacity>
                </View>
                  </View>
                  <View style={{ marginLeft: 5 }}>
                    <View style={{ flexDirection: "row", marginBottom: 5 }}>
                      <Text style={styles.TextStyle}>Fix:{"  "}</Text>
                      <Text style={styles.DataStyle}>{item.fix}</Text>
                    </View>

                    <View style={{ flexDirection: "row", marginBottom: 5 }}>
                      <Text style={styles.TextStyle}>Email:{"  "}</Text>
                      <Text style={styles.DataStyle}>{item.Email}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
};
export default Component_Societe_Liste;

const styles = StyleSheet.create({
  TextStyle: {
    color: "black",
  },
  NameStyle: {
    color: "#0024FF",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  DataStyle: {
    color: "black",
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
});
