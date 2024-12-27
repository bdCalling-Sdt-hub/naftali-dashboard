import { api } from "../api/baseApi";

const faqSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getFaqs: builder.query({
      query: () => {
        return {
          method: "GET",
          url: "/faq/get-all",
        };
      },
      providesTags: ["Faq"],
    }),
    addFaq: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: "/faq/add",
          body: data,
        };
      },
      invalidatesTags: ["Faq"],
    }),
    deleteFaq: builder.mutation({
      query: (id) => {
        return {
          method: "DELETE",
          url: `/faq/delete/${id}`,
        };
      },
      invalidatesTags: ["Faq"],
    }),
  }),
});

export const { useGetFaqsQuery, useAddFaqMutation, useDeleteFaqMutation } =
  faqSlice;
