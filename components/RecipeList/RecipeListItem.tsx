import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {ListItem} from 'react-native-elements';
import {Recipe} from 'store';
import {fonts} from '../../shared';

interface RecipeListItemProps {
  recipe: Recipe;
  index: number;
}

function RecipeListItem({recipe, index}: RecipeListItemProps) {
  const navigation = useNavigation();

  const navigateToBookmark = useCallback(() => {
    navigation.navigate('RecipeDetail', {
      index,
    });
  }, [index, navigation]);

  return (
    <ListItem
      onPress={navigateToBookmark}
      Component={TouchableOpacity}
      title={recipe.title}
      containerStyle={styles.itemContainer}
      titleStyle={[fonts.regular, styles.title]}
      leftAvatar={
        <Image source={{uri: recipe.imageUrl}} style={styles.avatar} />
      }
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingTop: 2,
  },
  avatar: {
    width: 92,
    height: 92,
  },
  title: {
    fontSize: 24,
  },
});

export {RecipeListItem};
