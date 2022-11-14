import "react-native-gesture-handler";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import React from "react";
// Import Navigators from React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SigninScreen from "./src/screens/SigninScreen";
import SplashScreen from "./src/screens/SplashScreen";
import DrawerNavigationRoutes from "./src/screens/DrawerNavigationRoutes";
import ScreenUpdate from "./src/screens/Admin/Screnns/Update/UpdateMachine";

// Import Screens
const client = new ApolloClient({
  uri: "http://localhost:3500/graphql",
  cache: new InMemoryCache(),
});
const Stack = createStackNavigator();
const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="SigninScreen">
      <Stack.Screen
        name="SigninScreen"
        component={SigninScreen}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="DrawerNavigationRoutes"
            component={DrawerNavigationRoutes}
            options={{ headerShown: false }}
          />

      

          <Stack.Screen name="Test" component={ScreenUpdate} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
