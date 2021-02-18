import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addUser} from '../reducers/users';

const Item = ({item, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>
      {item.name} {item.surname}
    </Text>
  </TouchableOpacity>
);

const Blue = ({navigation}) => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log('blue', users);
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#f9c2ff' : '#f9c2ff';

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          navigation.navigate('Profile', {user: item});
        }}
        style={{backgroundColor}}
      />
    );
  };
  const addNewUser = () => {
    const id = users.length + 1;
    dispatch(
      addUser({
        id,
        name: 'Иван',
        surname: 'Иванов',
        patronymic: 'Иванович',
        phone: '+7-900-123-45-67',
        cardnumber: '100500',
        blocked: 'Нет',
        countcoupon: '5',
        outcoupon: '0',
      }),
    );
  };

  console.log('вот они', users);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
        extraData={selectedId}
        ListHeaderComponent={
          <>
            <TouchableOpacity
              style={[styles.item]}
              onPress={() => navigation.navigate('Green')}>
              <Text style={styles.title}>Развлечься</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.item]} onPress={addNewUser}>
              <Text style={styles.title}>Добавить пользователя</Text>
            </TouchableOpacity>
            {/* <Button style={{height: 100}} title="Test animation" /> */}
          </>
        }
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
    fontFamily: 'signika-bold',
  },
});

export default Blue;
