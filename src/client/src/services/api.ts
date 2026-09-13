import axios, { AxiosInstance } from 'axios';
import { GenerateCodeRequest, GenerateCodeResponse } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const generateCode = async (
  request: GenerateCodeRequest
): Promise<GenerateCodeResponse> => {
  try {
    const response = await api.post<GenerateCodeResponse>(
      '/api/generate-code',
      request
    );
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.error || 'Failed to generate code'
    );
  }
};
