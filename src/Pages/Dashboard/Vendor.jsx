import React from "react";
import { Avatar, Card, Table, Space, Button } from "antd";
import randomImg from "../../assets/randomProfile2.jpg";
import { useParams } from "react-router-dom";
import {
  useReviewByTeacherByIdQuery,
  useTeacherByIdQuery,
} from "../../redux/apiSlices/userSlice";
import moment from "moment";

const TeacherDetails = () => {
  const { id } = useParams();

  const { data: teachers, isLoading } = useTeacherByIdQuery(id);
  const { data: reviewByTeacherById, isReviewLoading } =
    useReviewByTeacherByIdQuery(id);

  if (isLoading || isReviewLoading) {
    return <div>Loading...</div>;
  }

  const teacherData = teachers?.data;
  const teacher = reviewByTeacherById?.data;
  // console.log(teacherData);

  // console.log(teacherData);

  // const teacher = {
  //   id: "1",
  //   name: "Jane Doe",
  //   email: "jane.doe@example.com",
  //   phoneNumber: "+987654321",
  //   address: "45 Elm Street, Springfield",
  //   department: "Mathematics",
  //   subjects: ["Algebra", "Calculus", "Geometry"],
  //   yearsOfExperience: 10,
  //   rating: 4.9,
  //   status: "Active",
  //   totalClasses: 150,
  //   totalStudents: 300,
  //   profileImg: "https://randomuser.me/api/portraits/men/27.jpg",
  //   reviews: [
  //     {
  //       id: "r1",
  //       studentName: "Emily Brown",
  //       rating: 5,
  //       comment: "Amazing teacher, highly recommend!",
  //       date: "2023-12-12",
  //     },
  //     {
  //       id: "r2",
  //       studentName: "Michael Green",
  //       rating: 4,
  //       comment: "Very knowledgeable and helpful.",
  //       date: "2023-12-10",
  //     },
  //     {
  //       id: "r3",
  //       studentName: "Sophia White",
  //       rating: 4,
  //       comment: "Explains concepts well, but a bit fast-paced.",
  //       date: "2023-12-09",
  //     },
  //   ],
  // };

  const columns = [
    {
      title: "Student Name",
      dataIndex: ["studentID", "name"],
      key: "studentName",
    },
    {
      title: "Rating",
      dataIndex: "star",
      key: "rating",
      render: (rating) => (
        <span className="text-yellow-500 font-bold">{rating} / 5</span>
      ),
    },
    {
      title: "Comment",
      dataIndex: "description",
      key: "comment",
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "date",
      render: (date) => {
        return <p>{moment(date).format("L")}</p>;
      },
    },
  ];

  return (
    <div className=" mx-auto p-4">
      <div className="mb-4">
        <div className="flex gap-10 ms-20 items-center">
          <div className="flex flex-col items-center justify-center gap-5">
            <div className=" border-4 p-1 rounded-full">
              <img
                src={
                  `${import.meta.env.VITE_BASE_URL}${teacherData.profile}` ||
                  randomImg
                }
                alt={teacherData.name}
                size={100}
                className="border-2 w-[200px] h-[200px] rounded-full  border-gray-300"
              />
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800">
                {teacherData.name}
              </h2>
              <p className="text-gray-600 text-lg font-semibold">
                {teacherData.email}
              </p>
            </div>
          </div>
          <div className="ml-4 text-xl flex flex-col gap-1">
            <p className="text-gray-600">
              <span className="font-semibold">Date Of Birth:</span>{" "}
              {teacherData.dateOfBirth}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Phone Number:</span>{" "}
              {teacherData.phone}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Address:</span>{" "}
              {teacherData.location}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">degree:</span>{" "}
              {teacherData.degree}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">designation:</span>{" "}
              {teacherData.designation}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Designation:</span>{" "}
              {teacherData.designation}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">gender:</span>{" "}
              {teacherData.gender}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">
                Status: {teacherData.status}
              </span>
              <span
                className={`px-2 py-1  ${
                  teacherData.status === "active"
                    ? "text-green-500"
                    : teacher.status === "Inactive"
                    ? "text-red-500"
                    : "text-orange-500"
                }`}
              >
                {teacher.status}
              </span>
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Average Rating:</span>{" "}
              {teacherData.teacherRating}
            </p>
          </div>
        </div>
      </div>

      <Card title="Student Reviews" className="shadow-lg mt-20">
        <Table
          columns={columns}
          dataSource={teacher}
          rowKey={(record) => record.id}
        />
      </Card>
    </div>
  );
};

export default TeacherDetails;
