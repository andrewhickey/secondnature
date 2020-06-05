import React, {useEffect} from 'react';
import {RecipeDetail} from '../components';
import {recipes} from '../store';
import {RecipesStackParamList} from '../navigationTypes';
import {RouteProp, NavigationProp} from '@react-navigation/core';

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

function RecipeDetailScreen({route, navigation}: RecipeDetailScreenProps) {
  const {index} = route.params;
  const recipe = recipes[index];

  useEffect(() => {
    navigation.setOptions({title: recipe.title});
  }, [recipe, navigation]);

  return <RecipeDetail recipe={recipe} />;
}

export {RecipeDetailScreen};
