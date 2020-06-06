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
import {StyleSheet} from 'react-native';
import {RecipesStackParamList} from './navigationTypes';
import {RecipeDetailScreen, RecipeListScreen} from './screens';
import {fonts, COLORS} from './shared';
import {StoreProvider} from './store';

const RecipesStack = createStackNavigator<RecipesStackParamList>();

const App = () => {
  return (
    <StoreProvider>
      <NavigationContainer>
        <RecipesStack.Navigator
          screenOptions={{
            cardStyle: styles.card,
            headerTitleStyle: [fonts.regular, fonts.turquoise],
            headerBackTitleStyle: fonts.regular,
            headerTintColor: COLORS.ORANGE,
          }}>
          <RecipesStack.Screen
            options={{title: 'Second Nature recipes'}}
            name="RecipeList"
            component={RecipeListScreen}
          />
          <RecipesStack.Screen
            options={{title: '...'}}
            name="RecipeDetail"
            component={RecipeDetailScreen}
          />
        </RecipesStack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
  },
});

export default App;
