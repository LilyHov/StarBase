import React from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RandomPlanet from '../components/random-planet';
import ItemList from '../components/item-list';

const MyTheme = {
  dark: true,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(28, 28, 30)',
    text: 'rgb(255, 255, 255)',
    card: 'rgb(28, 28, 30)',
    notification: 'rgb(255, 69, 58)',
  },
};

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: MyTheme.colors.primary,
      }}
      theme={MyTheme}>
      <Tab.Screen
        name="Feed"
        component={RandomPlanet}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={ItemList}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={RandomPlanet}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
let store = createStore(combineReducers({count: '1'}));
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </Provider>
  );
}
