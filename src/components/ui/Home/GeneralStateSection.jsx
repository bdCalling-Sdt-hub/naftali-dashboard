import { FaPeopleGroup, FaUsers } from "react-icons/fa6";
import salongoLogo from "../../../assets/salon-go-logo.png";
import { GiProfit } from "react-icons/gi";
import { IoCheckmarkDoneCircleSharp, IoPeople } from "react-icons/io5";

const GeneralStateSection = () => {
  // Simulated dummy data
  const generalState = {
    data: {
      totalActiveUsers: {
        online: 445,
        Offline: 100,
      },
      totalEarning: {
        online: 1542,
        Offline: 1955,
      },
      TotalStudents: {
        online: 445,
        Offline: 512,
      },
      totalTeachers: {
        offline: 15,
        freelancers: 31,
      },
      totalSoldCourses: {
        online: 123,
        Offline: 321,
      },
    },
  };

  const isLoading = false; // Simulated loading state

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <img src={salongoLogo} alt="" />
      </div>
    );
  }

  const state = generalState?.data;

  return (
    <div className="grid md:grid-cols-5 gap-6 md:h-[210px]">
      <div className="bg-white border rounded-2xl py-0 px-6 flex flex-col items-center justify-start gap-4">
        <div className="w-16 h-16 rounded-full mt-2 bg-secondary flex items-center justify-center">
          <FaUsers color="#210630" size={24} />
        </div>
        <h2 className="text-center font-semibold text-2xl">Total User</h2>
        <div className="flex flex-col items-start justify-center">
          <div className="flex gap-10">
            <div className="flex flex-col  bg-[#fdf9ed] px-4 rounded-2xl items-center">
              <h1 className="text-lg">Online</h1>
              <h1>{state?.totalActiveUsers?.online}</h1>
            </div>
            <div className="flex flex-col  bg-[#fdf9ed] px-4 rounded-2xl items-center">
              <h1 className="text-lg">Offline</h1>
              <h1>{state?.totalActiveUsers?.Offline}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border rounded-2xl py-0 px-6 flex flex-col items-center justify-start gap-4">
        <div className="w-16 h-16 rounded-full mt-2 bg-secondary flex items-center justify-center">
          <GiProfit color="#210630" size={24} />
        </div>
        <h2 className="text-center font-semibold text-2xl">Total Earning</h2>
        <div className="flex flex-col items-start justify-center">
          <div className="flex gap-10">
            <div className="flex flex-col  bg-[#fdf9ed] px-4 rounded-2xl items-center">
              <h1 className="text-lg">Online</h1>
              <h1>{state?.totalEarning?.online}</h1>
            </div>
            <div className="flex flex-col  bg-[#fdf9ed] px-4 rounded-2xl items-center">
              <h1 className="text-lg">Offline</h1>
              <h1>{state?.totalEarning?.Offline}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl border py-0 px-6 flex flex-col items-center justify-start gap-4">
        <div className="w-16 h-16 rounded-full mt-2 bg-secondary flex items-center justify-center">
          <IoPeople color="#210630" size={24} />
        </div>
        <h2 className="text-center font-semibold text-2xl">Total Students</h2>
        <div className="flex flex-col items-start justify-center">
          <div className="flex gap-10">
            <div className="flex flex-col  bg-[#fdf9ed] px-4 rounded-2xl items-center">
              <h1 className="text-lg">Online</h1>
              <h1>{state?.TotalStudents?.online}</h1>
            </div>
            <div className="flex flex-col  bg-[#fdf9ed] px-4 rounded-2xl items-center">
              <h1 className="text-lg">Offline</h1>
              <h1>{state?.TotalStudents?.Offline}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl border py-0 px-6 flex flex-col items-center justify-start gap-4">
        <div className="w-16 h-16 rounded-full mt-2 bg-secondary flex items-center justify-center">
          <FaPeopleGroup color="#210630" size={24} />
        </div>
        <h2 className="text-center font-semibold text-2xl">Total Teachers</h2>
        <div className="flex flex-col items-start justify-center">
          <div className="flex gap-10">
            <div className="flex flex-col bg-[#fdf9ed] px-4 rounded-2xl items-center">
              <h1 className="text-lg">Online</h1>
              <h1>{state?.totalTeachers?.freelancers}</h1>
            </div>
            <div className="flex flex-col  bg-[#fdf9ed] px-4 rounded-2xl items-center">
              <h1 className="text-lg">Offline</h1>
              <h1>{state?.totalTeachers?.offline}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border rounded-2xl py-0 px-6 flex flex-col items-center justify-start gap-4">
        <div className="w-16 h-16 rounded-full mt-2 bg-secondary flex items-center justify-center">
          <IoCheckmarkDoneCircleSharp color="#210630" size={24} />
        </div>
        <h2 className="text-center font-semibold text-xl">
          Total Sold Courses
        </h2>
        <div className="flex flex-col items-start justify-center">
          <div className="flex gap-10">
            <div className="flex flex-col  bg-[#fdf9ed] px-4 rounded-2xl items-center">
              <h1 className="text-lg">Online</h1>
              <h1>{state?.totalSoldCourses?.online}</h1>
            </div>
            <div className="flex flex-col  bg-[#fdf9ed] px-4 rounded-2xl items-center">
              <h1 className="text-lg">Offline</h1>
              <h1>{state?.totalSoldCourses?.Offline}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralStateSection;
