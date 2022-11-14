import * as React from "react";
import { TouchableOpacity, View, TextInput } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Text, Surface } from "react-native-paper";
import { StyleSheet } from "react-native";
import { List } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { GET_MACHINES } from "../../graphQl/Read/GetMachineQL";
import { useMutation, useQuery } from "@apollo/client";
import { Image } from "react-native-animatable";
import { useState } from "react";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Swal from "sweetalert2";
import { Creat_Ticket } from "../../graphQl/Creat/creationTicket";
import { LinearGradient } from "expo-linear-gradient";

/*const Upload_File=gql`
mutation uploadFile($file: Upload!){
  uploadFile(file: $file){url}
}
`*/

const SubmitTickeScreen = ({ navigation }) => {
  const { error, loading, data } = useQuery(GET_MACHINES);

 // const[uploadFile]=useMutation(Upload_File,
   // {onCompleted: data =>console.log(data)})



  const [dataIN] = useMutation(Creat_Ticket);

  const [NomSociete, SetNomSociete] = useState("");
  const [NomMachine, SetNomMachine] = useState("");
  const [Id_Machine, SetId_Machine] = useState("");
  const [TextProbleme, SetTextProbleme] = useState("");
  const [TitreTicket, SetTitreTicket] = useState("");

  const [IDUser, setIDUser] = useState("");
  const [NomUser, SetNomUser] = useState("");

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("Name");
      const value2 = await AsyncStorage.getItem("IDUser");
      SetNomUser(value);
      setIDUser(value2);

      if (value !== null && value2 !== null) {
        return value2;
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  const AnnulerTicket = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Voulez vous annuler votre Ticket!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Annuler!", "Your file has been deleted.", "success");
        SetNomUser("");
        SetNomSociete("");
        SetNomMachine("");
        SetId_Machine("");
        SetTextProbleme("");
        SetTitreTicket("");
      }
    });
  };
  const CreateTicket = () => {
    if (NomMachine == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Vous avez oublier de choisir une Machine",
      });
    } else if (TitreTicket == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Vous avez oublier le Titre",
      });
    } else if (TextProbleme == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Vous avez oublier le contenu du problem",
      });
    } else {
      console.log("IDUSER===>", IDUser);
      console.log(NomUser);
      console.log(NomSociete);
      console.log(NomMachine);
      console.log(Id_Machine);
      console.log(TextProbleme);
      console.log(TitreTicket);

      dataIN({
        variables: {
          CreateTicketInput: {
            NomUser: NomUser,
            NomSociete: NomSociete,
            NomMachine: NomMachine,
            Id_Machine: Id_Machine,
            TextProbleme: TextProbleme,
            TitreTicket: TitreTicket,
            IdUser:IDUser,
            
          },
        },
      }).then((value) => {
        navigation.replace("DrawerNavigationRoutes");
        Swal.fire(" complet!", "", "success");
        console.log("value of ", value);
      });
    }
  };

  const AjouFILE = async () => {
    const { value: file } = await Swal.fire({
      title: "Select image",
      input: "file",
      inputAttributes: {
        accept: "image/*",
        "aria-label": "Upload your profile picture",
      },
    });

    if (file) {
      //const Newfile=e.target.file[0]
      const reader = new FileReader();
      reader.onload = (e) => {
        Swal.fire({
          title: "votre image a éte envoyé",
          imageUrl: e.target.result,
          imageAlt: "The uploaded picture",
        });
        //return uploadFile({variables: {Newfile}})
        
      };
      reader.readAsDataURL(file);
    }
  };

  if (!loading && !error) {
    return (
      <View>
        
        <Surface elevation={4}>
          <LinearGradient
            colors={["#a6b3e0", "#d2dbfa"]}
            style={styles.linearGradient}
          >
            <View style={{ height: 7 }}></View>

            <View style={{ flexDirection: "row" }}>
              <View style={{ width: 5 }}></View>
              <Text>Machine choisie:</Text>
              <Text> </Text>
              <Text style={{ fontWeight: "bold", color: "grey" }}>
                {NomMachine}
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={{ width: 5 }}></View>
              <Text>ID choisie:</Text>
              <Text> </Text>
              <Text style={{ fontWeight: "bold", color: "grey" }}>
                {Id_Machine}
              </Text>
            </View>
          </LinearGradient>
        </Surface>

        <View style={{height:7}}></View>
        <View>
          <View style={{ backgroundColor: "white", height: 10 }}></View>
          <List.Accordion
            title="Choisir une machine"
            left={(props) => (
              <MaterialIcons
                {...props}
                name="computer"
                size={24}
                color="black"
              />
            )}
          >
            <FlatList
              data={data.findAllMachine}
              renderItem={({ item }) => (
                <View style={{ backgroundColor: "lightblue" }}>
                  <TouchableOpacity
                    onPress={() => {
                      SetNomSociete(item.nom_Societe);
                      SetNomMachine(item.Nom_Machine);
                      SetId_Machine(item.idMachine);
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        height: 100,
                        width: 800,
                      }}
                    >
                      <Image
                        style={{
                          height: 80,
                          width: 80,
                          marginRight: 10,
                          marginTop: 10,
                          marginBottom: 10,
                          marginLeft: 5,
                        }}
                        source={
                          item.Nom_Machine === "Newton 3"
                            ? require("../../images/NEWTON3.jpg")
                            : item.Nom_Machine === "TPE"
                            ? require("../../images/TPE.jpg")
                            : item.Nom_Machine === "DAB"
                            ? require("../../images/DAB.jpg")
                            : require("../../images/MACHINE.jpg")
                        }
                      />

                      <View style={{ flexDirection: "column" }}>
                        <View style={{ flexDirection: "row", marginBottom: 5 }}>
                          <Text style={styles.TextA}>
                            {item.Nom_Machine}
                          </Text>
                        </View>

                        <View style={{ flexDirection:"row", marginBottom:5}}>
                          <Text style={styles.TextA}>
                            Appartiens a {item.nom_Societe}
                          </Text>
                        </View>

                        <View style={{ flexDirection: "row", marginBottom: 5 }}>
                          <Text style={styles.TextA}>ID:{item.idMachine}</Text>
                        </View>

                        <View style={{ flexDirection: "row", marginBottom: 5 }}>
                          <Text style={styles.TextA}>
                            Serial number: {item.Serial_Number}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <View
                    style={{ backgroundColor: "#fcfba7", height: 20 }}
                  ></View>
                </View>
              )}
            />
          </List.Accordion>
        </View>

        <ScrollView style={{ backgroundColor: "white" }}>
          <View style={{ backgroundColor: "white", height: 10 }}></View>
          <View style={{ width: 5 }}></View>
          <Text style={styles.Text}>Titre du Ticket 📰 </Text>
          <View style={{ backgroundColor: "white", height: 7 }}></View>

          <TextInput
            style={styles.TextINP1}
            placeholder="Donner un titre ou un mot clée"
            placeholderTextColor={"grey"}
            onChangeText={(x2) => SetTitreTicket(x2)}
          />
          <View style={{ backgroundColor: "white", height: 10 }}></View>
          <View style={{ width: 5 }}></View>
          <Text style={{ fontSize: 22, marginLeft: 7 }}>Description</Text>
          <View style={{ backgroundColor: "white", height: 7 }}></View>
          <View style={{ justifyContent: "center" }}>
            <TextInput
              style={styles.TextINP2}
              numberOfLines={15}
              multiline
              onChangeText={(x) => SetTextProbleme(x)}
            />
          </View>
        </ScrollView>
        <View style={{ backgroundColor: "white", height: 10 }}></View>
        <View style={{ justifyContent: "flex-end", backgroundColor: "white" }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <Surface style={{ borderRadius: 10 }} elevation={4}>
              <TouchableOpacity
                style={styles.BouttonAnnuler}
                onPress={AnnulerTicket}
              >
                <Text style={styles.TEXTAnnuler}>Annuler</Text>
              </TouchableOpacity>
            </Surface>

            <Surface style={{ borderRadius: 10 }} elevation={4}>
              <TouchableOpacity
                onPress={AjouFILE}
                style={{
                  borderRadius: 10,
                  width: 100,
                  height: 45,
                  backgroundColor: "#ffd700",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    paddingVertical: 10,
                    fontSize: 14,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Ajouter un fichier
                </Text>
              </TouchableOpacity>
            </Surface>
            <Surface style={{ borderRadius: 10 }} elevation={4}>
              <TouchableOpacity
                style={styles.BouttonValider}
                onPress={CreateTicket}
              >
                <Text style={styles.TEXTValider}>Valider</Text>
              </TouchableOpacity>
            </Surface>
          </View>
        </View>
      </View>
    );
  }
};
export default SubmitTickeScreen;

const styles = StyleSheet.create({
  Text: {
    fontSize: 22,
    marginBottom: 3,
    marginLeft: 7,
  },
  TextINP1: {
    backgroundColor: "white",
    size: 30,
    height: 40,
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
  },
  TextINP2: {
    backgroundColor: "white",
    size: 20,
    marginLeft: "5%",
    marginRight: "5%",
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
  },
  TextA: {
    color: "black",
    fontWeight: "bold",
  },
  BouttonValider: {
    borderRadius: 10,
    width: 100,
    height: 45,
    backgroundColor: "lightgreen",
  },
  TEXTValider: {
    color: "white",
    paddingVertical: 10,
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
  },
  BouttonAnnuler: {
    borderRadius: 10,
    width: 100,
    height: 45,
    backgroundColor: "red",
  },
  TEXTAnnuler: {
    color: "white",
    paddingVertical: 10,
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  linearGradient: {
    justifyContent: "center",
  },
});






/**
 * 
 * <TextInput
          style={styles.TextINP}
          placeholder="Choisier la Machine qui contient le problem"
          editable={false}
          value={`Machine choisie: ${NomMachine}`}
        />

      <TextInput
          style={styles.TextINP}
          placeholder="ID choisie"
          editable={false}
          value={`ID choisie: ${Id_Machine}`}
        />
 */
