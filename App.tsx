/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {RecipeDetailScreen, RecipeListScreen} from './screens';
import {RecipesStackParamList} from './navigationTypes';

const RecipesStack = createStackNavigator<RecipesStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <RecipesStack.Navigator>
        <RecipesStack.Screen name="RecipeList" component={RecipeListScreen} />
        <RecipesStack.Screen
          name="RecipeDetail"
          component={RecipeDetailScreen}
        />
      </RecipesStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
