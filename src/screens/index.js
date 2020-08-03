import React from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RandomPlanet from '../components/random-planet';
import ItemList from '../components/item-list';

let store = createStore(combineReducers({count: '1'}));
const Tab = createBottomTabNavigator();
const MyTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(28, 28, 30)',
    text: 'rgb(255, 255, 255)',
    card: 'rgb(28, 28, 30)',
    notification: 'rgb(255, 69, 58)',
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
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
