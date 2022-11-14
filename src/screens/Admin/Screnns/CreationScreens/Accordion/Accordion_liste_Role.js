import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { List } from "react-native-paper";
import React from "react";



const Accordion_Role = ()=>
{
    return(<List.Section style={{backgroundColor:"white"}}>

    <View style={{backgroundColor:"white"}}>  
    
      <List.Accordion
        title="Choisir un role"
        left={props => <FontAwesome5 {...props} name="users" size={24} color="orange" />}>
    
        <TouchableOpacity>
        <List.Item 
        title="Chef d'equipe"
        left={props => <FontAwesome5 {...props} name="user-secret" size={20} color="black" />} 
        />
        </TouchableOpacity>
    
        <TouchableOpacity>
        <List.Item title="Intervenant"   
        left={props => <FontAwesome5 {...props} name="user-md" size={20} color="green" />}  />
        </TouchableOpacity>
    
        <TouchableOpacity>
        <List.Item 
        title="Client"
        left={props => <FontAwesome5 {...props} name="user" size={20} color="blue" />} 
        />
        </TouchableOpacity>
    
      </List.Accordion>
    
    </View>
    
    </List.Section>)
}
export default Accordion_Role