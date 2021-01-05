import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, Alert, TouchableOpacity } from 'react-native';

const ProfileButton = ({onPress}) => (
  <SafeAreaView style={styles.container}>
    <View>
      <TouchableOpacity
        style={{borderRadius: 2, backgroundColor:"#C9C9C9", justifyContent: 'center', alignItems: 'center', paddingVertical: 6}}
        onPress={onPress}
      >
        <Text style={{fontSize: 14, lineHeight: 24, color: '#959595'}}>ДОБАВИТЬ КУПОН</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    height: 36,
    justifyContent: 'center',
    marginHorizontal: 16,
    marginTop: 8,
  },
  
});

export default ProfileButton;