import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const Test2 = () => {
  return (
<View>
  <View style={{backgroundColor:"#C3F8FF",height:71,width:400,justifyContent:"space-between"}}>

    <View style={{flexDirection:"row"}} >
      <Image style={{
            height: 50,
            width: 50,
            borderRadius: 20,
          }}
          source={require("../../../images/images.png")}/>

        <View style={{flexDirection:"column"}}>
          <Text style={{color:'#5A6ACB', fontWeight: "bold"}}>
            Nezih.BenJemia
          </Text>
          <Text style={{fontWeight: "bold"}}>
            Je n'arrive pas a me connecté
          </Text>
        </View>
    </View>

  </View>

  <View style={{backgroundColor:"#FFEBAD",flexDirection:"row",height:47,width:400}}>
      <View style={{flexDirection:"column"}}  >
            <Text style={{justifyContent:"flex-start",color:'#C5C7CD'}}>
                Updated X 
            </Text>
            <Text style={{justifyContent:"flex-start",color:'#C5C7CD'}}>
                days ago
            </Text>
      </View>
    
      <View style={{flexDirection:"column",justifyContent:"center"}}>
            <Text style={{fontWeight: "bold"}}>
              May 26, 2022
            </Text>
            <Text>
                6:30PM
            </Text>
      </View>

        <View  style={{justifyContent:"flex-end"}}>
            <TouchableOpacity style={{
              height:24,
              width: 80,
              borderRadius:100,
              backgroundColor:"#29CC97"
              }} >
                <Text style={{textAlign: 'center',fontWeight: "bold",color:"#FFFFFF"}}>
                Finie 
                </Text>
            </TouchableOpacity>
        </View>
    </View>
</View>
    
  );
}
export default Test2;

const styles = StyleSheet.create({
  Backitem: {
    flexDirection: "row",
    backgroundColor: "#BEEFC3",
    padding: 20,
  },
  Backitem2: {
    flexDirection: "row",
    backgroundColor: "#F8F5BA",
    padding: 15,
    margin: 2,
  },
  buttonStyle: {
    backgroundColor: "#29CC97",
    height: 24,
    width: 79.40298461914062,
    borderRadius: 100,
    textAlign: "center",
  },
});




