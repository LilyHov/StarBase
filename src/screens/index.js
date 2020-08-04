import React from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RandomPlanet from '../components/random-planet';
import ItemList from '../components/item-list';
import MyTheme from '../theme';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: MyTheme.colors.primary,
      }}>
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
        name="People"
        component={ItemList}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="alien" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Planets"
        component={RandomPlanet}
        options={{
          tabBarIcon: ({color, size}) => (
            <IonIcons name="planet" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Starships"
        component={RandomPlanet}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="star-four-points"
              color={color}
              size={size}
            />
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
      <NavigationContainer theme={MyTheme}>
        <MyTabs />
      </NavigationContainer>
    </Provider>
  );
}
