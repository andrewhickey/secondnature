export type Ingredient = {
  ingredient: string;
  amount: string;
  orAmount?: string;
};

export type Recipe = {
  imageUrl: string;
  ingredients: Ingredient[];
  cookingTime: number;
  method: string[];
  servings: number;
  title: string;
};
