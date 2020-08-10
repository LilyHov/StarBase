import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  ScrollView,
  Button,
} from 'react-native';
import SwapiService from '../../services/swapi-service';
import PropTypes from 'prop-types';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({planet});
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 17) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const {
      planet: {id, name, population, rotationPeriod, diameter},
    } = this.state;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerInfo}>
          <Text style={styles.name}>{name}</Text>
          <Image
            source={{
              uri: `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`,
            }}
            style={styles.tinyLogo}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.paramName}>Population</Text>
          <Text style={styles.paramValue}>{population}</Text>
          <Text style={styles.paramName}>Rotation Period</Text>
          <Text style={styles.paramValue}>{rotationPeriod}</Text>
          <Text style={styles.paramName}>Diameter</Text>
          <Text style={styles.paramValue}>{diameter}</Text>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  paramValue: {
    color: 'white',
  },
  headerInfo: {},
  details: {

  },
  paramName: {
    fontSize: 16,
    color: 'white',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  container: {
    backgroundColor: 'black',
    padding: 20,
    marginTop: Platform.OS === 'ios' ? 35 : 0,
    flex: 1,
  },
  tinyLogo: {
   // width: 250,
    height: 300,
  },
});
