import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text } from "react-native";

//Icons
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

// Import Screens
import CustomSidebarMenu from "./Components/CustomSidebarMenu";

//Screens Client
import SubmitTickeScreen from "./Client/SubmitTicketScreen";
import RapportScreen from "./Client/ListeRapportScreen"
//import ListeMachineClient from "./Client/ListeMachineScreen";

//Screens Super Admin
import ListeMachineScreen from "./Admin/Screnns/ListeScreens/ListeMachineScreen";
import ListeSocieteScreen from "./Admin/Screnns/ListeScreens/ListeSocieteScreen";
import ListeUserScreen from "./Admin/Screnns/ListeScreens/ListeUserScreen";
import Creation_Machine_Screen from "./Admin/Screnns/CreationScreens/CreationMachineScreen";
import Creation_Societe_Screen from "./Admin/Screnns/CreationScreens/CreationSocieteScreen";
import CreateUserScreen from "./Admin/Screnns/CreationScreens/CreationUserScreen";
//Screens Intervenant 
import ListeRapport from "./Intervenant/ListeRapport";
import KPI from "./Intervenant/KPI";
import SubmitRapport from "./Intervenant/SubmitRapport";
import Screen2 from "./TeamLeader/ListeRapport";
import Screen3 from "./TeamLeader/SubmitRapport";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ListeTicketScreen from "./Client/ListeTicketScreen";
import HomeScreen from "./Client/HomeScreen";




const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

/*
const HomeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          //title: 'Home', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: 'black', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
 </Stack.Navigator>
  );
};*/

const DrawerNavigatorRoutes = () => {
  const [role, setRole] = useState("");
  useEffect(() => {
    getData();
  });

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("Role");
      setRole(value);
      //console.log('value===>', value);
      if (value !== null) {
        return value;
      }
    } catch (e) {
      console.log("error", e);
    }
  };
  //console.log( "role===>", role);

  if (role == "Super Admin")
    return (
      <Drawer.Navigator drawerContent={CustomSidebarMenu}>
        {/************************************************************************/}
        {/*Super admin */}

        <Drawer.Screen
    
          name="Liste Societes"
          component={ListeSocieteScreen}
          options={{
            drawerIcon: ({ focused }) => (
              <Ionicons
                name="business"
                size={focused ? 40 : 25}
                color="#7c7e80"
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Liste Machines"

          component={ListeMachineScreen}
          options={{
            drawerIcon: ({ focused }) => (
              <Fontisto
                name="shopping-pos-machine"
                size={focused ? 40 : 25}
                color="#7c7e80"
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Liste Users"
          component={ListeUserScreen}
          options={{
            drawerIcon: ({ focused }) => (
              <Entypo name="users" size={focused ? 40 : 25} color="#7c7e80" />
            ),
          }}
        />

        <Drawer.Screen
          name="Creation Societe"
          component={Creation_Societe_Screen}
          options={{
            drawerIcon: ({ focused }) => (
              <MaterialIcons
                name="add-business"
                size={focused ? 40 : 25}
                color="#7c7e80"
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Creation Machine"
          component={Creation_Machine_Screen}
          options={{
            drawerIcon: ({ focused }) => (
              <Fontisto
                name="shopping-pos-machine"
                size={focused ? 40 : 25}
                color="#7c7e80"
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Creation User"
          component={CreateUserScreen}
          options={{
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name="users-cog"
                size={focused ? 40 : 25}
                color="#7c7e80"
              />
            ),
          }}
        />

        {/*Super admin */}
        {/************************************************************************/}
      </Drawer.Navigator>
    );
  else if (role == "Client") {
    return (
      <Drawer.Navigator drawerContent={CustomSidebarMenu}>

        <Drawer.Screen
        name= "HomeScreen"
        component={HomeScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Entypo name="home" size={focused ? 40 : 25} color="#7c7e80" />
          ),
        }}
        />

        <Drawer.Screen
          name="Rédiger votre Ticket"
         
          component={SubmitTickeScreen}
          options={{
            drawerIcon: ({ focused }) => (
              <Entypo name="ticket" size={focused ? 40 : 25} color="#7c7e80" />
            ),
          }}
        />

       

        <Drawer.Screen
          name="Liste de Tickets"
          component={ListeTicketScreen}
          options={{
            drawerIcon: ({ focused }) => (
              <FontAwesome
                name="files-o"
                size={focused ? 40 : 25}
                color="#7c7e80"
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Liste de Rapports"
          component={RapportScreen}
          options={{
            drawerIcon: ({ focused }) => (
              <Entypo name="clipboard" size={focused ? 40 : 25} color="#7c7e80" />
            ),
          }}
        />

      {/** 
       * <Drawer.Screen
        name="Liste Machine"
        component={ListeMachineClient}
        options={{
          drawerIcon: ({ focused }) => (
            <Entypo name="clipboard" size={focused ? 40 : 25} color="#7c7e80" />
          ),
        }}
        />
      */}  
      </Drawer.Navigator>
    );
  } else if (role == "Intervenant") {
    return (
      <Drawer.Navigator drawerContent={CustomSidebarMenu}>

       {/* <Drawer.Screen
          name="Liste Ticket"
          component={ListeTicketI}
          options={{
            drawerIcon: ({ focused }) => (
              <FontAwesome
                name="files-o"
                size={focused ? 40 : 25}
                color="#7c7e80"
              />
            ),
          }}
        />*/}

        <Drawer.Screen
          name="Submit Rapport"
          component={SubmitRapport}
          options={{
            drawerIcon: ({ focused }) => (
              <Entypo name="clipboard" size={focused ? 40 : 25} color="#7c7e80" />
            ),
          }}
        />

        <Drawer.Screen
          name="Liste Rapport"
          component={ListeRapport}
          options={{
            drawerIcon: ({ focused }) => (
              <Entypo name="clipboard" size={focused ? 40 : 25} color="#7c7e80" />
            ),
          }}
        />

        <Drawer.Screen
          name="KPI"
          component={KPI}
          options={{
            drawerIcon: ({ focused }) => (
              <AntDesign
                name="piechart"
                size={focused ? 40 : 25}
                color="#7c7e80"
              />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  } else if (role == "Chef d'equipe") {
    return (
      <Drawer.Navigator drawerContent={CustomSidebarMenu}>
        
       

        <Drawer.Screen
          name="Screen2"
          component={Screen2}
          options={{
            drawerIcon: ({ focused }) => (
              <Entypo name="clipboard" size={focused ? 40 : 25} color="#7c7e80" />
            ),
          }}
        />

        <Drawer.Screen
          name="Screen3"
          component={Screen3}
          options={{
            drawerIcon: ({ focused }) => (
              <Entypo name="clipboard" size={focused ? 40 : 25} color="#7c7e80" />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }
};

export default DrawerNavigatorRoutes;
