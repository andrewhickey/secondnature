import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {ListItem} from 'react-native-elements';
import {Recipe} from 'store';

interface RecipeListItemProps {
  recipe: Recipe;
  index: number;
}

function RecipeListItem({recipe, index}: RecipeListItemProps) {
  const navigation = useNavigation();

  const navigateToBookmark = useCallback(() => {
    navigation.navigate('RecipeDetail', {
      recipeIndex: index,
    });
  }, [index, navigation]);

  return (
    <ListItem
      onPress={navigateToBookmark}
      Component={TouchableOpacity}
      title={recipe.title}
      containerStyle={styles.itemContainer}
      titleStyle={styles.titleText}
      leftAvatar={<View />}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingTop: 2,
  },
  titleText: {
    // fontFamily: 'AvenirLTStd-Medium',
    // color: VERY_DARK_GREY,
    fontSize: 16,
    marginTop: 2,
  },
});

export {RecipeListItem};
