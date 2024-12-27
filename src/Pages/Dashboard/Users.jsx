import React, { useState } from "react";
import { Table, Button, Space, Avatar, Tooltip } from "antd";
import { Link } from "react-router-dom";
import randomImg from "../../assets/randomProfile2.jpg";
import { useStudentsQuery } from "../../redux/apiSlices/userSlice";
import logo from "../../assets/logo.png";
import moment from "moment/moment";

const Students = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [pageSize, setPageSize] = useState(10);

  const { data: studentsData, isLoading } = useStudentsQuery();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <img src={logo} alt="" />
      </div>
    );
  }

  const data = studentsData?.data;
  // console.log(data);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      key: "id",
      render: (record) => {
        return <Tooltip title={record}>{record.slice(0, 5)}...</Tooltip>;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => {
        const name = record.name || "Unknown";

        return (
          <Space>
            <Avatar
              src={
                `${import.meta.env.VITE_BASE_URL}${record?.profile}` ||
                randomImg
              }
              alt={name}
              size="large"
            />
            <span>{name}</span>
          </Space>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (record) => {
        return <p>{record || "N/A"}</p>;
      },
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
      render: (record) => {
        return <p>{record || "N/A"}</p>;
      },
    },
    {
      title: "Address",
      dataIndex: "location",
      key: "location",
      render: (text) => {
        return <p>{text || "N/A"}</p>;
      },
    },
    {
      title: "Education",
      dataIndex: "education",
      key: "education",
      render: (text) => {
        return <p>{text || "N/A"}</p>;
      },
    },
    {
      title: "Student Since",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (record) => {
        return <p>{moment(record).format("L")}</p>;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        return (
          <span style={{ color: status === "active" ? "green" : "red" }}>
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
          <Link to={`/student/profile/${record._id}`}>
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
        dataSource={data}
        pagination={{ pageSize, onChange: (page) => setPageSize(page) }}
        scroll={{ x: 1000 }}
        rowKey={(record) => record._id}
      />
    </>
  );
};

export default Students;
