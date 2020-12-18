import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Image } from 'react-native';

const CouponNumber = () => {
  const [text, setText] = useState('');
  return (
    <View style={{height: 48, marginHorizontal: 16, marginTop: 8, flexDirection: 'row', borderRadius: 2, borderColor: "#C4C4C4", borderWidth: 1}}>
      
      <TextInput
        style={{height: 48, width: 224, marginLeft: 16, fontSize: 16, flexDirection: 'row'}}
        placeholder="Введите номер купона"
        onChangeText={text => setText(text)}
        defaultValue={text}   
      />
      <Image style={styles.logo} source={require('../components/1.png')}/>
    </View>
  );
}

export default CouponNumber;
const styles = StyleSheet.create({
logo: {
  marginTop: 9,
  marginLeft: 72,
  height: 30,
  width: 36,
}
});