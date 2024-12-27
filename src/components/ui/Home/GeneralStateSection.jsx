import { FaPeopleGroup, FaUsers } from "react-icons/fa6";
import salongoLogo from "../../../assets/salon-go-logo.png";
import { GiProfit } from "react-icons/gi";
import { IoCheckmarkDoneCircleSharp, IoPeople } from "react-icons/io5";
import { useDashboardStatesQuery } from "../../../redux/apiSlices/dashboardSlice";
import logo from "../../../assets/logo.png";

const GeneralStateSection = () => {
  const { data: dashboardStates, isLoading } = useDashboardStatesQuery();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <img src={logo} alt="" />
      </div>
    );
  }

  const state = dashboardStates?.data;
  // console.log(state);

  return (
    <div className="grid md:grid-cols-5 gap-6 md:h-[120px]">
      <div className="bg-white border rounded-2xl py-0 px-6 flex items-center justify-start gap-4">
        <div className="w-16 h-16 rounded-full mt-2 bg-secondary flex items-center justify-center">
          <FaUsers color="#210630" size={24} />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-center font-semibold text-xl">Total User</h2>
          <div>
            <p className="text-3xl font-bold">{state?.totalUsers}</p>
          </div>
        </div>
      </div>
      <div className="bg-white border rounded-2xl py-0 px-6 flex items-center justify-start gap-4">
        <div className="w-16 h-16 rounded-full mt-2 bg-secondary flex items-center justify-center">
          <FaUsers color="#210630" size={24} />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-center font-semibold text-xl">Total Earnings</h2>
          <div>
            <p className="text-3xl font-bold">{state?.totalEarning}</p>
          </div>
        </div>
      </div>
      <div className="bg-white border rounded-2xl py-0 px-6 flex items-center justify-start gap-4">
        <div className="w-16 h-16 rounded-full mt-2 bg-secondary flex items-center justify-center">
          <FaUsers color="#210630" size={24} />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-center font-semibold text-xl">Total Students</h2>
          <div>
            <p className="text-3xl font-bold">{state?.students}</p>
          </div>
        </div>
      </div>
      <div className="bg-white border rounded-2xl py-0 px-6 flex items-center justify-start gap-4">
        <div className="w-16 h-16 rounded-full mt-2 bg-secondary flex items-center justify-center">
          <FaUsers color="#210630" size={24} />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-center font-semibold text-xl">Total Teachers</h2>
          <div className="flex gap-5">
            <div className="flex flex-col items-center">
              <p className="text-2xl font-semibold">
                {state?.teacherCount?.platform}
              </p>
              <p className="text-sm text-gray-600">Platform</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-2xl font-semibold">
                {state?.teacherCount?.freelancer}
              </p>
              <p className="text-sm text-gray-600">Freelancer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border rounded-2xl py-0 px-6 flex items-center justify-start gap-4">
        <div className="w-16 h-16 rounded-full mt-2 bg-secondary flex items-center justify-center">
          <FaUsers color="#210630" size={24} />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-center font-semibold text-xl">Sold Courses</h2>
          <div className="flex gap-5">
            <div className="flex flex-col items-center">
              <p className="text-2xl font-semibold">
                {state?.soldCourses?.platform}
              </p>
              <p className="text-sm text-gray-600">Platform</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-2xl font-semibold">
                {state?.soldCourses?.freelancer}
              </p>
              <p className="text-sm text-gray-600">Freelancer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralStateSection;
