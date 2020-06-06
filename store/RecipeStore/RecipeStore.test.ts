import nock from 'nock';
import {recipes} from '../recipes';
import {RecipeStore} from './RecipeStore';

describe('RecipeStore tests', () => {
  it('can be instantiated', () => {
    const recipeStore = new RecipeStore('http://localhost/recipes');
    expect(recipeStore).not.toBe(undefined);
  });

  it('fetches recipes and stores them in state', async () => {
    nock('http://localhost').get('/recipes').reply(200, recipes);

    const recipesStore = new RecipeStore('http://localhost/recipes');
    expect(recipesStore.recipes).toHaveLength(0);
    expect(recipesStore.fetching).toBe(false);
    expect(recipesStore.finished).toBe(false);
    expect(recipesStore.errorMessage).toEqual('');

    const fetchPromise = recipesStore.fetch();

    expect(recipesStore.fetching).toBe(true);
    expect(recipesStore.finished).toBe(false);

    await fetchPromise;

    expect(recipesStore.fetching).toBe(false);
    expect(recipesStore.finished).toBe(true);
    expect(recipesStore.recipes).toHaveLength(recipes.length);
  });

  it('handles http errors and stores the response', async () => {
    const mock = nock('http://localhost')
      .persist()
      .get('/recipes')
      .reply(500, 'Server error');

    const recipesStore = new RecipeStore('http://localhost/recipes');
    expect(recipesStore.recipes).toHaveLength(0);
    expect(recipesStore.fetching).toBe(false);
    expect(recipesStore.finished).toBe(false);
    expect(recipesStore.errorMessage).toEqual('');

    const fetchPromise = recipesStore.fetch();

    expect(recipesStore.fetching).toBe(true);
    expect(recipesStore.finished).toBe(false);

    await fetchPromise;

    expect(recipesStore.fetching).toBe(false);
    expect(recipesStore.finished).toBe(false);
    expect(recipesStore.recipes).toHaveLength(0);
    expect(recipesStore.errorMessage).toEqual('Server error');

    mock.persist(false);
  });
});
