import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet,Image } from 'react-native';

export default class TransactionScreen extends React.Component {
    
  render() {
      return(
<Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.setaswall.com%2Ffacebook-wallpapers%2Ffacebook-wallpapers-14-2560-x-1600%2F&psig=AOvVaw2HimI64-TmSJt2_Gr3YrEy&ust=1598457564112000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKipntPctusCFQAAAAAdAAAAABAD',
          }}
        />
      )
      
      }

    
       
      }
  
  

  const styles = StyleSheet.create({
    imageIcon: {
      width: 150,
      height: 150,
      marginLeft: 95,
    }
  });