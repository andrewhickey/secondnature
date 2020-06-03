import React from 'react';
import {Image, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import {Recipe} from '../../store';
import {ScrollView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';

type RecipeDetailProps = {
  recipe: Recipe;
};
function RecipeDetail({recipe}: RecipeDetailProps) {
  return (
    <ScrollView>
      <Text h1>{recipe.title}</Text>
      <Image source={{uri: recipe.imageUrl}} style={styles.image} />
      <Text>
        <Text>{recipe.servings} servings</Text>
        <Text>
          {recipe.cookingTime} <Icon name="clock" />
        </Text>
      </Text>

      <Text>Ingredients</Text>
      {recipe.ingredients.map((ingredient, index) => (
        <Text key={index}>
          {ingredient.ingredient} - {ingredient.amount}
          {ingredient.orAmount ? ` or ${ingredient.orAmount}` : ''}
        </Text>
      ))}

      <Text>Method</Text>
      {recipe.method.map((method, index) => (
        <Text key={index}>{method}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
});

export {RecipeDetail};
