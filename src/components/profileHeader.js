import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ProfileHeader = ({title}) => {
  // const num = 5;
  // const name = "Maria";
  // const n = null;
  // let sum = 15;
  // const a = undefined;
  // const hasSon = false;
  // const user = {
  //   name: "Maria",
  //   surname: "Ivanova",
  //   phone: '+7(921)9999999',
  //   email: "sdds@der.ru",
  //   son: {
  //     name: "Ivan"
  //   }
  // }
  // const {surname} = user;
  // if (user.son) {

  // }
  // const names = ['Lena', 'KAtya'];

  // const menuItems = [
  //   {
  //     title: "Выход",
  //     icon: 'tt2.png',
  //     onClick: () => {console.log('TUT')}
  //   },
  //   {
  //     title: "История",
  //     icon: 'tt.png',
  //     onClick: () => {console.log('TUT')}
  //   }
  // ];
  // menuItems.push({
  //   title: "История",
  //   icon: 'tt.png',
  //   onClick: () => {console.log('TUT')}
  // })

 // console.log('menuItems', menuItems);
 //const sayHi = () => {
 //  console.log('Hi');
// }
 //sayHi();
 //const saySmth =(word) => {
 //  console.log(word);
 //}
 //saySmth(8);
  //const name = user ? user.name : 'Ivan';
  const headerTitle = title ?? 'Пользователь';
  //const greeting = user ? `Hello ${user.name} ${user.surname}` : 'Hello';
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