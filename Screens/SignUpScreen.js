import React, {useContext, useState} from 'react';
import { AuthContext } from '../Navigation/AuthProvider';
import { View,
   Button, StyleSheet, 
    Text, TextInput, TouchableOpacity, ImageBackground
   } from "react-native";
import LoginScreen from '../Screens/LoginScreen';

export default function SignUp({navigation}) {
  const { register } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground blurRadius={2} style={styles.bgimg} 
    source={require('../Images/SignUp.jpg')} >
    <View style={styles.mainView}>
        <Text style={styles.mainText}>PLEASE SIGNUP HERE </Text>
        <TextInput placeholder='Enter your Email'
         value={email}
         placeholderText='Email'
         onChangeText={userEmail => setEmail(userEmail)}
         autoCapitalize='none'
         keyboardType='email-address'
         autoCorrect={false}
         autoCompleteType='off'
        style={styles.InputField}
        ></TextInput>

        <TextInput placeholder='Enter your Password' placeH
        value={password}
        placeholderText='Password'
        onChangeText={userPassword => setPassword(userPassword)}
        secureTextEntry={true}
        style={styles.InputField}
        ></TextInput>

        <TouchableOpacity style={styles.bottonDesign}
         onPress={() => register(email, password)}>
         <Text style={styles.bottonText}>SIGN UP</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
          <Text style={styles.dontHaveAccount}>Already have account Login here</Text>
        </TouchableOpacity>

    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgimg: {
    flex:1,
  },

  mainView:{
    alignItems:'center',
    top:90,
    margin:5
  },

  InputField:{
    borderWidth:1,
    backgroundColor:'#fff',
    width:300,
    margin:5,
    borderRadius:15,
    padding:12
  },

  mainText:{
    textAlign:'center',
    fontSize:20,
    margin:5,
    color:'black',
    fontWeight:'bold',
    fontSize:25
  },

  bottonDesign:{
    width:100,
    height:40,
    backgroundColor:'#FF8B00',
    borderRadius:15,
    margin:5
  },

  bottonText:{
    textAlign:'center',
    fontSize:16,
    padding:10,
    color:'black'
  },

  dontHaveAccount:{
    color:'black',
    margin:5,
    fontSize:14,
    fontWeight:'bold'
  }

});