import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import TabNavigator from './TabNavigator';
import HomeScreen from '../Screens/HomeScreen';
import DrawerNavigations from './DrawerNavigations';
import PospondScreen from '../Screens/PospondScreen';
import CompletScreen from '../Screens/CompletScreen';
import CancelScreen from '../Screens/CancelScreen';
import PendingDetailScreen from '../Screens/PendingDetailScreen';
import OutgingDetailScreen from '../Screens/OutgingDetailScreen';
import SubmitFormScreen from '../Screens/SubmitFormScreen';
import SplashScreen from '../Screens/SplashScreen';
import LoginScreen from '../Screens/LoginScreen';



const Stack = createNativeStackNavigator()

function StackNavigations(props) {
   return (
      <Stack.Navigator>
         <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
         <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
         <Stack.Screen name='Drawer' component={DrawerNavigations} options={{ headerShown: false }} />
         <Stack.Screen name='TabNavigator' component={TabNavigator}

            options={{
               title: 'Pending',
               headerStyle: {
                  backgroundColor: '#FFA448',
               },
               headerTintColor: '#fff',
               headerTitleStyle: {
                  fontWeight: 'bold',
               },
            }}

         />
         <Stack.Screen name='Pospond' component={PospondScreen}

            options={{
               title: 'Pospond',
               headerStyle: {
                  backgroundColor: '#BD4294',
               },
               headerTintColor: '#fff',
               headerTitleStyle: {
                  fontWeight: 'bold',
               },
            }}

         />
         <Stack.Screen name='Complet' component={CompletScreen}

            options={{
               title: 'Completed',
               headerStyle: {
                  backgroundColor: '#34B948',
               },
               headerTintColor: '#fff',
               headerTitleStyle: {
                  fontWeight: 'bold',
               },
            }}

         />
         <Stack.Screen name='Cancel' component={CancelScreen}

            options={{
               title: 'Canceled',
               headerStyle: {
                  backgroundColor: '#E1354B',
               },
               headerTintColor: '#fff',
               headerTitleStyle: {
                  fontWeight: 'bold',
               },
            }}

         />

         <Stack.Screen name='PendingDetailScreen' component={PendingDetailScreen} />
         <Stack.Screen name='OutgingDetailScreen' component={OutgingDetailScreen} />
         <Stack.Screen name='SubmitFormScreen' component={SubmitFormScreen} />
         

      </Stack.Navigator>
   );
}

export default StackNavigations;






