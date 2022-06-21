import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class ApiService {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'https://swapi.dev/api/',
    });
  }

  async get<T>(url: string, options: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    const response = await this.api.get(url, options);
    return response;
  }
}

export const apiService = new ApiService();
