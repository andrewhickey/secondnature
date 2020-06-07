import axios from 'axios';
import {observable} from 'mobx';
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
    if (!this.fetching || this.finished) {
      try {
        this.fetching = true;
        const response = await axios.get(this.endpoint);
        this.recipes = response.data.recipes as Recipe[];
        this.finished = true;
        this.errorMessage = '';
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          this.errorMessage = error.response.data || error.errorMessage;
        } else if (error.request) {
          // there was no response from the server
          this.errorMessage = error.errorMessage;
        } else {
          // Something happened in setting up the request that triggered an Error
          throw error;
        }
      }

      this.fetching = false;
    }
  };
}

export {RecipeStore};
