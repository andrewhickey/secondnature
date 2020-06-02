import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Recipe, recipes as mockRecipes} from '../../store';
import {RecipeListItem} from './RecipeListItem';

function RecipeList() {
  const recipes: Recipe[] = mockRecipes;

  const keyExtractor = useCallback((recipe: Recipe, index: number) => {
    // not great as a key, I guess we'd have an objectID from a real api
    return index.toString();
  }, []);

  const renderItem = useCallback(
    ({item, index}: {item: Recipe; index: number}) => (
      <RecipeListItem recipe={item} index={index} />
    ),
    [],
  );

  return (
    <FlatList
      refreshing={false}
      showsHorizontalScrollIndicator={false}
      style={styles.flatList}
      keyExtractor={keyExtractor}
      data={recipes}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    width: '100%',
  },
});

export {RecipeList};
