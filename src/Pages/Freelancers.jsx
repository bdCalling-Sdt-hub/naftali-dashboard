import React, { useState } from "react";
import { Table, Button, Space, Avatar } from "antd";
import { Link } from "react-router-dom";
import randomImg from "../../src/assets/randomProfile2.jpg";

const Freelancers = () => {
  const [pageSize, setPageSize] = useState(10);

  // Dummy data for teachers
  const teachers = [
    {
      id: "1",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phoneNumber: "+123456789",
      address: "45 Willow St, Springfield",
      subjects: ["Math", "Physics"],
      profileImg: "https://randomuser.me/api/portraits/women/20.jpg",
      status: "Active",
    },
    {
      id: "2",
      name: "Robert Brown",
      email: "robert.brown@example.com",
      phoneNumber: "+987654321",
      address: "12 Maple Ave, Springfield",
      subjects: ["English", "History"],
      profileImg: "https://randomuser.me/api/portraits/men/21.jpg",
      status: "On Leave",
    },
    {
      id: "3",
      name: "Laura Wilson",
      email: "laura.wilson@example.com",
      phoneNumber: "+192837465",
      address: "78 Elm St, Springfield",
      subjects: ["Biology", "Chemistry"],
      profileImg: "https://randomuser.me/api/portraits/women/22.jpg",
      status: "Active",
    },
    {
      id: "4",
      name: "Michael Scott",
      email: "michael.scott@example.com",
      phoneNumber: "+456789123",
      address: "90 Cedar St, Springfield",
      subjects: ["Business Studies"],
      profileImg: "https://randomuser.me/api/portraits/men/23.jpg",
      status: "Retired",
    },
    {
      id: "5",
      name: "Sophia Davis",
      email: "sophia.davis@example.com",
      phoneNumber: "+789456123",
      address: "65 Oak Lane, Springfield",
      subjects: ["Art", "Design"],
      profileImg: "https://randomuser.me/api/portraits/women/24.jpg",
      status: "Active",
    },
  ];

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
      title: "Subjects",
      dataIndex: "subjects",
      key: "subjects",
      render: (subjects) => subjects.join(", "),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = "green";
        if (status === "On Leave") color = "orange";
        if (status === "Retired") color = "gray";

        return <span style={{ color }}>{status}</span>;
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space>
          <Link to={`/freelancer/profile/${record.id}`}>
            <Button className="bg-secondary text-black border-none">
              Details
            </Button>
          </Link>
          <Button className="border border-red-600 text-red-700">Remove</Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <h1 className="text-2xl font-semibold my-5">Teachers</h1>
      <Table
        columns={columns}
        dataSource={teachers}
        pagination={{ pageSize, onChange: (page) => setPageSize(page) }}
        scroll={{ x: 1000 }}
      />
    </>
  );
};

export default Freelancers;
