import React, { useContext } from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';

import { AuthContext } from '../Navigation/AuthProvider';

export default function Home() {
  const { user } = useContext(AuthContext);
  return (
    <ImageBackground blurRadius={2} style={styles.bgimg} 
    source={require('../Images/Welcome.jpg')}>
    <View>
      <Text style={styles.welcomeText}>Welcome user {user.uid}</Text>
    </View>
    </ImageBackground>
  );
}



const styles = StyleSheet.create({
  bgimg: {
    flex:1,
  },

  welcomeText:{
    fontSize:20,
    color:'#fff',

  }

});