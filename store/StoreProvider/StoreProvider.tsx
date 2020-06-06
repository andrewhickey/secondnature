import React, {createContext, useContext, useState} from 'react';
import {RecipeStore} from '../RecipeStore';

const createStores = () => {
  // this should come from env variables, 12 factor app style
  const recipeStore = new RecipeStore(
    'https://www.secondnature.io/api/test-recipes',
  );

  const stores = {
    recipeStore,
  };

  return stores;
};

type StoreContextType = ReturnType<typeof createStores> | null;

const StoreContext = createContext<StoreContextType>(null);

type StoreProviderProps = {
  children?: React.ReactNode;
};
function StoreProvider({children}: StoreProviderProps) {
  const [stores] = useState(createStores());

  return (
    <StoreContext.Provider value={stores}>{children}</StoreContext.Provider>
  );
}

const useStores = () => {
  const stores = useContext(StoreContext);

  if (stores) {
    return stores;
  } else {
    throw new Error(
      'Stores not available, <StoreProvider /> must be in the tree',
    );
  }
};

export {StoreProvider, useStores};
