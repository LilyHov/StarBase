import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import SwapiService from '../../services/swapi-service';

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
      <View style={styles.container}>
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
      </View>
    );
  }
}
const styles = StyleSheet.create({
  paramValue: {
    color: 'white',
  },
  headerInfo: {},
  details: {
    ...StyleSheet.absoluteFillObject,
    width: 200,
    left: 180,
    paddingTop: 30,
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
    borderColor: '#72767a',
    borderRadius: 4,
    borderWidth: 1,
    shadowColor: 'grey',
    marginTop: 50,
    margin: 20,
    backgroundColor: 'black',
  },
  tinyLogo: {
    width: 150,
    height: 150,
    backgroundColor: 'black',
  },
});
