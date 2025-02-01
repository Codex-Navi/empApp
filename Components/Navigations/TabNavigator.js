import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import PendingWorkTab from '../TabNavigator/PendingWorkTab';
import OngoingWorkTab from '../TabNavigator/OngoingWorkTab';

const Tab = createMaterialTopTabNavigator();

function TabNavigator(props) {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Pending Work' component={PendingWorkTab} 
            options={{
              tabBarLabelStyle:{color:'#FFA448',fontWeight:'800',fontSize:16},
              tabBarIndicatorStyle: { backgroundColor: '#045F83',height:6 },
              }}
            />
            <Tab.Screen name='Ongoing Work' component={OngoingWorkTab}
             options={{
                tabBarLabelStyle:{color:'#FFA448',fontWeight:'800',fontSize:16},
                tabBarIndicatorStyle: { backgroundColor: '#045F83',height:6 },
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigator;

