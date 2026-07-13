import { TMDB_V3_API_KEY } from "src/constant";
import { tmdbApi } from "./apiSlice";

export type ConfigurationType = {
  images: {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: string[];
    logo_sizes: string[];
    poster_sizes: string[];
    profile_sizes: string[];
    still_sizes: string[];
  };
  change_keys: string[];
};

export const extendedApi = tmdbApi.injectEndpoints({
  endpoints: (builder) => ({
    getConfiguration: builder.query<ConfigurationType, void>({
      query: () => ({
        url: "/configuration",
        params: {
          api_key: TMDB_V3_API_KEY,
        },
      }),
    }),
  }),
});

export const { useGetConfigurationQuery } = extendedApi;