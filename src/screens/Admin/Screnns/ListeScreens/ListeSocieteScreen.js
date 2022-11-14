import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Component_Societe_Liste from '../../Component/Societecomponents/ListeSociete';

const ListeSocieteScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
    
     
        <View style={{alignItems: 'center',justifyContent: 'center'}}>

          <Text style={{fontSize: 20,textAlign: 'center',marginBottom: 16,fontWeight:"bold"}}>
            Liste Societes
          </Text>

        </View>
      

      <Component_Societe_Liste/>

    </SafeAreaView>
  );
};

export default ListeSocieteScreen;
