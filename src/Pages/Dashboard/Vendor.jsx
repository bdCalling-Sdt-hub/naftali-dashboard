import React from "react";
import { Avatar, Card, Table, Space, Button } from "antd";
import randomImg from "../../assets/randomProfile2.jpg";

const TeacherDetails = () => {
  const teacher = {
    id: "1",
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phoneNumber: "+987654321",
    address: "45 Elm Street, Springfield",
    department: "Mathematics",
    subjects: ["Algebra", "Calculus", "Geometry"],
    yearsOfExperience: 10,
    rating: 4.9,
    status: "Active",
    totalClasses: 150,
    totalStudents: 300,
    profileImg: "https://randomuser.me/api/portraits/women/1.jpg",
    reviews: [
      {
        id: "r1",
        studentName: "Emily Brown",
        rating: 5,
        comment: "Amazing teacher, highly recommend!",
        date: "2023-12-12",
      },
      {
        id: "r2",
        studentName: "Michael Green",
        rating: 4,
        comment: "Very knowledgeable and helpful.",
        date: "2023-12-10",
      },
      {
        id: "r3",
        studentName: "Sophia White",
        rating: 4,
        comment: "Explains concepts well, but a bit fast-paced.",
        date: "2023-12-09",
      },
    ],
  };

  const columns = [
    {
      title: "Student Name",
      dataIndex: "studentName",
      key: "studentName",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (rating) => (
        <span className="text-yellow-500 font-bold">{rating} / 5</span>
      ),
    },
    {
      title: "Comment",
      dataIndex: "comment",
      key: "comment",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space>
          <Button
            className="border border-green-600 text-green-700 hover:bg-green-600 hover:text-white"
            onClick={() => handleReviewAction(record.id, "approve")}
          >
            Approve
          </Button>
          <Button
            className="border border-red-600 text-red-700 hover:bg-red-600 hover:text-white"
            onClick={() => handleReviewAction(record.id, "reject")}
          >
            Reject
          </Button>
          <Button
            className="border border-gray-600 text-gray-700 hover:bg-gray-600 hover:text-white"
            onClick={() => handleReviewAction(record.id, "delete")}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const handleReviewAction = (reviewId, action) => {
    console.log(`${action} review with ID: ${reviewId}`);
    // Implement the logic for approving, rejecting, or deleting the review
  };

  return (
    <div className=" mx-auto p-4">
      <div className="mb-4">
        <div className="flex gap-5 items-center">
          <div className="flex flex-col items-center justify-center gap-5">
            <div className=" border-4 p-1 rounded-full">
              <img
                src={teacher.profileImg || randomImg}
                alt={teacher.name}
                size={100}
                className="border-2 w-[200px] h-[200px] rounded-full  border-gray-300"
              />
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800">
                {teacher.name}
              </h2>
              <p className="text-gray-600 text-lg font-semibold">
                {teacher.email}
              </p>
            </div>
          </div>
          <div className="ml-4 text-xl flex flex-col gap-1">
            <p className="text-gray-600">
              <span className="font-semibold">Department:</span>{" "}
              {teacher.department}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Phone Number:</span>{" "}
              {teacher.phoneNumber}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Address:</span> {teacher.address}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Years of Experience:</span>{" "}
              {teacher.yearsOfExperience}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Subjects:</span>{" "}
              {teacher.subjects.join(", ")}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Total Classes:</span>{" "}
              {teacher.totalClasses}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Total Students:</span>{" "}
              {teacher.totalStudents}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Status:</span>
              <span
                className={`px-2 py-1  ${
                  teacher.status === "Active"
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
              {teacher.rating}
            </p>
          </div>
        </div>
      </div>

      <Card title="Student Reviews" className="shadow-lg mt-20">
        <Table
          columns={columns}
          dataSource={teacher.reviews}
          rowKey={(record) => record.id}
        />
      </Card>
    </div>
  );
};

export default TeacherDetails;
