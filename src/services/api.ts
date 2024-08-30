import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Property } from "../types/property";
import { ZodError } from "zod";
import { PropertySchema } from "../schemas/properties";

class ApiService {
  private api: AxiosInstance;

  constructor(baseURL: string) {
    this.api = axios.create({ baseURL });
  }

  private async request<T>(
    method: "get" | "post" | "put" | "delete",
    url: string,
    data?: any
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.api.request({
        method,
        url,
        data,
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `API request failed: ${
            error.response?.data?.message || error.message
          }`
        );
      } else {
        throw new Error(`API request failed: ${error}`);
      }
    }
  }

  public async getProperties(): Promise<Property[]> {
    const properties = await this.request<Property[]>("get", "/properties");
    if (!Array.isArray(properties)) {
      throw new Error("API response is not an array");
    }

    try {
      properties.forEach((property) => {
        PropertySchema.parse(property);
      });
    } catch (error) {
      if (error instanceof ZodError) {
        throw new Error(`Validation failed: ${error.message}`);
      } else {
        throw new Error("API request failed");
      }
    }

    return properties;
  }
}

const apiService = new ApiService("http://localhost:3001");

export default apiService;
