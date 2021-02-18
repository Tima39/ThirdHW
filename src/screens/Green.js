/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';

import { Image, StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { TouchableOpacity } from 'react-native';

const Green = ({navigation}) => {
  const [catImage, setCatImage] = useState('');
  const [catBreed, setCatBreed] = useState(undefined);
  const [catBreeds, setCatBreeds] = useState([]);
  const [loading, setLoading] = useState(false);
  // let loading = false;
  let otherBreed = {};
  // const [catNameBreed, setCatNameBreed] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      //setCatImage('https://cdn2.thecatapi.com/images/unPP08xOZ.jpg');
      console.log('request data');
      // loading = true;
      setLoading(true);
      try {
        const breeds = await axios({
          method: 'get',
          url: 'https://api.thecatapi.com/v1/breeds',
        });
        const breed = breeds.data[28];
        otherBreed = breed;
        // .id;
        // const breedName = breeds.data[28].name;
        setCatBreed(breed);
        console.log('set cat breed in main useeffect');
        setCatBreeds(breeds.data);

        // setCatNameBreed(breedName);
        console.log('порода', breed);
        // console.log('название', breedName);
        // const response = await axios({
        //   method: 'get',
        //   url: `https://api.thecatapi.com/v1/images/search?breed_id=${breed}`,
        // });
        // setCatImage(response.data[0].url);
        // console.log(response.data[0].url);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
      // .then(function (response) {
      //   console.log('get response');
      //   console.log(response.data[0].url);
      //   setCatImage(response.data[0].url);

      // })
      // .catch((error) => {
      //   console.log(error);
      // });
    };
    fetchData();

  }, []);

  useEffect(() => {
    console.log('catImage', catImage);
  }, [catImage]);

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  const chooseNewBreed = () => {
    if (!catBreeds || catBreeds.length === 0) {return;}
    const count = getRandomInt(catBreeds.length);
    const newBreed = catBreeds[count];
    setCatBreed(newBreed);
  };

  const loadNewCatByBreed = async (breed) => {
    console.log('loadNewCatByBreed');
    if (!breed || !breed.id) {
      return;
    }
    setLoading(true);
    try {
      const response = await axios({
        method: 'get',
        url: `https://api.thecatapi.com/v1/images/search?breed_id=${breed.id}`,
      });
      setCatImage(response.data[0].url);
      console.log(response.data[0].url);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    // const fetchData = async () => {
    //   if (!catBreed || !catBreed.id) {
    //     return;
    //   }
    //   try {
    //     const response = await axios({
    //       method: 'get',
    //       url: `https://api.thecatapi.com/v1/images/search?breed_id=${catBreed.id}`,
    //     });
    //     setCatImage(response.data[0].url);
    //     console.log(response.data[0].url);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchData();
    if (catBreed) {
      loadNewCatByBreed(catBreed);
    }
    console.log('catBreed useEffect', catBreed);
  }, [catBreed]);

  return (
    <View style={{flex: 1}}>
      <Text style={styles.title}>Название породы: {catBreed ? catBreed.name : 'Не найдено'}</Text>
      <TouchableOpacity
              style={[styles.item]}
              onPress={() => loadNewCatByBreed(catBreed)}>
              <Text style={styles.title}>Next</Text>
            </TouchableOpacity>
      <TouchableOpacity
              style={[styles.item]}
              onPress={() => chooseNewBreed()}>
              <Text style={styles.title}>Another breed</Text>
            </TouchableOpacity>
      {catImage.length > 0 && !loading && (
        <Image
          resizeMode="contain"

          style={{flex: 1}}
          source={{uri: catImage}}
        />
      )}
      <View style={{width: '100%', height: 100, justifyContent:'center', alignItems:'center'}}>

          <ActivityIndicator color="blue" size="large" animating={loading}/>

      </View>
    </View>

  );
};
const styles = StyleSheet.create({

  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: 'signika',
  },
});
export default Green;
