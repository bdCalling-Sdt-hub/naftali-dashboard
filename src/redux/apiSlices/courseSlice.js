import { api } from "../api/baseApi";

const courseSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllCourses: builder.query({
      query: () => {
        return {
          method: "GET",
          url: "/courses",
        };
      },
      providesTags: ["Courses"],
    }),
    addCourses: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: "/courses",
          body: data,
        };
      },
      invalidatesTags: ["Courses"],
    }),
  }),
});

export const { useGetAllCoursesQuery, useAddCoursesMutation } = courseSlice;
