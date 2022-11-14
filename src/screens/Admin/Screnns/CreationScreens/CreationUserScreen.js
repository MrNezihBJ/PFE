import { useMutation, useQuery } from "@apollo/client";
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
import { Creat_User } from "../../../../graphQl/Creat/CreateUserQL";
import Swal from 'sweetalert2'
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons'; 

import { List } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";
import { GET_Societe } from "../../../../graphQl/Read/GetSocieteQl";

const CreateUserScreen = () => {

  const {error,loading,data} = useQuery(GET_Societe);
  
  const [Nom, SetNom] = useState("");
  const [Prenom, SetPrenom] = useState("");
  const [Password, SetPassword] = useState("");
  const [Mail, SetMail] = useState("");
  const [Societe, SetSociete] = useState("");
  const [Numero_Telephone, SetNumero_Telephone] = useState("");
  const [Role, SetRole] = useState("");
  //const [LandingPage, SetLandingPage] = useState("")

  const [data2] = useMutation(Creat_User);
 
  const CreationUS = () => {
  
      console.log('%cCreationUserScreen.js line:38 object', 'color: #007acc;', {
        CreateUserInput: 
        {
          
          nom: Nom,
          prenom: Prenom,
          password: Password,
          mail: Mail,
          societe: Societe,
          Numero_Telephone: Numero_Telephone,
          role: Role,
         // landingpage: LandingPage
        }
      });
      
      
if (Nom=="") 
{
Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Vous avez oublier le Nom',
})}
else if  (Prenom=="") 
{
Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Vous avez oublier le Prenom',
})}
else if  (Password=="") 
{
Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Vous avez oublier le Password',
})}
else if  (Mail=="") 
{
Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Vous avez oublier le Mail',
})}
else if  (Numero_Telephone=="") 
{
Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Vous avez oublier le Numero de Telephone',
})}
else if  (Societe=="") 
{
Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Vous avez oublier le Societe',
})}
else if  (Role=="") 
{
Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Veuiller choisir un Role',
})}
else {     
     data2({
          variables: {
            CreateUserInput: {
              nom: Nom,
              prenom: Prenom,
              password: Password,
              mail: Mail,
              societe: Societe,
              Numero_Telephone: Numero_Telephone,
              role: Role,
              //landingpage: LandingPage

            }
          }
        }).then((value) => {
          Swal.fire( ' complet!','','success');
          console.log("value of ", value);
        });}
  };
  if (!loading && !error)
  {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle=
        {{
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../../../images/logoMS.png")}
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
              placeholder="Enter Nom"
              placeholderTextColor="black"
              autoCapitalize="sentences"
              returnKeyType="next"
              onChangeText={(val) => SetNom(val)}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="black"
              placeholder="Enter Prenom"
              placeholderTextColor="black"
              returnKeyType="next"
              onChangeText={(val2) => SetPrenom(val2)}
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter Password"
              placeholderTextColor="black"
              secureTextEntry={true}
              onChangeText={(val3) => SetPassword(val3)}
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter Email"
              placeholderTextColor="black"
              keyboardType="email-address"
              returnKeyType="next"
              onChangeText={(val4) => SetMail(val4)}
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Enter Numero Telephone"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              keyboardType="numeric"
              blurOnSubmit={true}
              onChangeText={(val5) => Number(SetNumero_Telephone(val5))}
            />
          </View>


          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Enter Nom Societe"
              placeholderTextColor="black"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              editable = {false}
              value={Societe}
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Choisir Role ci dessous"
              placeholderTextColor="black"
              autoCapitalize="sentences"
              returnKeyType="next"
              value={Role}
              onSubmitEditing={Keyboard.dismiss}
              editable = {false}
            />
          </View>

{/*Accordion liste Societe*/} 

<List.Section style={{backgroundColor:"white"}}>
  <View style={{backgroundColor:"white"}}>  
    <List.Accordion
      title="Choisir une Societe"
      left={props => <FontAwesome {...props} name="building-o" size={20} color="orange" />}>
        <FlatList
          data={data.findAllSocieteexistant}
          renderItem={({ item }) => (
            <TouchableOpacity 
            onPress={()=> {
            SetSociete(item.nomSociete);
            console.log(item.nomSociete)}
            } >
              <List.Item   
              title={item.nomSociete}
              left={props => <FontAwesome {...props} name="building-o" size={17} color="green" />}/>
            </TouchableOpacity>
            )}/>
    </List.Accordion>      
  </View> 
</List.Section>

{/*Accordion liste Societe*/}
          

  <List.Section style={{backgroundColor:"white"}}>

    <View style={{backgroundColor:"white"}}>  
    
      <List.Accordion
        title="Choisir un role"
        left={props => <FontAwesome5 {...props} name="users" size={24} color="orange" />}>
    
        <TouchableOpacity onPress={() => SetRole("Chef d'equipe")} >
        <List.Item 
        title="Chef d'equipe"
        left={props => <FontAwesome5  {...props} name="user-secret" size={20} color="black" />} 
        />
        </TouchableOpacity>
    
        <TouchableOpacity onPress={() => SetRole("Intervenant")}>
        <List.Item title="Intervenant"   
        left={props => <FontAwesome5 {...props} name="user-md" size={20} color="green" />}  />
        </TouchableOpacity>
    
        <TouchableOpacity onPress={() => SetRole("Client")}>
        <List.Item 
        title="Client"
        left={props => <FontAwesome5 {...props} name="user" size={20} color="blue" />} 
        />
        </TouchableOpacity>
    
      </List.Accordion>
      
    </View>
    
    </List.Section>

             {/*Landing Page*/}
              <View >
                <Text style={{fontWeight:"bold",fontSize:20}}>
                    Slectioner Landing Page for client
                </Text>

                <View style={{flexDirection:"row",justifyContent:"space-between"}} >

                    <View style={{flexDirection:"column"}}>
                      <TouchableOpacity onPress={()=>
                        {
                    //SetLandingPage("DashboardScreen")
                    console.log("ok");}
                        } >
                      <Image style={{
                        height: 200,
                        width: 120,
                        marginLeft:10
                      }}
                      source={require("../../../../images/Dashboar.jpg")}/>
                      </TouchableOpacity>
                    
                    <Text style={{fontWeight:"bold"}}> 
                       Screen
                    </Text>
                  </View>

                  <View style={{flexDirection:"column"}}>
                    <TouchableOpacity  onPress={
            ()=> {
                 //SetLandingPage("SubmitScreen")
                 
                 console.log("ok");
                  } 
                  }>
                     <Image style={{
                        height: 200,
                        width: 120,
                        marginRight:10
                      }}
                      source={require("../../../../images/submit.PNG")}/>
                      </TouchableOpacity>
                   
                      <Text style={{fontWeight:"bold"}}>
                      Submit Screen
                      </Text>
                    </View>
                  </View>
                </View>
                {/*Landing Page*/}
                
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={CreationUS}
          >
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>

        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}};
export default CreateUserScreen;

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
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15, 
    backgroundColor:"#E9EDFD",

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

