import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import toast from "react-hot-toast";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://139.59.0.25:5001/api/v1",
  prepareHeaders: (headers) => {
    const token =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithErrorHandling = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error) {
    if (result.error.status === 400) {
      console.error("Bad request error:", result.error);
    } else if (result.error.status === 500) {
      console.error("Server error:", result.error);
      toast.error("Server error. Please try again later.");
    } else if (result.error && result.error.originalStatus === 200) {
      if (
        typeof result.error.data === "string" &&
        result.error.data.startsWith("<!DOCTYPE")
      ) {
        console.error("Received unexpected HTML response:", result.error.data);
      }
    } else {
      console.error("Unexpected error:", result.error);
    }
  }

  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithErrorHandling,
  tagTypes: ["Banner", "AdminData", "Courses", "Admin", "Teachers", "Faq"],
  endpoints: () => ({}),
});

// Export the image URL as a constant
export const imageUrl = "http://139.59.0.25:5001";
