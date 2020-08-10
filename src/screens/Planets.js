import React from 'react';
import ListItem from '../components/item-list';
import Api from '../API';
import {Text} from 'react-native';
import PeopleModel from '../models/PeopleModel';

type Props = {
  peoples: Array<PeopleModel>,
};

class PeopleList extends React.Component {
  state = {
    peoples: [],
  }
  async componentDidMount(): void {
    const peoples = await Api.getAllPeople();
    this.setState({
      peoples: peoples,
    });
  }

  render() {
    const {peoples} = this.state;
    return (
      <Text>
        <ListItem peoples={peoples} />
      </Text>
    );
  }
}

export default PeopleList;
