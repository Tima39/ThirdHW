import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ProfileHeader = ({title}) => {
  const headerTitle = title ?? 'Пользователь';
  return (
    <>
    <View style={styles.container} />
    <View style={styles.container2}>
      <Text style={styles.paragraph}>
      {headerTitle}
      </Text>
    </View>
        </>
  );
}

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    height: 24,
    padding: 0,
        backgroundColor: '#E02329'
  },
  container2: {
    height: 56,
    padding: 0,
    backgroundColor: '#E02329'

  },
  paragraph: {
    margin: 16,
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
   });