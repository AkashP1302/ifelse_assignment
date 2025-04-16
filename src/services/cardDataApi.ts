import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_API_URL } from './apiConfig';

// Define the response data type
export interface CardData {
  balance: number;
  auto_fill_date: string;
  auto_fill_amount: number;
}

// Create the API slice
export const cardDataApi = createApi({
  reducerPath: 'cardDataApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer token`);
      return headers;
    },
  }),  
  endpoints: (builder) => ({
    getCardData: builder.query<CardData, void>({
      query: () => '', 
    }),
  }),
});

// Export the generated hook
export const { useGetCardDataQuery } = cardDataApi;
