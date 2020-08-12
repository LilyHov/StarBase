import React from 'react';
import ListItem from '../components/item-list';
import Api from '../API';

class PeopleList extends React.Component {
  state = {
    peoples: [],
  };
  async componentDidMount(): void {
    const peoples = await Api.getAllPeople();
    this.setState({
      peoples: peoples,
    });
  }

  render() {
    const {peoples} = this.state;
    return <ListItem data={peoples} />;
  }
}

export default PeopleList;
