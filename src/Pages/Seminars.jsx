import React, { useState } from "react";
import { Button, Form, Input, Modal, Upload, DatePicker, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

// Dummy data
const initialSeminars = [
  {
    id: 1,
    title: "AI in Modern Education",
    description:
      "Explore how artificial intelligence is transforming the landscape of education and learning.",
    date: "2024-12-25",
    bannerImg: "https://via.placeholder.com/300x200?text=AI+in+Education", // Replace with real image
  },
  {
    id: 2,
    title: "The Future of Web Development",
    description:
      "Dive into the latest trends and technologies shaping the future of web development.",
    date: "2025-01-10",
    bannerImg: "https://via.placeholder.com/300x200?text=Web+Development", // Replace with real image
  },
  {
    id: 3,
    title: "Sustainable Tech Innovations",
    description:
      "Discover groundbreaking innovations that focus on sustainability in technology.",
    date: "2025-02-05",
    bannerImg: "https://via.placeholder.com/300x200?text=Sustainable+Tech", // Replace with real image
  },
  {
    id: 4,
    title: "Blockchain in Healthcare",
    description:
      "Learn how blockchain is revolutionizing the healthcare industry and improving patient outcomes.",
    date: "2025-03-15",
    bannerImg:
      "https://via.placeholder.com/300x200?text=Blockchain+in+Healthcare", // Replace with real image
  },
];

const SeminarPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [seminars, setSeminars] = useState(initialSeminars);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleAddSeminar = (values) => {
    const { title, description, date, bannerImg } = values;
    const bannerFile = bannerImg[0]?.originFileObj;

    if (!bannerFile) {
      message.error("Please upload a banner image!");
      return;
    }

    const newSeminar = {
      id: seminars.length + 1,
      title,
      description,
      date: date.format("YYYY-MM-DD"),
      bannerImg: URL.createObjectURL(bannerFile), // Temporary URL for uploaded image
    };

    setSeminars([...seminars, newSeminar]);
    setIsModalVisible(false);
    form.resetFields(); // Reset form fields after submission
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-6">Our Seminars</h2>
        <Button className="bg-primary text-white" onClick={showModal}>
          Add Seminar
        </Button>
      </div>

      <Modal
        title="Add Seminar"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form
          layout="vertical"
          onFinish={handleAddSeminar}
          form={form}
          initialValues={{ title: "", description: "", date: null }}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[
              { required: true, message: "Please enter the seminar title!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please enter the seminar description!",
              },
            ]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item
            label="Date"
            name="date"
            rules={[
              { required: true, message: "Please select the seminar date!" },
            ]}
          >
            <DatePicker className="w-full" />
          </Form.Item>

          <Form.Item
            label="Banner Image"
            name="bannerImg"
            valuePropName="fileList"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
            rules={[
              { required: true, message: "Please upload a banner image!" },
            ]}
          >
            <Upload
              accept="image/*"
              maxCount={1}
              beforeUpload={() => false}
              listType="picture"
            >
              <Button icon={<UploadOutlined />}>Upload Banner</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button className="bg-primary text-white" htmlType="submit">
              Add Seminar
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <div className="grid grid-cols-4 gap-6 mt-6">
        {seminars.map((seminar) => (
          <div
            key={seminar.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={seminar.bannerImg}
              alt={seminar.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{seminar.title}</h3>
              <p className="text-gray-500 mb-3 line-clamp-1">
                {seminar.description}
              </p>
              <p className="text-gray-500 text-sm">{seminar.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeminarPage;
