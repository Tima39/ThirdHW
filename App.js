import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import Profile from './src/screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Green from './src/screens/Green';
import Red from './src/screens/Red';
import Blue from './src/screens/Blue';
import { createStore } from 'redux';
import { Provider} from 'react-redux';
import usersReducer from './src/reducers/users';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'user',
  storage: AsyncStorage
};
const persistedReducer = persistReducer(persistConfig, usersReducer)
const store = createStore(persistedReducer);
const persistor = persistStore(store);

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const App = () => {
 
  return (
    
    <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={ProfileStack} />
          <Tab.Screen name="Settings" component={Green} />
        </Tab.Navigator>
      </NavigationContainer>
      </PersistGate>
    </Provider> 
  );
};
const ProfileStack = () => {
   return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Blue} />
        <Stack.Screen name="Red" component={Red} />
        <Stack.Screen name="Green" component={Green} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Blue" component={Blue} />
      </Stack.Navigator>
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
export default App;
