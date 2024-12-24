import React, { useState } from "react";
import { Table, Button, Space, Avatar } from "antd";
import { Link } from "react-router-dom";
import randomImg from "../../assets/randomProfile2.jpg";

const Students = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [pageSize, setPageSize] = useState(10);

  // Dummy data for students
  const students = [
    {
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
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phoneNumber: "+987654321",
      address: "456 Elm St, Springfield",
      enrolledCourse: "Physics",
      enrollmentDate: "2023-03-10",
      status: "Inactive",
      profileImg: "https://randomuser.me/api/portraits/women/2.jpg",
      fine: 0,
    },
    {
      id: "3",
      name: "Sam Wilson",
      email: "sam.wilson@example.com",
      phoneNumber: "+192837465",
      address: "789 Oak St, Springfield",
      enrolledCourse: "Chemistry",
      enrollmentDate: "2023-05-20",
      status: "Active",
      profileImg: "https://randomuser.me/api/portraits/men/3.jpg",
      fine: 5,
    },
    {
      id: "4",
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      phoneNumber: "+456789123",
      address: "321 Pine St, Springfield",
      enrolledCourse: "Biology",
      enrollmentDate: "2023-06-18",
      status: "Inactive",
      profileImg: "https://randomuser.me/api/portraits/women/4.jpg",
      fine: 15,
    },
    {
      id: "5",
      name: "Michael Brown",
      email: "michael.brown@example.com",
      phoneNumber: "+789456123",
      address: "654 Maple St, Springfield",
      enrolledCourse: "English",
      enrollmentDate: "2023-04-25",
      status: "Active",
      profileImg: "https://randomuser.me/api/portraits/men/5.jpg",
      fine: 0,
    },
  ];

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => {
        const name = record.name || "Unknown";
        const imgUrl = record.profileImg || randomImg;

        return (
          <Space>
            <Avatar src={imgUrl} alt={name} size="large" />
            <span>{name}</span>
          </Space>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Course",
      dataIndex: "enrolledCourse",
      key: "enrolledCourse",
    },
    {
      title: "Enrollment Date",
      dataIndex: "enrollmentDate",
      key: "enrollmentDate",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        return (
          <span style={{ color: status === "Active" ? "green" : "red" }}>
            {status}
          </span>
        );
      },
    },

    {
      title: "Actions",
      key: "actions",
      align: "center",
      render: (text, record) => (
        <Space>
          <Link to={`/student/profile/${record.id}`}>
            <Button className="bg-[#FFF4E3] text-[#F3B806] border-none">
              Details
            </Button>
          </Link>
          <Button className="border border-red-600 text-red-700">
            Restrict
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <h1 className="text-2xl font-semibold my-5">Students</h1>
      <Table
        columns={columns}
        dataSource={students}
        pagination={{ pageSize, onChange: (page) => setPageSize(page) }}
        scroll={{ x: 1000 }}
        rowKey={(record) => record.id}
      />
    </>
  );
};

export default Students;
