import React from 'react';
import {Text, TouchableOpacity,
 
  View,
} from 'react-native';


const Red = (props) => {
   const {navigation} = props;
    return (
    <View style={{backgroundColor: 'red', flex: 1}}>
        <TouchableOpacity
        style={{backgroundColor:"white", justifyContent: 'center', alignItems: 'center', paddingVertical: 8}}
        onPress={() => navigation.goBack()}
      >
        <Text style={{fontSize: 14, lineHeight: 24, color: '#E02329'}}>ЗАВЕРШИТЬ РАБОТУ С КЛИЕНТОМ</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Red;