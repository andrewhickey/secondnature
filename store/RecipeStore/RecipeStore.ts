import {observable} from 'mobx';
import axios from 'axios';
import {Recipe} from '../types';

class RecipeStore {
  endpoint: string;

  @observable recipes: Recipe[] = [];
  @observable fetching = false;
  @observable finished = false;
  @observable errorMessage = '';

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  fetch = async () => {
    try {
      this.fetching = true;
      const response = await axios.get(this.endpoint);
      this.recipes = response.data as Recipe[];
      this.finished = true;
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        this.errorMessage = error.response.data || error.errorMessage;
      } else if (error.request) {
        this.errorMessage = error.errorMessage;
      } else {
        // Something happened in setting up the request that triggered an Error
        throw error;
      }
    }

    this.fetching = false;
  };
}

export {RecipeStore};
