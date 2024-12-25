import React from "react";
import { useParams } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
import RunningOrderTable from "../../components/ui/Analytics/RunningOrderTable";

const User = () => {
  const { id } = useParams();

  // Student data
  const student = {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "+123456789",
    address: "123 Main St, Springfield",
    enrolledCourse: "Mathematics",
    enrollmentDate: "2023-01-15",
    status: "Active",
    profileImg: "https://randomuser.me/api/portraits/men/1.jpg",
    fine: 10,
  };

  const runningCourses = [
    {
      id: "1",
      courseName: "Mathematics",
      instructor: "Dr. John Smith",
      duration: "3 months",
      startDate: "2023-01-15",
      status: "Active",
    },
    {
      id: "2",
      courseName: "Physics",
      instructor: "Dr. Jane Doe",
      duration: "4 months",
      startDate: "2023-02-10",
      status: "Active",
    },
    {
      id: "3",
      courseName: "Chemistry",
      instructor: "Prof. Alan Green",
      duration: "6 months",
      startDate: "2023-03-20",
      status: "Completed",
    },
    {
      id: "4",
      courseName: "Biology",
      instructor: "Dr. Emily White",
      duration: "5 months",
      startDate: "2023-04-01",
      status: "Active",
    },
  ];

  const imgUrl =
    student?.profileImg ||
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmtj40PvvTQ1g64pgKZ2oKEk-tqT9rA4CXSA&s";

  return (
    <div>
      <div>
        <div className="flex gap-3 items-center">
          <img
            className="rounded-full w-16 h-16"
            src={
              imgUrl?.startsWith("http")
                ? imgUrl
                : `${import.meta.env.VITE_BASE_URL}${imgUrl}`
            }
            alt="img"
          />
          <div>
            <h1 className="text-2xl font-bold">{student?.name}</h1>
            <p className="text-sm text-gray-400">Student ID: {student.id}</p>
          </div>
        </div>

        <div className="grid my-5 grid-cols-2 gap-5 w-[70%]">
          <div className="p-3 bg-white h-20 rounded-2xl shadow-sm">
            <h1 className="font-semibold text-sm border-b-2 border-dashed">
              Name
            </h1>
            <p className="text-lg my-2">{student?.name}</p>
          </div>
          <div className="p-3 bg-white h-20 rounded-2xl shadow-sm">
            <h1 className="font-semibold text-sm border-b-2 border-dashed">
              Email
            </h1>
            <p className="text-lg my-2">{student?.email}</p>
          </div>
          <div className="p-3 bg-white h-20 rounded-2xl shadow-sm">
            <h1 className="font-semibold text-sm border-b-2 border-dashed">
              Phone
            </h1>
            <p className="text-lg my-2">{student?.phoneNumber}</p>
          </div>
          <div className="p-3 bg-white h-20 rounded-2xl shadow-sm">
            <h1 className="font-semibold text-sm border-b-2 border-dashed">
              Address
            </h1>
            <p className="text-lg my-2">{student?.address}</p>
          </div>
          <div className="p-3 bg-white h-20 rounded-2xl shadow-sm">
            <h1 className="font-semibold text-sm border-b-2 border-dashed">
              Course
            </h1>
            <p className="text-lg my-2">{student?.enrolledCourse}</p>
          </div>
          <div className="p-3 bg-white h-20 rounded-2xl shadow-sm">
            <h1 className="font-semibold text-sm border-b-2 border-dashed">
              Enrollment Date
            </h1>
            <p className="text-lg my-2">{student?.enrollmentDate}</p>
          </div>
          <div className="p-3 bg-white h-20 rounded-2xl shadow-sm">
            <h1 className="font-semibold text-sm border-b-2 border-dashed">
              Status
            </h1>
            <p className="text-lg my-2">{student?.status}</p>
          </div>
        </div>
      </div>

      <div>
        <RunningOrderTable data={runningCourses} />
      </div>
    </div>
  );
};

export default User;
