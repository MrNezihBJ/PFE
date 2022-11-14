import * as React from 'react';
import { List } from 'react-native-paper';
import { FontAwesome,FontAwesome5,Feather,Entypo  } from '@expo/vector-icons'; 
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AccordionUser = () => {

  //const [expanded, setExpanded] = React.useState(true);
  //const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section style={{backgroundColor:"white"}}>

    <View style={{backgroundColor:"white"}}>  

      <List.Accordion
        title="Filtre par Date"
        left={props => <FontAwesome5 {...props} name="calendar-alt" size={20} color="orange" />}>

        <TouchableOpacity>
        <List.Item 
        title="Le plus nouveaux"
        left={props => <FontAwesome5 {...props} name="calendar-alt" size={17} color="green" />} 
        />
        </TouchableOpacity>

        <TouchableOpacity>
        <List.Item title="Le plus ancien"
        left={props => <FontAwesome5 {...props} name="calendar-alt" size={17} color="red" />}  />
        </TouchableOpacity>
      </List.Accordion>

      <List.Accordion
        title="Filtre par Societe"
        left={props => <FontAwesome {...props} name="building" size={20} color="lightblue" />}
       >
        <List.Item title="Societe 1" />
        <List.Item title="Societe 2" />
      </List.Accordion>

      <List.Accordion
        title="Filtre par existance"
        left={props => <Feather {...props} name="user" size={20} color="red" />}>

        <TouchableOpacity>
        <List.Item title="Les User existant"/>
        
        </TouchableOpacity>

        <TouchableOpacity>
        <List.Item title="Les User Supprimer" />
        </TouchableOpacity>
      </List.Accordion>

    </View>

    </List.Section>
  );
};

export default AccordionUser;