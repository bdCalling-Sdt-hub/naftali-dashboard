import React from "react";
import { useParams } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
import RunningOrderTable from "../../components/ui/Analytics/RunningOrderTable";
import { useStudentByIdQuery } from "../../redux/apiSlices/userSlice";
import moment from "moment";

const User = () => {
  const { id } = useParams();

  const { data: studentData, isLoading } = useStudentByIdQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const student = studentData?.data;
  console.log(student);

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
    student?.profile ||
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
                : `${import.meta.env.VITE_BASE_URL}${student?.profile}`
            }
            alt="img"
          />
          <div>
            <h1 className="text-2xl font-bold">{student?.name}</h1>
            <p className="text-sm text-gray-400">Student ID: {student._id}</p>
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
            <p className="text-lg my-2">{student?.phone}</p>
          </div>
          <div className="p-3 bg-white h-20 rounded-2xl shadow-sm">
            <h1 className="font-semibold text-sm border-b-2 border-dashed">
              Address
            </h1>
            <p className="text-lg my-2">{student?.address}</p>
          </div>
          <div className="p-3 bg-white h-20 rounded-2xl shadow-sm">
            <h1 className="font-semibold text-sm border-b-2 border-dashed">
              Education
            </h1>
            <p className="text-lg my-2">{student?.education}</p>
          </div>
          <div className="p-3 bg-white h-20 rounded-2xl shadow-sm">
            <h1 className="font-semibold text-sm border-b-2 border-dashed">
              Student Since
            </h1>
            <p className="text-lg my-2">
              {moment(student?.createdAt).format("L")}
            </p>
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
