import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

const CouponNumber = () => {
  const [text, setText] = useState('');
  return (
    <View style={{paddingLeft: 15, paddingRight: 15, paddingBottom: 12, paddingTop: 13}}>
      <TextInput
        style={{height: 43, paddingLeft: 15, fontSize: 16, borderWidth: 1, borderColor: "#C9C9C9", borderRadius: 2}}
        placeholder="Введите номер купона"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      
    </View>
  );
}

export default CouponNumber;