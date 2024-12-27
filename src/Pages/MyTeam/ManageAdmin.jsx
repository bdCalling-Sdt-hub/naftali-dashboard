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
  Form,
} from "antd";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import {
  useAddAdminProfileMutation,
  useDeleteAdminProfileMutation,
  useFetchAllAdminsQuery,
} from "../../redux/apiSlices/authSlice";
import toast from "react-hot-toast";

const { Option } = Select;

const ManageAdmin = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { data: adminData, isLoading } = useFetchAllAdminsQuery();
  const [deleteAdminProfile] = useDeleteAdminProfileMutation();
  const [addAdminProfile] = useAddAdminProfileMutation();
  const [form] = Form.useForm();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const adminsData = adminData?.data || [];
  // console.log(adminsData);

  const handleDeleteAdmin = async (id) => {
    try {
      const res = await deleteAdminProfile(id).unwrap();
      if (res.success) {
        toast.success("Admin deleted successfully!");
      }
    } catch (error) {
      message.error("Failed to delete admin. Please try again.");
    }
  };
  const handleAddAdmin = async (values) => {
    try {
      console.log(values);
      const response = await addAdminProfile(values).unwrap();

      if (response.success) {
        toast.success("Admin added successfully!");
        form.resetFields();
        setIsModalVisible(false);
      } else {
        throw new Error(response.message || "Failed to add admin.");
      }
    } catch (error) {
      message.error(error?.message || "An error occurred. Please try again.");
    }
  };

  const columns = [
    {
      title: "Full Name",
      dataIndex: "name",
      key: "fullName",
      render: (record) => <span>{record || "N/A"}</span>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (record) => <p>{record || "N/A"}</p>,
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
          onChange={(value) => console.log(value, record.key)}
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
      render: (record) => (
        <Space size="middle">
          <MdDelete
            onClick={() => handleDeleteAdmin(record._id)}
            size={24}
            className="text-red-600 cursor-pointer"
          />
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Manage Admins</h2>
      <Button
        className="bg-primary py-5 text-white"
        onClick={() => setIsModalVisible(true)}
        style={{ marginBottom: 16, float: "right" }}
      >
        <IoMdAdd size={20} /> Add Admin
      </Button>

      <Table
        columns={columns}
        dataSource={adminsData}
        rowKey={(record) => record._id}
      />

      {/* Add Admin Modal */}
      <Modal
        title="Add New Admin"
        open={isModalVisible}
        onOk={() => form.submit()}
        onCancel={() => {
          form.resetFields();
          setIsModalVisible(false);
        }}
        okText="Add Admin"
        okButtonProps={{
          style: {
            backgroundColor: "#b58700",
            borderColor: "#b58700",
          },
        }}
      >
        <Form form={form} layout="vertical" onFinish={handleAddAdmin}>
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Please enter the full name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter the email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter the password!" }]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ManageAdmin;
