import Middleware from './middleware';
import HttpClient from '../network/httpClient';

const BASE_URL = 'https://swapi.dev/api';

const SECONDARY_URL = 'https://starwars-visualguide.com/assets/img';

const getClient = async (url: string, token: string) =>
  HttpClient.getInstance(url || BASE_URL);

export default class Api {
  static async getAllPeople() {
    try {
      const client = await getClient();
      const response = await client.get('/people/');
      return Middleware.parsePeoples(response.data.results);
    } catch (e) {
      throw new Error('something went wrong');
    }
  }

  static async getAllPlanets() {
    try {
      const client = await getClient();
      const response = await client.get('/planets/');
      return Middleware.parsePlanets(response.data.results);
    } catch (e) {
      throw new Error('something went wrong');
    }
  }
}
