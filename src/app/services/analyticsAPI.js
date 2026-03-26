import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE } from '../../app/config/api';

const baseURL = `${API_BASE}/analytics`;

export const analyticsAPI = createApi({
  reducerPath: 'analytics',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getDashboard: builder.query({
      query: (event_name) => ({
        url: `/${event_name}/dashboard`,
        method: 'GET',
        credentials: 'include',
      }),
    }),
  }),
});

export const { useGetDashboardQuery } = analyticsAPI;
