import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigations from './StackNavigations';
import HomeScreen from '../Screens/HomeScreen';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigations = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={HomeScreen} 
      options={{
        headerStyle: {
          backgroundColor: '#045F83',
        },
        headerTintColor: '#fff',
      }}
      
      />
    
    </Drawer.Navigator>
  );
};

export default DrawerNavigations;


