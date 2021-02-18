import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {addUser} from '../../reducers/users';
import {connect} from 'react-redux';
import axios from 'axios';

class Users extends Component {
  state = {
    backgroundColor: 'yellow',
    buttonTitle: 'Следующий',
    breeds: [],
    catImage: '',
  };

  color = 'blue';
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  async componentDidMount() {
    const breeds = await axios({
      method: 'get',
      url: 'https://api.thecatapi.com/v1/breeds',
    });

    console.log('component DidMount', breeds);
  }

  changeColor = () => {
    this.setState({backgroundColor: 'purple'});
  };

  picture = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: 'https://api.thecatapi.com/v1/images/search',
      });
      this.setState({catImage: response.data[0].url});
      console.log(response.data[0].url);
    } catch (error) {
      console.log(error);
    }
  };

  newUser = () => {
    this.props.addUser({
      id: '5',
      name: 'Федор',
      surname: 'Иванов',
      patronymic: 'Иванович',
      phone: '+7-900-123-45-67',
      cardnumber: '100500',
      blocked: 'Нет',
      countcoupon: '5',
      outcoupon: '0',
    });
  };

  render() {
    const {catImage} = this.state;
    return (
      <View style={{backgroundColor: 'yellow', flex: 1}}>
        <TouchableOpacity onPress={this.changeColor}>
          <Text style={{fontSize: 24}}>{this.state.buttonTitle}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.newUser}>
          <Text style={{fontSize: 24}}>Новый юзер</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.picture}>
          <Text style={{fontSize: 24}}>Картиночка</Text>
        </TouchableOpacity>
        {catImage.length > 0 && (
          <Image
            resizeMode="contain"
            style={{flex: 1}}
            source={{uri: catImage}}
          />
        )}
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => dispatch(addUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
//export default Users;
