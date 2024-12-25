import React, { useState } from "react";
import { Table, Button, Space, Avatar, Modal, Form, Input, Upload } from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import randomImg from "../../assets/randomProfile2.jpg";

const Teachers = () => {
  const [pageSize, setPageSize] = useState(10);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

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
      name: "Bob Smith",
      email: "bob.smith@example.com",
      phoneNumber: "+987654321",
      address: "67 Pine St, Springfield",
      subjects: ["English", "History"],
      profileImg: "https://randomuser.me/api/portraits/men/21.jpg",
      status: "On Leave",
    },
    {
      id: "3",
      name: "Carla Evans",
      email: "carla.evans@example.com",
      phoneNumber: "+112233445",
      address: "23 Elm St, Springfield",
      subjects: ["Biology", "Chemistry"],
      profileImg: "https://randomuser.me/api/portraits/women/22.jpg",
      status: "Active",
    },
    {
      id: "4",
      name: "David Brown",
      email: "david.brown@example.com",
      phoneNumber: "+998877665",
      address: "89 Oak St, Springfield",
      subjects: ["Computer Science", "Math"],
      profileImg: "https://randomuser.me/api/portraits/men/23.jpg",
      status: "Retired",
    },
    {
      id: "5",
      name: "Ella Williams",
      email: "ella.williams@example.com",
      phoneNumber: "+554433221",
      address: "12 Cedar St, Springfield",
      subjects: ["Art", "Music"],
      profileImg: "https://randomuser.me/api/portraits/women/24.jpg",
      status: "Active",
    },
    {
      id: "6",
      name: "Frank Harris",
      email: "frank.harris@example.com",
      phoneNumber: "+667788990",
      address: "34 Birch St, Springfield",
      subjects: ["Economics", "Political Science"],
      profileImg: "https://randomuser.me/api/portraits/men/25.jpg",
      status: "On Leave",
    },
    {
      id: "7",
      name: "Grace Turner",
      email: "grace.turner@example.com",
      phoneNumber: "+112358132",
      address: "78 Aspen St, Springfield",
      subjects: ["Physical Education", "Health"],
      profileImg: "https://randomuser.me/api/portraits/women/26.jpg",
      status: "Active",
    },
    {
      id: "8",
      name: "Henry Moore",
      email: "henry.moore@example.com",
      phoneNumber: "+334455667",
      address: "56 Maple St, Springfield",
      subjects: ["Philosophy", "Sociology"],
      profileImg: "https://randomuser.me/api/portraits/men/27.jpg",
      status: "Retired",
    },
    {
      id: "9",
      name: "Isla Bennett",
      email: "isla.bennett@example.com",
      phoneNumber: "+445566778",
      address: "90 Redwood St, Springfield",
      subjects: ["French", "Spanish"],
      profileImg: "https://randomuser.me/api/portraits/women/28.jpg",
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
      align: "center",
      render: (text, record) => (
        <Space>
          <Link to={`/teacher/profile/${record.id}`}>
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
        dataSource={teachers}
        pagination={{ pageSize, onChange: (page) => setPageSize(page) }}
        scroll={{ x: 1000 }}
        rowKey={(record) => record.id}
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
