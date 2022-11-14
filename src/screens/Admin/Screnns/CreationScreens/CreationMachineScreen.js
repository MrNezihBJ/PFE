import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Creat_Machine } from "../../../../graphQl/Creat/CreateMachineQL";
import { useMutation, useQuery } from "@apollo/client";
import Swal from "sweetalert2";

import { GET_Societe } from "../../../../graphQl/Read/GetSocieteQl";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons'; 

import { List } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";

const Creation_Machine_Screen = () => {

  const [NomSociete, SetNomSociete] = useState("");
  const [ID, SetID] = useState("");
  const [SerialNumber, SetSerialNumber] = useState("");
  const [NomMachine, SetNomMachine] = useState("");

  const [data2] = useMutation(Creat_Machine);

  const { error, loading, data } = useQuery(GET_Societe);

  const CreationMachine = () => {
    if (NomMachine == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Vous avez oublier le Nom de la Machine",
      });
    } else if (NomSociete == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Vous avez oublier le Nom de la Societe",
      });
    } else if (ID == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Vous avez oublier la ID",
      });
    } else if (SerialNumber == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Vous avez oublier Serial Number",
      });
    } else {
      data2({
        variables: {
          CreateMachineInput: {
            nom_Societe: NomSociete,
            Serial_Number: SerialNumber,
            Nom_Machine: NomMachine,
            idMachine: ID,
          },
        },
      }).then((value) => {
        Swal.fire("complet!", "Vous Avez creer une Machine", "success");
        console.log("value of ", value);
      });
    }
  };

  if (!loading && !error) {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../images/../../../../images/logoMS.png")}
              style={{
                width: "50%",
                height: 100,
                resizeMode: "contain",
              }}
            />
          </View>

          <KeyboardAvoidingView enabled>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                underlineColorAndroid="black"
                placeholder="Enter Nom Machine"
                placeholderTextColor="black"
                returnKeyType="next"
                onChangeText={(val) => SetNomMachine(val)}
              />
            </View>

            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                underlineColorAndroid="#f000"
                placeholder="Enter ID Machine"
                placeholderTextColor="black"
                autoCapitalize="sentences"
                returnKeyType="next"
                onSubmitEditing={Keyboard.dismiss}
                onChangeText={(val) => SetID(val)}
              />
            </View>

            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                underlineColorAndroid="#f000"
                placeholder="Enter Serial Number"
                placeholderTextColor="#8b9cb5"
                keyboardType="phone-pad"
                autoCapitalize="sentences"
                returnKeyType="next"
                // keyboardType="numeric"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={true}
                onChangeText={(val) => SetSerialNumber(val)}
              />
            </View>

            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                underlineColorAndroid="black"
                placeholder="A quel Societe appartiens cette Machine"
                placeholderTextColor="black"
                autoCapitalize="sentences"
                returnKeyType="next"
                editable={false}
                value={NomSociete}
              />
            </View>

            <List.Section style={{ backgroundColor: "white" }}>
              <View style={{ backgroundColor: "white" }}>
                <List.Accordion
                  title="Choisir une Societe"
                  left={(props) => (     
                    <FontAwesome
                      {...props}
                      name="building-o"
                      size={20}
                      color="orange"
                    />
                  )}
                >
                  <FlatList
                    data={data.findAllSocieteexistant}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        onPress={() => {
                          SetNomSociete(item.nomSociete);
                          console.log(item.nomSociete);
                        }}
                      >
                        <List.Item
                          title={item.nomSociete}
                          left={(props) => (
                            <FontAwesome
                              {...props}
                              name="building-o"
                              size={17}
                              color="green"
                            />
                          )}
                        />
                      </TouchableOpacity>
                    )}
                  />
                </List.Accordion>
              </View>
            </List.Section>

            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={CreationMachine}
            >
              <Text style={styles.buttonTextStyle}>REGISTER</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
};
export default Creation_Machine_Screen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: "#7DE24E",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: "black",
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#E9EDFD",
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
  successTextStyle: {
    color: "black",
    textAlign: "center",
    fontSize: 18,
    padding: 30,
  },
});
