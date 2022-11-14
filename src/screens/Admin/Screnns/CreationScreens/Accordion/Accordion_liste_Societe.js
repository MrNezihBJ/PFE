import { useQuery } from "@apollo/client";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { List } from "react-native-paper";
import { GET_Societe } from "../../../../../graphQl/Read/GetSocieteQl";
import { FlatList } from "react-native-gesture-handler";


const Accordion_Liste_Societe = ()=>
{
  const {error, loading, data} = useQuery(GET_Societe);
  if (!loading && !error) {

    return(
<List.Section style={{backgroundColor:"white"}}>
  <View style={{backgroundColor:"white"}}>  
    <List.Accordion
      title="Choisir une Societe"
      left={props => <FontAwesome5 {...props} name="calendar-alt" size={20} color="orange" />}>

        <FlatList
          data={data.findAllSocieteexistant}
          renderItem={({ item }) => (
          <TouchableOpacity>
            <List.Item 
            title={item.nomSociete}
            left={props => <FontAwesome5 {...props} name="calendar-alt" size={17} color="green" />}/>
            </TouchableOpacity>
            )}/>
     
    
          
    
    </List.Accordion>      
  </View> 
</List.Section>)
}}
export default Accordion_Liste_Societe


