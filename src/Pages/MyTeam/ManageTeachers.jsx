import React, { useState } from "react";
import {
  Table,
  Modal,
  Button,
  Input,
  Space,
  message,
  Switch,
  Form,
} from "antd";
import { IoMdAdd } from "react-icons/io";
import {
  useAddTeacherMutation,
  useTeachersQuery,
} from "../../redux/apiSlices/userSlice";

const ManageTeachers = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [addTeacher] = useAddTeacherMutation();

  const { data: teachers, isLoading } = useTeachersQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const teachersData = teachers?.data || [];

  const handleAddTeacher = async (values) => {
    try {
      console.log(values);
      const response = await addTeacher(values).unwrap();

      if (response.success) {
        message.success("Teacher added successfully!");
        setIsModalVisible(false);
        form.resetFields();
      } else {
        throw new Error(response.message || "Failed to add teacher.");
      }
    } catch (error) {
      message.error(
        error.message || "Validation failed or API error occurred."
      );
    }
  };

  const columns = [
    {
      title: "Full Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold mb-4">Manage Teachers</h2>
        <Button
          className="bg-primary py-5 px-4 font-semibold text-white"
          onClick={() => setIsModalVisible(true)}
          style={{ marginBottom: 16 }}
        >
          <IoMdAdd size={20} /> Create Teacher
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={teachersData}
        rowKey={(record) => record._id}
      />

      <Modal
        title="Create Teacher Account"
        open={isModalVisible}
        onOk={() => form.submit()}
        onCancel={() => {
          form.resetFields();
          setIsModalVisible(false);
        }}
        okText="Create Account"
        okButtonProps={{
          style: {
            backgroundColor: "#b58700",
            borderColor: "#b58700",
          },
        }}
      >
        <Form form={form} layout="vertical" onFinish={handleAddTeacher}>
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
            label="Phone"
            name="phone"
            rules={[
              { required: true, message: "Please enter the phone number!" },
              {
                pattern: /^\d{10}$/,
                message: "Please enter a valid 10-digit phone number!",
              },
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

export default ManageTeachers;
