import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ProfileLine = ({title, info, bcolor, fcolor}) => {

  return (
   <>
   <View style={styles.container} />
   <View style={{height: 50, backgroundColor: bcolor}}>
    <Text style={{marginLeft: 17,
      marginTop: 8,
      padding: 0,
      fontSize: 12,
      fontWeight: '400', color: fcolor}}>
     {title}
    </Text>
    <Text style={{marginLeft: 16,
      marginBottom: 8,
      padding: 0,
      fontSize: 16,
      fontWeight: '400', color: fcolor}}>
     {info}
    </Text>
   </View>
   </>
  );
}

export default ProfileLine;

const styles = StyleSheet.create({
  container: {
      height: 4,
      padding: 0,
      backgroundColor: 'white'
      
  },  
});