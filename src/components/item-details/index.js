import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

const Record = ({item, field, label}) => {
  return (
    <View>
      <Text>{label}</Text>
      <Text>{item[field]}</Text>
    </View>
  );
};

export {Record};

export default class ItemDetails extends Component {
  state = {
    item: null,
    image: null,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData ||
      this.props.getImageUrl !== prevProps.getImageUrl
    ) {
      this.updateItem();
    }
  }

  updateItem() {
    const {itemId, getData, getImageUrl} = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId).then((item) => {
      this.setState({
        item,
        image: getImageUrl(item),
      });
    });
  }

  render() {
    const {item, image} = this.state;
    if (!item) {
      return <Text>Select a item from a list</Text>;
    }

    const {name} = item;

    return (
      <View>
        <Image source={`uri:${image}`} />
        <Text>{name}</Text>
        <Text>
          {React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {item});
          })}
        </Text>
      </View>
    );
  }
}
