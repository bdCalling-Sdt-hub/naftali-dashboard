import { createBrowserRouter } from "react-router-dom";
import Auth from "../Layout/Auth/Auth";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Dashboard/Home";
import Users from "../Pages/Dashboard/Users";
import Admin from "../Pages/Dashboard/Admin";
import PrivacyPolicy from "../Pages/Dashboard/PrivacyPolicy";
import ChangePassword from "../Pages/Auth/ChangePassword";
import Login from "../Pages/Auth/Login";
import ForgotPassword from "../Pages/Auth/ForgotPassword";
import VerifyOtp from "../Pages/Auth/VerifyOtp";
import ResetPassword from "../Pages/Auth/ResetPassword";
import NotFound from "../NotFound";
import Notifications from "../Pages/Dashboard/Notifications";
import AdminProfile from "../Pages/Dashboard/AdminProfile/AdminProfile";
import User from "../Pages/Dashboard/User";
import Transactions from "../Pages/Dashboard/Transactions";
import UserProfile from "../Pages/Dashboard/AdminProfile/UserProfile";
import TermsAndCondition from "../Pages/Dashboard/TermsAndCondition";
import Vendors from "../Pages/Dashboard/Vendors";
import PrivateRoute from "./PrivateRoute";
import Banners from "../Pages/Dashboard/Banners";
import EditBanners from "../components/ui/Banners/EditBanners";
import AddBanners from "../components/ui/Banners/AddBanners";
import OurTransactions from "../Pages/Dashboard/OurTransactions";
import Faq from "../components/ui/Settings/Faq";
import AboutUs from "../components/ui/Settings/AboutUs";
import Orders from "../Pages/Dashboard/Orders";

import Vendor from "../Pages/Dashboard/Vendor";
import Freelancers from "../Pages/Freelancers";
import ProfileBanner from "../Pages/Dashboard/Banners/ProfileBanner";

import OfflineCourses from "../Pages/Courses/OfflineCourses";
import FreelancersCourses from "../Pages/Courses/FreelancersCourses";
import ManageCourses from "../Pages/Courses/ManageCourses";
import ManageAdmin from "../Pages/MyTeam/ManageAdmin";
import ManageTeachers from "../Pages/MyTeam/ManageTeachers";
import Seminars from "../Pages/Seminars";
import HomeSlider from "../Pages/Dashboard/Banners/HomeSlider";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <PrivateRoute>
      <Main />
      // </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },
      {
        path: "/add-banner",
        element: <AddBanners />,
      },
      {
        path: "/banners",
        element: <Banners />,
      },
      {
        path: "/sliders",
        element: <HomeSlider />,
      },
      {
        path: "/profileBanner",
        element: <ProfileBanner />,
      },
      {
        path: "/update-banner/:id",
        element: <EditBanners />,
      },
      {
        path: "/offline-courses",
        element: <OfflineCourses />,
      },
      {
        path: "/freelancer-courses",
        element: <FreelancersCourses />,
      },
      {
        path: "/manage-courses",
        element: <ManageCourses />,
      },
      {
        path: "/student/profile/:id",
        element: <User />,
      },
      {
        path: "/teacher/profile/:id",
        element: <Vendor />,
      },
      {
        path: "/freelancer/profile/:id",
        element: <Vendor />,
      },

      {
        path: "/students",
        element: <Users />,
      },
      {
        path: "/teachers",
        element: <Vendors />,
      },
      {
        path: "/freelancers",
        element: <Freelancers />,
      },
      {
        path: "/manage-admin",
        element: <ManageAdmin />,
      },
      {
        path: "/manage-teachers",
        element: <ManageTeachers />,
      },

      {
        path: "/our-transactions",
        element: <OurTransactions />,
      },
      {
        path: "/seminars",
        element: <Seminars />,
      },

      {
        path: "/personal-information",
        element: <UserProfile />,
      },
      {
        path: "/change-password",
        element: <ChangePassword />,
      },

      {
        path: "f-a-q",
        element: <Faq />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },

      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-and-condition",
        element: <TermsAndCondition />,
      },

      {
        path: "/change-password",
        element: <ChangePassword />,
      },

      {
        path: "/profile",
        element: <AdminProfile />,
      },
      {
        path: "/notification",
        element: <Notifications />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "/auth",
        element: <Login />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "verify-otp",
        element: <VerifyOtp />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
