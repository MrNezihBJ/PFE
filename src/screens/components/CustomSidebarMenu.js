import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

const CustomSidebarMenu = (props) => {

  const [Nom,setNom]=useState("")
  useEffect(()=> {getData()})

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('Name')
    setNom(value)
    console.log('value===>', value);
    if(value !== null) 
    { 
      return value
    }
  } catch(e) {console.log("error",e)}
} 


  return (
    <View style={stylesSidebar.sideMenuContainer}>

      <View style={stylesSidebar.profileHeader}>
        <View style={stylesSidebar.profileHeaderPicCircle}>
          <Text style={{ fontSize: 25, color: "#f59042" }}>
            {Nom.charAt(0).toUpperCase()}
          </Text>
        </View>
        <Text style={stylesSidebar.profileHeaderText}>
          {Nom}
        </Text>
      </View>
      
      <View style={stylesSidebar.profileHeaderLine} />

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />

        <DrawerItem
            label={() =>(<Text style={{color:"black",fontWeight:"bold"}}>Logout</Text>)}
            icon={({ focused}) => (<MaterialCommunityIcons 
            name="logout" 
            size={focused ? 40 : 25} 
            color="#7c7e80" 
            />
          )
        }

          onPress={() => {
           alert("Alert Title")
           props.navigation.toggleDrawer();                  
           props.navigation.replace('Auth');


           // A reparer c cassé
            /*
            Alert.alert(
              'Logout',
              'Are you sure? You want to logout?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Confirm',
                  onPress: () => {

                   props.navigation.toggleDrawer();

                   
                    props.navigation.replace('Auth');
                  },
                },
              ],
              {cancelable: false},
            );*/
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomSidebarMenu;

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    paddingTop: 40,
    color: "white",
  },
  profileHeader: {
    flexDirection: "row",
    backgroundColor: "#8cc6ff",
    padding: 15,
    textAlign: "center",
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: "white",
    backgroundColor: "#ffffff",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  profileHeaderText: {
    color: "white",
    alignSelf: "center",
    paddingHorizontal: 10,
    fontWeight: "bold",
    fontSize:18,
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: "#e2e2e2",
    marginTop: 15,
  },
});
