import { api } from "../api/baseApi";

const userSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    admin: builder.query({
      query: () => {
        return {
          method: "GET",
          url: "/user?role=ADMIN",
        };
      },
    }),
    students: builder.query({
      query: () => {
        return {
          method: "GET",
          url: "/students",
        };
      },
      providesTags: ["Students"],
    }),
    teachers: builder.query({
      query: () => {
        return {
          method: "GET",
          url: "/teachers/all",
        };
      },
      providesTags: ["Teachers"],
    }),
    addTeacher: builder.mutation({
      query: (data) => {
        console.log("aserga", data);
        return {
          method: "POST",
          url: "/admin/create-appointed-teacher",
          body: data,
        };
      },
      invalidatesTags: ["Teachers"],
    }),
    teacherById: builder.query({
      query: (id) => {
        return {
          method: "GET",
          url: `teachers/${id}`,
        };
      },
    }),
    reviewByTeacherById: builder.query({
      query: (id) => {
        return {
          method: "GET",
          url: `/reviews/teachers/${id}`,
        };
      },
    }),
    studentById: builder.query({
      query: (id) => {
        return {
          method: "GET",
          url: `/students/${id}`,
        };
      },
    }),
    deleteStudent: builder.mutation({
      query: (id) => {
        return {
          method: "DELETE",
          url: `/students/delete/${id}`,
        };
      },
      invalidatesTags: ["Students"],
    }),
  }),
});

export const {
  useAdminQuery,
  useStudentsQuery,
  useTeachersQuery,
  useTeacherByIdQuery,
  useStudentByIdQuery,
  useAddTeacherMutation,
  useDeleteStudentMutation,
  useReviewByTeacherByIdQuery,
} = userSlice;
