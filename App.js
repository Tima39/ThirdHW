/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *r
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import ProfileButton from './src/components/profileButton';
import ProfileButton2 from './src/components/profileButton2';
import ProfileHeader from './src/components/profileHeader';
import ProfileLine from './src/components/profileLine';
import ProfileLine2 from './src/components/profileLine2';
import CouponNumber from './src/components/profileLine3';
import ProfileSeparator from './src/components/profileSeparator';

const App = () => {
  const user = {name: "Иван", surname: "Иванов", patronymic: "Иванович", phone: "+7-900-123-45-67", cardnumber: "100500", blocked: "Нет", countcoupon:"5", outcoupon: "0"};
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
     
      <ProfileHeader title={"О клиенте"}/>
      <ProfileSeparator/>
      <ProfileLine title={"Фамилия"} info={user ? `${user.surname}` : 'Нет данных'} bcolor={'white'}/>
      <ProfileLine title={"Имя"} info={user ? `${user.name}` : 'Нет данных'} bcolor={'white'}/>
      <ProfileLine title={"Отчество"} info={user ? `${user.patronymic}` : 'Нет данных'} bcolor={'white'}/>
      <ProfileLine title={"Телефон"} info={user ? `${user.phone}` : 'Нет данных'} bcolor={'white'}/>
      <ProfileLine title={"Номер карты"} info={user ? `${user.cardnumber}` : 'Нет данных'} bcolor={'white'}/>
      <ProfileLine title={"Клиент заблокирован?"} info={user ? `${user.blocked}` : 'Нет данных'} bcolor={'#52CC52'} fcolor={'white'}/>
      <ProfileLine title={"Количество купонов в БД:"} info={user ? `${user.countcoupon}` : 'Нет данных'} bcolor={'#3098F2'} fcolor={'white'}/>
      <ProfileLine title={"Выдано на руки:"} info={user ? `${user.outcoupon}` : 'Нет данных'} bcolor={'white'}/>
      <ProfileLine2/> 
      <CouponNumber/>
      <ProfileButton/>
      <ProfileButton2/>   
    </View>
  );
};

const styles = StyleSheet.create({
  
         
});

export default App;
