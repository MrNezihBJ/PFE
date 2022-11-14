import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView} 
  from 'react-native';
import { useMutation } from '@apollo/client';
import { Creat_Societe } from '../../../../graphQl/Creat/CreatSocieteQL';
import Swal from 'sweetalert2'

const Creation_Societe_Screen = () => {
  
  const [NomSociete , SetNomSociete ] = useState("");
  const [Gouvernerat, SetGouvernerat] = useState("");
  const [Fix, SetFix] = useState("");
  const [Email, SetEmail] = useState("");
  const [Region, SetRegion] = useState("");
  const [Adresse, SetAdresse] = useState("");

  const [data] = useMutation(Creat_Societe);

  const Register = () =>
  {
    if (NomSociete=="") 
    {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Vous avez oublier le Nom de la Societe',
    })}
    else if  (Gouvernerat=="") 
    {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Vous avez oublier le Gouvernerat',
    })}
    else if  (Region=="") 
    {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Vous avez oublier la Region',
    })}
    else if  (Adresse=="") 
    {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Vous avez oublier Adresse',
    })} 
    else if  (Email=="") 
    {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Vous avez oublier le Email',
    })}  
    else if  (Fix=="") 
    {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Vous avez oublier le Fix',
    })}
   else {
  data({
    variables: {
      CreateSocieteInput: 
      {
        nomSociete: NomSociete,
        gouvernerat: Gouvernerat,
        fix: Fix,
        Email: Email,
        region: Region,
        adresse: Adresse,
      }
    }
  }).then
(
    (value) => 
  {
    Swal.fire( 'complet!','Vous Avez creer une Societe','success');
    console.log("value of ", value);
  }
); 
};}
    

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
    
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle=
        {{justifyContent: 'center',alignContent:'center'}}>
         
        <View style={{alignItems:'center'}}>
            <Image
              source={require('../../../../images/logoMS.png')}
              style=
              {{
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
              placeholder="Enter Nom Societe"
              placeholderTextColor="black"
              autoCapitalize="sentences"
              returnKeyType="next"
              onChangeText={(val) => SetNomSociete(val)}
              />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="black"
              placeholder="Enter gouvernerat"
              placeholderTextColor="black"
              returnKeyType="next"
              onChangeText={(val) => SetGouvernerat(val)}

            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter region"
              placeholderTextColor="black"
              onChangeText={(val) => SetRegion(val)}
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter Adresse"
              placeholderTextColor="black"
              onChangeText={(val) => SetAdresse(val)}
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter Email"
              placeholderTextColor="black"
              keyboardType="email-address"
              returnKeyType="next"
              onChangeText={(val) => SetEmail(val)}
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Enter Numero Fix"
              placeholderTextColor="black"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              onChangeText={(val) => SetFix(val)}
            />
          </View>

      

          
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={Register}>

              <Text style={styles.buttonTextStyle}>
                REGISTER
                </Text>
          </TouchableOpacity>

        </KeyboardAvoidingView>

      </ScrollView>

    </View>
  );
};
export default Creation_Societe_Screen;
 
const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
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
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});