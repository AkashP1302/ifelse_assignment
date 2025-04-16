import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the response data type
export interface CardData {
  balance: number;
  auto_fill_date: string;
  auto_fill_amount: number;
}

// Create the API slice
export const cardDataApi = createApi({
  reducerPath: 'cardDataApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://01.fy25ey02.64mb.io/' }),
  endpoints: (builder) => ({
    getCardData: builder.query<CardData, void>({
      query: () => '', 
    }),
  }),
});

// Export the generated hook
export const { useGetCardDataQuery } = cardDataApi;
