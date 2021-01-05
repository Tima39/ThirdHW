import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const CouponLeftCount = ({count}) => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.paragraph}>
      Осталось добавить: {count} шт.
      </Text>
      
    </View>
  );
}

export default CouponLeftCount;

const styles = StyleSheet.create({
  container: {
    height: 26,
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
        backgroundColor: 'white',
       },
  paragraph: {
    paddingTop: 10,
    fontSize: 14,
    color: '#3098F2',
    
  },
 
  });