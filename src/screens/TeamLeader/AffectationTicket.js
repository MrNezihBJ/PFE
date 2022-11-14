import {View,Text,TouchableOpacity,StyleSheet} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { List } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";
import { Get_Ticket } from "../../graphQl/Read/GetTicketQL";
import { useQuery } from "@apollo/client";


const ScreenAffectation = () => {

  const [data]= useQuery(Get_Ticket)

 let DateTicket=""
 let HeureTicket=""

return(
  <View>
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
              data={data.findAllTicketexistant}
              renderItem={({ item }) => (
                <View style={{ backgroundColor: "lightblue" }}>
                  <TouchableOpacity
                    onPress={() => console.log("okey")}
                    >
                      <View>
                        
                        <View style={{justifyContent:"flex-start"}}>
                          <Text>
                            creer le {(DateTicket=item.createdAt.toString().substr(0, 10))}
                          </Text>
                          <Text>
                            a {(HeureTicket=item.createdAt.toString().substr(11, 5))}
                          </Text>
                        </View>

                        <View>
                          <Text>
                            Societe: {item.NomSociete}
                          </Text>
                          <Text>
                            NomUser: {item.NomUser}
                          </Text>
                          <Text>

                          </Text>
                        </View>

                      </View>
                    </TouchableOpacity>

                  <View style={{ backgroundColor: "#fcfba7", height: 20 }}>

                  </View>

                </View>
              )}
            />
          </List.Accordion>
</View>
)

}
export default ScreenAffectation


const styles = StyleSheet.create({
 
})





