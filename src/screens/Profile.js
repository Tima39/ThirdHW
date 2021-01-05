/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *r
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { useEffect } from 'react';
import {
  StyleSheet,
  View, ScrollView
} from 'react-native';
import ProfileButton from '../components/profileButton';
import ProfileButton2 from '../components/profileButton2';
import ProfileHeader from '../components/profileHeader';
import ProfileLine from '../components/profileLine';
import ProfileLine2 from '../components/profileLine2';
import CouponNumber from '../components/profileLine3';
import ProfileSeparator from '../components/profileSeparator';

const Profile = ({navigation, route}) => {
  
  const {user} = route.params;
  const [count, setCount] = useState(0);
  const [isFull, setIsFull] = useState(false);
  useEffect(() => {
    setCount(7);
  },[]);
  useEffect(() => {
    console.log("useEffect count",count);
    if (count===10) {
      setIsFull(true);
    } 
  },[count]);

  //const user = {JSON.stringify(user)}
  //const user = {name: "Иван", surname: "Иванов", patronymic: "Иванович", phone: "+7-900-123-45-67", cardnumber: "100500", blocked: "Нет", countcoupon:"5", outcoupon: "0"};
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView>
      <ProfileHeader title={"О клиенте"}/>
      <ProfileSeparator/>
      <ProfileLine title={"Фамилия"} info={user ? `${user.surname}` : 'Нет данных'} bcolor={'white'}/>
      <ProfileLine title={"Имя"} info={user ? `${user.name}` : 'Нет данных'} bcolor={'white'}/>
      <ProfileLine title={"Отчество"} info={user ? `${user.patronymic}` : 'Нет данных'} bcolor={'white'}/>
      <ProfileLine title={"Телефон"} info={user ? `${user.phone}` : 'Нет данных'} bcolor={'white'}/>
      <ProfileLine title={"Номер карты"} info={user ? `${user.cardnumber}` : 'Нет данных'} bcolor={'white'}/>
      <ProfileLine title={"Клиент заблокирован?"} info={user ? `${user.blocked}` : 'Нет данных'} bcolor={'#52CC52'} fcolor={'white'}/>
      <ProfileLine title={"Количество купонов в БД:"} info={user ? `${count}` : 'Нет данных'} bcolor={isFull ? "red":'#3098F2'} fcolor={'white'}/>
      <ProfileLine title={"Выдано на руки:"} info={user ? `${user.outcoupon}` : 'Нет данных'} bcolor={'white'}/>
      <ProfileLine2/> 
      <CouponNumber/>
      <ProfileButton onPress={() => setCount(count+1)}/>
      <ProfileButton2/>
      </ScrollView>   
    </View>
  );
};

const styles = StyleSheet.create({
  
         
});

export default Profile;
