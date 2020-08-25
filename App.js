import React from "react";
import { StyleSheet, Text, View,Image,TouchableOpacity } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Header } from 'react-native-elements';
import TransactionScreen from "./screens/fb";
import SearchScreen from "./screens/insta";

export default class App extends React.Component {
  render() {
    return 
    <View>
     <AppContainer />;
     <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Buzz App',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
         
      </View>
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction: { screen: fb },
  Search: { screen: insta }
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  },
  
});
