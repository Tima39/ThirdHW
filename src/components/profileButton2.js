import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, Alert, TouchableOpacity } from 'react-native';

const ProfileButton2 = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <TouchableOpacity
        style={{backgroundColor:"white", justifyContent: 'center', alignItems: 'center', paddingVertical: 8}}
        onPress={() => Alert.alert('Работа с клиентом завершена')}
      >
        <Text style={{fontSize: 14, lineHeight: 24, color: '#E02329'}}>ЗАВЕРШИТЬ РАБОТУ С КЛИЕНТОМ</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    height: 16,
    justifyContent: 'center',
    marginHorizontal: 41.5,
    marginTop: 30,
  },
  
});

export default ProfileButton2;