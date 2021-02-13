import React, { useState, useContext } from 'react';
import { AuthContext } from '../Navigation/AuthProvider';
import { View,
   Button, StyleSheet,
    Text, TextInput, TouchableOpacity, ImageBackground
   } from "react-native";
import SignUpScreen from '../Screens/SignUpScreen';


export default function Login({navigation}) {

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground blurRadius={2} style={styles.bgimg} 
    source={require('../Images/Login.jpg')}>
    <View style={styles.mainView}>
        <Text style={styles.mainText}>PLEASE LOGIN HERE</Text>
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

        <TextInput placeholder='Enter your Password'
         value={password}
         placeholderText='Password'
         onChangeText={userPassword => setPassword(userPassword)}
         secureTextEntry={true}
         style={styles.InputField}
        ></TextInput>

<TouchableOpacity style={styles.bottonDesign}
         onPress={() => login(email, password)}>
         <Text style={styles.bottonText}>LOGIN</Text>
        </TouchableOpacity>

        

<TouchableOpacity style={styles.dontHaveAccount}
 onPress={()=>navigation.navigate('SignUpScreen')}>
          <Text style={styles.dontHaveAccount}>Don't have account SignUp here</Text>
        </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  bgimg: {
    flex:1
  },

  mainView:{
    alignItems:'center',
    top:20,
    margin:5,
  },

  InputField:{
    borderWidth:1,
    backgroundColor:'#E1E9E7',
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
    backgroundColor:'#FF4848',
    borderRadius:15,
    margin:5
  },

  bottonText:{
    textAlign:'center',
    fontSize:16,
    padding:10
  },

  dontHaveAccount:{
    color:'black',
    margin:5,
    fontWeight:'bold'
  }

});

