import React from 'react';
import ItemList from '../item-list';
import {View} from 'react-native';
import SwapiService from '../../services/swapi-service';

export default class PeoplePage extends React.Component {
  swapiService = new SwapiService();

  state = {
    people: {},
  };

  constructor() {
    super();
    this.updatePlanet();
  }
  updatePlanet = () => {
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };
  render() {
    const {
      people: {id, name},
    } = this.state;
    return <ItemList people={this.people} />;
  }
}
