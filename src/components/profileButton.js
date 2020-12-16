import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity } from 'react-native';

const ProfileButton = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <TouchableOpacity
        style={{backgroundColor:"green", justifyContent: 'center', alignItems: 'center', paddingVertical: 12}}
        onPress={() => Alert.alert('Simple Button pressed')}
      >
        <Text style={{fontSize: 16, lineHeight: 18, color: 'white'}}>Регистрация</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'center',
    marginHorizontal: 15,
    
  },
  
});

export default ProfileButton;