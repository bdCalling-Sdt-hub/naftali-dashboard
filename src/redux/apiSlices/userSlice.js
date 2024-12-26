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
        console.log("Calling students");
        return {
          method: "GET",
          url: "/students",
        };
      },
    }),
    teachers: builder.query({
      query: () => {
        return {
          method: "GET",
          url: "/teachers/all",
        };
      },
    }),
    teacherById: builder.query({
      query: (id) => {
        return {
          method: "GET",
          url: `teachers/${id}`,
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
  }),
});

export const {
  useAdminQuery,
  useStudentsQuery,
  useTeachersQuery,
  useTeacherByIdQuery,
  useStudentByIdQuery,
} = userSlice;
