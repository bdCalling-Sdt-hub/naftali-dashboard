import React, { useState } from "react";
import {
  Table,
  Select,
  Space,
  message,
  Modal,
  Button,
  Input,
  Switch,
} from "antd";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

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

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newAdmin, setNewAdmin] = useState({
    fullName: "",
    email: "",
    status: true, // Default status is Active
  });

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

  // Handle adding a new admin
  const handleAddAdmin = () => {
    const newAdminData = {
      ...newAdmin,
      key: (data.length + 1).toString(), // Simulate unique key
      status: newAdmin.status ? "Active" : "Inactive", // Map boolean to status string
    };
    setData([...data, newAdminData]);
    setIsModalVisible(false);
    setNewAdmin({ fullName: "", email: "", status: true });
    message.success("New admin added successfully");
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
          <MdDelete size={24} className="text-red-600" />
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Manage Admins</h2>
      {/* Add Admin Button */}
      <Button
        className="bg-primary py-5 text-white"
        onClick={() => setIsModalVisible(true)}
        style={{ marginBottom: 16, float: "right" }}
      >
        <IoMdAdd size={20} /> Add Admin
      </Button>

      <Table columns={columns} dataSource={data} />

      {/* Add Admin Modal */}
      <Modal
        title="Add New Admin"
        visible={isModalVisible}
        onOk={handleAddAdmin}
        onCancel={() => setIsModalVisible(false)}
        okText="Add Admin"
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
              value={newAdmin.fullName}
              onChange={(e) =>
                setNewAdmin({ ...newAdmin, fullName: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label>Email</label>
            <Input
              value={newAdmin.email}
              onChange={(e) =>
                setNewAdmin({ ...newAdmin, email: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label>Status</label> <br />
            <Switch
              checked={newAdmin.status}
              onChange={(checked) =>
                setNewAdmin({ ...newAdmin, status: checked })
              }
              checkedChildren="Active"
              unCheckedChildren="Inactive"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ManageAdmin;
