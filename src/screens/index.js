import React from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RandomPlanet from '../components/random-planet';
import ItemList from '../components/item-list';

let store = createStore(combineReducers({count: '1'}));
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
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
