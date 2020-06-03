import React from 'react';
import {RecipeDetail} from '../components';
import {recipes} from '../store';
import {RecipesStackParamList} from '../navigationTypes';
import {RouteProp} from '@react-navigation/core';

type RecipeDetailScreenRouteProp = RouteProp<
  RecipesStackParamList,
  'RecipeDetail'
>;

type RecipeDetailScreenProps = {
  route: RecipeDetailScreenRouteProp;
};

function RecipeDetailScreen({route}: RecipeDetailScreenProps) {
  const {index} = route.params;
  const recipe = recipes[index];

  return <RecipeDetail recipe={recipe} />;
}

export {RecipeDetailScreen};
