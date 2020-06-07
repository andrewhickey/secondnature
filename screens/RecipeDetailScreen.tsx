import {NavigationProp, RouteProp} from '@react-navigation/core';
import {observer} from 'mobx-react-lite';
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {RecipeDetail} from '../components';
import {RecipesStackParamList} from '../navigationTypes';
import {useStores} from '../store';
import {LoadingScreen} from './LoadingScreen';

type RecipeDetailScreenRouteProp = RouteProp<
  RecipesStackParamList,
  'RecipeDetail'
>;
type RecipeDetailNavigationRouteProp = NavigationProp<
  RecipesStackParamList,
  'RecipeDetail'
>;

type RecipeDetailScreenProps = {
  route: RecipeDetailScreenRouteProp;
  navigation: RecipeDetailNavigationRouteProp;
};

const RecipeDetailScreen = observer(
  ({route, navigation}: RecipeDetailScreenProps) => {
    const {recipeStore} = useStores();
    const {index} = route.params;
    const recipe = recipeStore.recipes[index];

    useEffect(() => {
      navigation.setOptions({title: recipe.title});
    }, [recipe, navigation]);

    // make sure that data required for this screen is fetched
    useEffect(() => {
      console.log('RECIPESTORE FINISHED', recipeStore.finished);
      recipeStore.fetch();
    }, [recipeStore]);

    if (recipeStore.fetching) {
      return <LoadingScreen />;
    }

    if (recipeStore.errorMessage) {
      return <Text>{recipeStore.errorMessage}</Text>;
    }

    if (!recipe) {
      return <Text>404</Text>;
    }

    return <RecipeDetail recipe={recipe} />;
  },
);

export {RecipeDetailScreen};
