import React from 'react';
import { Text, View,Image } from 'react-native';

export default class Searchscreen extends React.Component {
    render() {
      return (
        <View >
          <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://image.shutterstock.com/image-photo/kiev-ukraine-october-9-2016-260nw-499761802.jpg',
          }}
        />
        </View>
      );
    }
  }