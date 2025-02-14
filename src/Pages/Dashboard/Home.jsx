import React from "react";
import SalesTrackingChart from "../../components/ui/Home/SalesTrackingChart";
import RunningOrdersTable from "../../components/ui/Home/RunningOrdersTable";
import logo from "../../assets/logo.png";
import UserEngagement from "../../components/ui/Home/UserEngagement";
import GeneralStateSection from "../../components/ui/Home/GeneralStateSection";
import Professionals from "../../components/ui/Home/Professionals";
import TotalEarning from "../../components/ui/Analytics/TotalEarning";
import ActivityChart from "../../components/ui/Home/ActivityChart";
import { useDashboardStatesQuery } from "../../redux/apiSlices/dashboardSlice";

const Home = () => {
  const { data: dashboardStates, isLoading } = useDashboardStatesQuery();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <img src={logo} alt="" />
      </div>
    );
  }

  const topTeachers = dashboardStates?.data?.topTeachers;
  const topSoldCourses = dashboardStates?.data?.soldCourses;
  const topCourses = dashboardStates?.data?.topCourses;
  // console.log(topCourses);

  const totalCoursesSold =
    topSoldCourses?.freelancer + topSoldCourses?.platform;

  const platformPercentage =
    (topSoldCourses?.platform / totalCoursesSold) * 100;
  const freelancerPercentage =
    (topSoldCourses?.freelancer / totalCoursesSold) * 100;

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <img src={logo} alt="" />
      </div>
    );
  }

  return (
    <div>
      <GeneralStateSection />
      <div className="md:flex w-full items-center gap-6 mt-4">
        <div className="md:w-5/12 bg-white border rounded-2xl flex flex-col justify-center">
          {/* <SalesTrackingChart /> */}
          <TotalEarning />
        </div>
        <div className="md:w-7/12 md:flex gap-4">
          <Professionals data={topTeachers} />
          <div className="md:w-[40%] border rounded-2xl bg-white p-4 flex flex-col items-center">
            <h1 className="text-lg font-semibold mb-4">Total Sold Courses</h1>

            <div className="relative w-40 h-40 mb-6">
              <svg
                className="absolute inset-0 transform -rotate-90"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-secondary"
                  strokeWidth="4"
                ></circle>
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-primary"
                  strokeWidth="4"
                  strokeDasharray="100"
                  strokeDashoffset={(100 * (100 - platformPercentage)) / 100}
                  strokeLinecap="round"
                ></circle>
              </svg>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary w-24 h-24 rounded-full flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">
                  {platformPercentage}%
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-3 rounded-3xl bg-primary"></div>
                <p className="text-sm font-medium">
                  Offline Teachers: {platformPercentage}%
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-3 rounded-3xl bg-secondary"></div>
                <p className="text-sm font-medium">
                  Freelancers: {freelancerPercentage}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:flex gap-6">
        <div className="md:w-5/12 my-3 ">
          {" "}
          <RunningOrdersTable topCourses={topCourses} />
        </div>
        <div className="md:w-7/12 my-3 ">
          <UserEngagement />
        </div>
      </div>
    </div>
  );
};

export default Home;
