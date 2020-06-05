import React from 'react';
import {Image} from 'react-native-elements';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Recipe} from '../../store';
import {fonts} from '../../shared';
import {ScrollView} from 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import {formatDuration} from 'date-fns';

type RecipeDetailProps = {
  recipe: Recipe;
};
function RecipeDetail({recipe}: RecipeDetailProps) {
  return (
    <ScrollView>
      <Image source={{uri: recipe.imageUrl}} style={styles.image} />
      <Text style={[fonts.bold, fonts.title, styles.textPadding]}>
        {recipe.title}
      </Text>
      <View style={styles.textPadding}>
        <Text style={[fonts.bold, styles.metrics]}>
          <Text>
            <FontAwesomeIcon name="cutlery" size={16} style={fonts.turquoise} />{' '}
            {recipe.servings} servings
          </Text>
          {'  '}
          <Text>
            <FontAwesomeIcon name="clock-o" size={16} style={fonts.turquoise} />{' '}
            {formatDuration({
              minutes: recipe.cookingTime,
            })}
          </Text>
        </Text>

        <Text style={[fonts.regular, fonts.subtitle]}>Ingredients</Text>
        <View style={styles.list}>
          {recipe.ingredients.map((ingredient, index) => (
            <View key={index} style={styles.listItem}>
              <FontAwesomeIcon
                name="circle"
                style={[fonts.lightOrange, styles.bullet, styles.listItemText]}
              />
              <Text style={[fonts.regular, styles.listItemText]}>
                {ingredient.amount}
                {ingredient.orAmount ? ` or ${ingredient.orAmount}` : ''},
                {ingredient.ingredient}
              </Text>
            </View>
          ))}
        </View>

        <Text style={[fonts.regular, fonts.subtitle]}>Method</Text>
        <View style={styles.list}>
          {recipe.method.map((method, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={[fonts.orange, styles.bullet, styles.listItemText]}>
                {index}.
              </Text>
              <Text style={[fonts.regular, styles.listItemText]}>{method}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  textPadding: {
    paddingHorizontal: 15,
  },
  metrics: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 16,
  },
  list: {
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  listItemText: {
    lineHeight: 22,
  },
  bullet: {
    marginRight: 6,
  },
});

export {RecipeDetail};
