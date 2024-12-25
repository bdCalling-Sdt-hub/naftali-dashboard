import React, { useState } from "react";
import { Table, Modal, Button, Input, Space, message, Switch } from "antd";
import { IoMdAdd } from "react-icons/io";

const ManageTeachers = () => {
  const [data, setData] = useState([
    {
      key: "1",
      fullName: "Alice Green",
      email: "alicegreen@example.com",
      subject: "Mathematics",
      status: "Active",
    },
    {
      key: "2",
      fullName: "Bob White",
      email: "bobwhite@example.com",
      subject: "Science",
      status: "Inactive",
    },
    {
      key: "3",
      fullName: "Charlie Brown",
      email: "charliebrown@example.com",
      subject: "English",
      status: "Active",
    },
    {
      key: "4",
      fullName: "David Black",
      email: "davidblack@example.com",
      subject: "History",
      status: "Inactive",
    },
  ]);

  const [filteredData, setFilteredData] = useState(data);
  const [searchText, setSearchText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newTeacher, setNewTeacher] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    status: true,
  });

  const handleAddTeacher = () => {
    const { password, confirmPassword } = newTeacher;

    if (password !== confirmPassword) {
      message.error("Password and Confirm Password do not match!");
      return;
    }

    const newTeacherData = {
      ...newTeacher,
      key: (data.length + 1).toString(),
    };
    const updatedData = [...data, newTeacherData];
    setData(updatedData);
    setFilteredData(updatedData);
    setIsModalVisible(false);
    setNewTeacher({
      fullName: "",
      email: "",
      subject: "",
      username: "",
      password: "",
      confirmPassword: "",
      status: true,
    });
    message.success("New teacher account created successfully.");
  };

  const handleSearch = (value) => {
    setSearchText(value);
    const filtered = data.filter((item) =>
      Object.values(item).join(" ").toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

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
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => <span>{status}</span>,
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
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold mb-4">Manage Teachers</h2>
        <div className="space-x-7">
          <Input
            placeholder="Search by course title"
            value={searchText}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-64 py-2"
          />

          {/* Add Teacher Button */}
          <Button
            className="bg-primary py-5 text-white"
            onClick={() => setIsModalVisible(true)}
            style={{ marginBottom: 16, float: "right" }}
          >
            <IoMdAdd size={20} /> Create Teacher
          </Button>
        </div>
      </div>
      <Table columns={columns} dataSource={filteredData} />

      {/* Add Teacher Modal */}
      <Modal
        title="Create Teacher Account"
        visible={isModalVisible}
        onOk={handleAddTeacher}
        onCancel={() => setIsModalVisible(false)}
        okText="Create Account"
        okButtonProps={{
          style: {
            backgroundColor: "#b58700",
            borderColor: "#b58700",
          },
        }}
      >
        <div>
          <div className="mb-4">
            <label>Full Name</label>
            <Input
              value={newTeacher.fullName}
              onChange={(e) =>
                setNewTeacher({ ...newTeacher, fullName: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label>Email</label>
            <Input
              value={newTeacher.email}
              onChange={(e) =>
                setNewTeacher({ ...newTeacher, email: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label>Username</label>
            <Input
              value={newTeacher.username}
              onChange={(e) =>
                setNewTeacher({ ...newTeacher, username: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label>Password</label>
            <Input.Password
              value={newTeacher.password}
              onChange={(e) =>
                setNewTeacher({ ...newTeacher, password: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label>Confirm Password</label>
            <Input.Password
              value={newTeacher.confirmPassword}
              onChange={(e) =>
                setNewTeacher({
                  ...newTeacher,
                  confirmPassword: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-4">
            <label>Status</label> <br />
            <Switch
              checked={newTeacher.status}
              onChange={(checked) =>
                setNewTeacher({ ...newTeacher, status: checked })
              }
            />
            <span className="ml-2">
              {newTeacher.status ? "Active" : "Inactive"}
            </span>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ManageTeachers;
