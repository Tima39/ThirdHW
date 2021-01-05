import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from "../reducers/users";

// const User = [
//   {name: "Иван", surname: "Иванов", patronymic: "Иванович", phone: "+7-900-123-45-67", cardnumber: "100500", blocked: "Нет", countcoupon:"5", outcoupon: "0"},
//   {name: "Сергей", surname: "Сидоров", patronymic: "Иванович", phone: "+7-900-123-45-67", cardnumber: "100500", blocked: "Нет", countcoupon:"5", outcoupon: "0"},
//   {name: "Измаил", surname: "Игнатов", patronymic: "Иванович", phone: "+7-900-123-45-67", cardnumber: "100500", blocked: "Нет", countcoupon:"5", outcoupon: "0"}
// ];


const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.name} {item.surname}</Text>
  </TouchableOpacity>
);

const Blue = ({navigation}) => {
  const users = useSelector(state => state);
  const dispatch = useDispatch();
  console.log("blue",users);
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#f9c2ff" : "#f9c2ff";

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id)
           navigation.navigate('Profile', {user:item})
      }}
        style={{ backgroundColor }}
      />
    );
  };
  const addNewUser=()=>{
    console.log("ok")
    dispatch(addUser({id:"4", name: "Иван", surname: "Иванов", patronymic: "Иванович", phone: "+7-900-123-45-67", cardnumber: "100500", blocked: "Нет", countcoupon:"5", outcoupon: "0"}
  ))
  }
    
  console.log("вот они",users)
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[]}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        ListHeaderComponent={
          <TouchableOpacity 
            style={[styles.item]}
            onPress={addNewUser}
          >
            <Text style={styles.title}>Добавить пользователя</Text>
          </TouchableOpacity>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Blue ;