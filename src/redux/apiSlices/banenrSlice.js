import { api } from "../api/baseApi";

const bannerSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getProfileBanner: builder.query({
      query: () => {
        return {
          url: `/banners/profile`,
          method: "GET",
        };
      },
      providesTags: ["Banner"],
    }),
    getHomeSlider: builder.query({
      query: () => {
        return {
          url: `/banners`,
          method: "GET",
        };
      },
      providesTags: ["Banner"],
    }),
    getBannerById: builder.query({
      query: (id) => {
        return {
          url: `/others/banner/${id}`,
          method: "GET",
        };
      },
    }),
    addProfileBanner: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: "/banners/add",
          body: data,
        };
      },
      invalidatesTags: ["Banner"],
    }),
    // updateBanner: builder.mutation({
    //   query: ({ data, id }) => {
    //     return {
    //       method: "PATCH",
    //       url: `/others/update-banner/${id}`,
    //       body: data,
    //     };
    //   },
    //   invalidatesTags: ["Banner"],
    // }),
    deleteProfileBanner: builder.mutation({
      query: (id) => {
        return {
          method: "DELETE",
          url: `/banners/delete/${id}`,
        };
      },
      invalidatesTags: ["Banner"],
    }),

    getSeminars: builder.query({
      query: () => {
        return {
          url: `/seminars`,
          method: "GET",
        };
      },
      providesTags: ["Seminar"],
    }),
    addSeminar: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: "/seminars",
          body: data,
        };
      },
      invalidatesTags: ["Banner"],
    }),
  }),
});

export const {
  useGetProfileBannerQuery,
  useGetHomeSliderQuery,
  useGetBannerByIdQuery,
  useAddProfileBannerMutation,
  useUpdateBannerMutation,
  useDeleteProfileBannerMutation,
  useGetSeminarsQuery,
  useAddSeminarMutation,
} = bannerSlice;
