import React, { useState } from "react";
import {
  Table,
  Button,
  Space,
  Avatar,
  Modal,
  Form,
  Input,
  Upload,
  Tooltip,
} from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import randomImg from "../../assets/randomProfile2.jpg";
import { useTeachersQuery } from "../../redux/apiSlices/userSlice";

const Teachers = () => {
  const [pageSize, setPageSize] = useState(10);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const { data: teachersData, isLoading } = useTeachersQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const data = teachersData?.data;
  console.log(data);

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
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
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
      title: "Language",
      dataIndex: "language",
      key: "language",
      render: (text) => {
        return <p>{text || "N/A"}</p>;
      },
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
      align: "center",
      render: (text, record) => (
        <Space>
          <Link to={`/teacher/profile/${record._id}`}>
            <Button className="bg-secondary text-black border-none">
              Details
            </Button>
          </Link>
          <Button className="border border-red-600 text-red-700">Remove</Button>
        </Space>
      ),
    },
  ];

  const handleAddTeacher = (values) => {
    console.log("New Teacher:", values);
    setIsModalVisible(false);
    form.resetFields();
  };

  return (
    <>
      <div className="flex justify-between items-center my-5">
        <h1 className="text-2xl font-semibold">Teachers</h1>
        <Button
          className="bg-primary py-5 text-white"
          icon={<PlusOutlined />}
          onClick={() => setIsModalVisible(true)}
        >
          Add New Teacher
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize, onChange: (page) => setPageSize(page) }}
        scroll={{ x: 1000 }}
        rowKey={(record) => record._id}
      />

      <Modal
        title="Add New Teacher"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleAddTeacher}>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              { required: true, message: "Please enter the teacher's name" },
            ]}
          >
            <Input placeholder="Enter name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email",
              },
            ]}
          >
            <Input placeholder="Enter email" />
          </Form.Item>

          <Form.Item
            name="phoneNumber"
            label="Phone Number"
            rules={[
              { required: true, message: "Please enter the phone number" },
            ]}
          >
            <Input placeholder="Enter phone number" />
          </Form.Item>

          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true, message: "Please enter the address" }]}
          >
            <Input placeholder="Enter address" />
          </Form.Item>

          <Form.Item
            name="subjects"
            label="Subjects"
            rules={[
              {
                required: true,
                message: "Please enter subjects separated by commas",
              },
            ]}
          >
            <Input placeholder="Enter subjects (e.g., Math, Physics)" />
          </Form.Item>

          <Form.Item
            name="profileImg"
            label="Profile Image"
            valuePropName="fileList"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
          >
            <Upload maxCount={1} beforeUpload={() => false}>
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Teacher
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Teachers;
