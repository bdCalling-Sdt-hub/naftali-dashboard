import React, { useState } from "react";
import {
  Table,
  Tabs,
  Input,
  Button,
  Modal,
  Form,
  Upload,
  message,
  Select,
  AutoComplete,
  Badge,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";

const coursesData = [
  {
    id: 1,
    type: "Freelancer",
    title: "Web Development Bootcamp",
    teacherName: "John Doe",
    status: "active",
    totalSold: 120,
    totalStudents: 200,
    rating: 4.5,
    totalEarned: 5000,
    bannerImg: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    type: "Offline",
    title: "Digital Marketing",
    teacherName: "Jane Smith",
    status: "inactive",
    totalSold: 50,
    totalStudents: 60,
    rating: 4.2,
    totalEarned: 1500,
    bannerImg: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    type: "Freelancer",
    title: "React Native Mastery",
    teacherName: "Alice Johnson",
    status: "active",
    totalSold: 180,
    totalStudents: 220,
    rating: 4.8,
    totalEarned: 7200,
    bannerImg: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    type: "Offline",
    title: "Python for Data Science",
    teacherName: "Bob Brown",
    status: "inactive",
    totalSold: 70,
    totalStudents: 150,
    rating: 4.3,
    totalEarned: 3500,
    bannerImg: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    type: "Freelancer",
    title: "UI/UX Design for Beginners",
    teacherName: "Emma Davis",
    status: "active",
    totalSold: 90,
    totalStudents: 130,
    rating: 4.6,
    totalEarned: 4500,
    bannerImg: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    type: "Offline",
    title: "Digital Photography",
    teacherName: "George Clark",
    status: "inactive",
    totalSold: 30,
    totalStudents: 50,
    rating: 4.0,
    totalEarned: 1200,
    bannerImg: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    type: "Freelancer",
    title: "SEO and Content Marketing",
    teacherName: "Sophia Martinez",
    status: "active",
    totalSold: 110,
    totalStudents: 180,
    rating: 4.7,
    totalEarned: 6000,
    bannerImg: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    type: "Offline",
    title: "Graphic Design Essentials",
    teacherName: "Daniel Lee",
    status: "inactive",
    totalSold: 80,
    totalStudents: 110,
    rating: 4.4,
    totalEarned: 2500,
    bannerImg: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    type: "Freelancer",
    title: "JavaScript Advanced Concepts",
    teacherName: "Olivia Harris",
    status: "active",
    totalSold: 150,
    totalStudents: 200,
    rating: 4.9,
    totalEarned: 9000,
    bannerImg: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    type: "Offline",
    title: "Introduction to AI and Machine Learning",
    teacherName: "David Wilson",
    status: "inactive",
    totalSold: 60,
    totalStudents: 80,
    rating: 4.6,
    totalEarned: 1800,
    bannerImg: "https://via.placeholder.com/150",
  },
  {
    id: 11,
    type: "Freelancer",
    title: "Cloud Computing with AWS",
    teacherName: "Mia Young",
    status: "active",
    totalSold: 200,
    totalStudents: 250,
    rating: 4.8,
    totalEarned: 10000,
    bannerImg: "https://via.placeholder.com/150",
  },
  {
    id: 12,
    type: "Offline",
    title: "Cybersecurity Fundamentals",
    teacherName: "James Turner",
    status: "inactive",
    totalSold: 40,
    totalStudents: 60,
    rating: 4.2,
    totalEarned: 1600,
    bannerImg: "https://via.placeholder.com/150",
  },
  {
    id: 13,
    type: "Freelancer",
    title: "Data Structures and Algorithms",
    teacherName: "Liam Scott",
    status: "active",
    totalSold: 160,
    totalStudents: 210,
    rating: 4.7,
    totalEarned: 8000,
    bannerImg: "https://via.placeholder.com/150",
  },
  {
    id: 14,
    type: "Offline",
    title: "Business Management and Strategy",
    teacherName: "Charlotte Wright",
    status: "inactive",
    totalSold: 90,
    totalStudents: 130,
    rating: 4.3,
    totalEarned: 3500,
    bannerImg: "https://via.placeholder.com/150",
  },
  {
    id: 15,
    type: "Freelancer",
    title: "Android Development",
    teacherName: "Amelia Brown",
    status: "active",
    totalSold: 130,
    totalStudents: 180,
    rating: 4.6,
    totalEarned: 6000,
    bannerImg: "https://via.placeholder.com/150",
  },
];

const teachersName = coursesData.map((course) => course.teacherName);

const ManageCourses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("all");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState(null);
  const [filteredTeachers, setFilteredTeachers] = useState(teachersName);

  const columns = [
    {
      title: "Banner",
      dataIndex: "bannerImg",
      key: "bannerImg",
      render: (record) => {
        return (
          <img src={record} alt="banner" style={{ width: 100, height: 60 }} />
        );
      },
    },
    {
      title: "Course Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Teacher Name",
      dataIndex: "teacherName",
      key: "teacherName",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Badge
          status={status === "active" ? "success" : "default"}
          text={status}
        />
      ),
    },
    {
      title: "Total Sold",
      dataIndex: "totalSold",
      key: "totalSold",
      sorter: (a, b) => a.totalSold - b.totalSold,
    },
    {
      title: "Total Students",
      dataIndex: "totalStudents",
      key: "totalStudents",
      sorter: (a, b) => a.totalStudents - b.totalStudents,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      sorter: (a, b) => a.rating - b.rating,
    },
    {
      title: "Total Earned",
      dataIndex: "totalEarned",
      key: "totalEarned",
      sorter: (a, b) => a.totalEarned - b.totalEarned,
      render: (record) => <p>${record}</p>,
    },
  ];

  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesTab =
      selectedTab === "all" || course.type.toLowerCase() === selectedTab;
    return matchesSearch && matchesTab;
  });

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAddCourse = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Form Values: ", values);
        message.success("Course added successfully!");
        setIsModalVisible(false);
        form.resetFields();
        setImageUrl(null);
      })
      .catch((errorInfo) => {
        console.log("Validate Failed:", errorInfo);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleImageUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
      return Upload.LIST_IGNORE;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);

    return false; // Prevent automatic upload
  };

  const handleTeacherSearch = (value) => {
    if (!value) {
      setFilteredTeachers(teachersList);
      return;
    }

    const filtered = teachersName.filter((teacher) =>
      teacher.toLowerCase().includes(value.toLowerCase())
    );

    if (filtered.length === 0) {
      setFilteredTeachers(["No teacher found"]);
    } else {
      setFilteredTeachers(filtered);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Courses</h1>
      <div className="flex justify-between items-center mb-4">
        <Tabs
          defaultActiveKey="all"
          activeKey={selectedTab}
          onChange={(key) => setSelectedTab(key)}
        >
          <Tabs.TabPane tab="All" key="all" />
          <Tabs.TabPane tab="Offline" key="offline" />
          <Tabs.TabPane tab="Freelancer" key="freelancer" />
        </Tabs>
        <Input
          placeholder="Search by course title"
          value={searchQuery}
          onChange={handleSearch}
          className="w-64"
        />
        <Button
          className="bg-primary text-white"
          icon={<PlusOutlined />}
          onClick={() => setIsModalVisible(true)}
        >
          Add Course
        </Button>
      </div>
      <Table
        dataSource={filteredCourses.map((course) => ({
          ...course,
          key: course.id,
        }))}
        columns={columns}
        pagination={{ pageSize: 5 }}
        bordered
        className="bg-white rounded-md"
      />

      <Modal
        title="Add New Course"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} onFinish={handleAddCourse} layout="vertical">
          <Form.Item
            label="Course Title"
            name="title"
            rules={[
              { required: true, message: "Please enter the course title!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Teacher Name"
            name="teacherName"
            rules={[
              { required: true, message: "Please select the teacher's name!" },
            ]}
          >
            <AutoComplete
              options={filteredTeachers.map((teacher) => ({
                value: teacher,
              }))}
              placeholder="Start typing teacher's name"
              onSearch={handleTeacherSearch}
            />
          </Form.Item>
          <Form.Item
            label="Course Type"
            name="type"
            rules={[
              { required: true, message: "Please select the course type!" },
            ]}
          >
            <Select>
              <Select.Option value="Freelancer">Freelancer</Select.Option>
              <Select.Option value="Offline">Offline</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Active"
            name="active"
            rules={[
              { required: true, message: "Please select the course status!" },
            ]}
          >
            <Select>
              <Select.Option value="active">Active</Select.Option>
              <Select.Option value="inactive">Inactive</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Course Banner"
            name="bannerImg"
            rules={[
              { required: true, message: "Please upload a course banner!" },
            ]}
          >
            <Upload
              name="file"
              listType="picture-card"
              className="upload-list-inline"
              showUploadList={false}
              beforeUpload={handleImageUpload}
            >
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload Image</div>
              </div>
            </Upload>
            {imageUrl && (
              <div style={{ marginTop: 16 }}>
                <img
                  src={imageUrl}
                  alt="Course Banner"
                  style={{ width: "100px", height: "auto" }}
                />
              </div>
            )}
          </Form.Item>
          <Form.Item>
            <Button className="bg-primary" htmlType="submit">
              Add Course
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ManageCourses;
