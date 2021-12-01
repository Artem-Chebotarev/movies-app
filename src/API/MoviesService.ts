import {SITE_URL} from '../config/config';
import {IResponse} from '../types/api';

export default class MoviesService {
  static async getAll(): Promise<IResponse> {
    const response = await fetch(SITE_URL);

    const responseFromServer = response.json();

    return responseFromServer;
  }
}
