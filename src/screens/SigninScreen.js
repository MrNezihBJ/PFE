import {  useMutation, useQuery } from "@apollo/client";
import { Button } from "expo-ui-kit";
import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { LOGIN_USER } from "../graphQl/Auth/LoginQL";
import Loader from "./components/Loader";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");

  const [data] = useMutation(LOGIN_USER);

  const handleSubmitPress = () => {
    console.log("email ", email);
    console.log("pass", password);

   var onlyaccess=email
   console.log("this is my value",onlyaccess);

    data({
      variables: {
        LoginUserInput: {
          mail: email,
          password: password,
          
        },
      },
    }).then( async (res) => {
      
      console.log("value of acces token ====> ", res.data.login.access_token);
      console.log("value of acces ROLE ====> ",res.data.login.user.role);
      console.log("email of user =====>",res.data.login.user.mail);
      console.log("ID of user =====>",res.data.login.user._id);
      

     await AsyncStorage.setItem("Name",res.data.login.user.nom)
     await AsyncStorage.setItem("Role",res.data.login.user.role)
     await AsyncStorage.setItem("IDUser",res.data.login.user._id)
     
      if (res.data.login.access_token != "") 
        navigation.replace("DrawerNavigationRoutes");
      else alert("Problem");
    });

   //navigation.replace('DrawerNavigationRoutes');
  };

  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../images/.LogoMsTech.png")}
                style={{
                  width: "50%",
                  height: 100,
                  resizeMode: "contain",
                  margin: 30,
                }}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) => setEmail(UserEmail)}
                placeholder="Enter Email"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                /*onSubmitEditing=
              {
                  ()=>passwordInputRef.current && passwordInputRef.current.focus()
                }*/
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) => setPassword(UserPassword)}
                placeholder="Enter Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                // ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != "" ? (
              <Text style={styles.errorTextStyle}> {errortext} </Text>
            ) : null}
            <Button
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}
            >
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </Button>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default SigninScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignContent: "center",
  },
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
    
    height: 40,
    alignItems: "center",
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: "black",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    //borderRadius: 30,
    borderColor: "#dadae8",
  },
  registerTextStyle: {
    color: "#000000",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    padding: 10,
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
});

/**
 *  <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate("SignupScreen")}
            >
              New Here ? Register
            </Text>
 */
