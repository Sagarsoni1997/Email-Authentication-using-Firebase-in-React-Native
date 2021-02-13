import React, {useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import { View, TouchableOpacity, Text } from 'react-native';
import { AuthContext } from '../Navigation/AuthProvider';


const Stack = createStackNavigator();

export default function HomeStack() {
  const { logout } = useContext(AuthContext);
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home}  options={{
        title:'Welcome',
        headerRight: ()=>
        <View>
          <TouchableOpacity onPress={() => logout()}>
         <Text style={{marginRight:10, fontWeight:'bold'}}>Logout</Text>
          </TouchableOpacity>
        </View>
      }}/>
    </Stack.Navigator>
  );
  }