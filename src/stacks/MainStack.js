import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import ListScreen from '../pages/ListScreen';
import EditScreen from '../pages/EditScreen';

const MainStack = createStackNavigator();

//screen navigation
export default () => (
  <MainStack.Navigator>
    <MainStack.Screen name="List" component={ListScreen} />
    <MainStack.Screen name="Edit" component={EditScreen} />
  </MainStack.Navigator>
);
