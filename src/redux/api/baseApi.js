import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    // baseUrl: "http://192.168.10.8:5001/api/v1",
    prepareHeaders: (headers) => {
      const token =
        localStorage.getItem("authToken") ||
        sessionStorage.getItem("authToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });

  const refreshToken = Cookies.get("refreshToken");

  let result = await baseQuery(args, api, extraOptions);

  // console.log("API request result:", result);

  if (result.error) {
    if (result.error.status === 500) {
      const refreshResult = await baseQuery(
        {
          url: "/auth/refresh-token",
          method: "POST",
          body: { refreshToken: refreshToken },
        },
        api,
        extraOptions
      );

      if (refreshResult?.data?.data) {
        localStorage.removeItem("authToken");
        localStorage.setItem(
          "authToken",
          refreshResult?.data?.data?.accessToken
        );

        result = await baseQuery(args, api, extraOptions);
      } else {
        console.error("Refresh token invalid or expired. Logging out...");
        localStorage.removeItem("authToken");
        localStorage.removeItem("refreshToken");
        sessionStorage.removeItem("authToken");
        sessionStorage.removeItem("refreshToken");
        toast("Access token has expired, Please login again.");
        window.location.replace("/auth/login");
      }
    } else if (result.error.status === 400) {
      console.error("Bad request error:", result.error);
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
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Banner", "AdminData"],
  endpoints: () => ({}),
});

// Export the image URL as a constant
export const imageUrl = "http://206.189.231.81:5000";
