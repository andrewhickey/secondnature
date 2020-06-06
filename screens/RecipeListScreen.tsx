import {observer} from 'mobx-react-lite';
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {RecipeList} from '../components';
import {useStores} from '../store';
import {LoadingScreen} from './LoadingScreen';

const RecipeListScreen = observer(() => {
  const {recipeStore} = useStores();

  // make sure that data required for this screen is fetched
  useEffect(() => {
    recipeStore.fetch();
  }, [recipeStore]);

  if (recipeStore.fetching) {
    return <LoadingScreen />;
  }

  if (recipeStore.errorMessage) {
    return <Text>{recipeStore.errorMessage}</Text>;
  }

  return <RecipeList recipes={recipeStore.recipes} />;
});

export {RecipeListScreen};
