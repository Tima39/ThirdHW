import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ProfileLine2 = () => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.paragraph}>
      Осталось добавить: 5 шт
      </Text>
      
    </View>
  );
}

export default ProfileLine2;

const styles = StyleSheet.create({
  container: {
    height: 26,
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
        backgroundColor: 'white'
  },
  paragraph: {
    paddingTop: 10,
    fontSize: 14,
    color: '#3098F2',
    
  },
 
  });