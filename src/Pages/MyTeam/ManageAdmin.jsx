import React, { useState } from "react";
import { Table, Select, Space, message } from "antd";

const { Option } = Select;

const ManageAdmin = () => {
  // Admin Data (you can replace this with a real API call)
  const [data, setData] = useState([
    {
      key: "1",
      fullName: "John Doe",
      email: "johndoe@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      key: "2",
      fullName: "Jane Smith",
      email: "janesmith@example.com",
      role: "Admin",
      status: "Inactive",
    },
    {
      key: "3",
      fullName: "Alice Johnson",
      email: "alicejohnson@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      key: "4",
      fullName: "Bob Brown",
      email: "bobbrown@example.com",
      role: "Admin",
      status: "Inactive",
    },
  ]);

  // Handle status change
  const handleStatusChange = (value, key) => {
    const newData = [...data];
    const index = newData.findIndex((item) => item.key === key);
    if (index > -1) {
      newData[index].status = value;
      setData(newData);
      message.success(`Status changed to ${value}`);
    }
  };

  // Table columns
  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status, record) => (
        <Select
          defaultValue={status}
          style={{ width: 120 }}
          onChange={(value) => handleStatusChange(value, record.key)}
        >
          <Option value="Active" style={{ color: "green" }}>
            Active
          </Option>
          <Option value="Restricted" style={{ color: "red" }}>
            Restricted
          </Option>
        </Select>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <a href="#">Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Manage Admins</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default ManageAdmin;
