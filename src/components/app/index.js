import React from 'react';
import {Button, Text, View} from 'react-native';
import {Provider, connect} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

// Create our stack navigator
let RootStack = createStackNavigator();

let store = createStore(combineReducers({count: '1'}));
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/*<RootStack.Navigator>*/}
        {/*    <RootStack.Screen name="Planet Lists" component={RandomPlanet} />*/}
        {/*</RootStack.Navigator>*/}
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'rocket' : 'rocket';
              } else if (route.name === 'People') {
                iconName = focused ? 'rocket' : 'rocket';
              } else if (route.name === 'Planets') {
                iconName = focused ? 'rocket' : 'rocket';
              } else if (route.name === 'Starships') {
                iconName = focused ? 'rocket' : 'rocket';
              }

              // // You can return any component that you like here!
              // return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
          style={{backgroundColor: 'green'}}>
          <Tab.Screen name="Home" component={RandomPlanet} />
          <Tab.Screen name="People" component={ItemList} />
          <Tab.Screen name="Planets" component={RandomPlanet} />
          <Tab.Screen name="Starships" component={RandomPlanet} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
