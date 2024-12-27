import React, { useState } from "react";
import {
  Table,
  Tabs,
  Input,
  Button,
  Modal,
  Form,
  DatePicker,
  TimePicker,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useGetAllCoursesQuery } from "../../redux/apiSlices/courseSlice";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import whiteBg from "../../assets/whiteBG.png";

const ManageCourses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("all");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const { data: courses, isLoading } = useGetAllCoursesQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const courseData = courses?.data || [];
  // console.log(courseData);

  const columns = [
    {
      title: "Banner",
      dataIndex: "banner",
      key: "bannerImg",
      render: (record) => {
        return (
          <img
            src={`${import.meta.env.VITE_BASE_URL}${record}`}
            alt="banner"
            style={{ width: 100, height: 60 }}
            className="object-cover rounded-lg"
          />
        );
      },
    },
    {
      title: "Course Title",
      dataIndex: "name",
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
        <p
          className={` px-2 py-1 rounded-lg text-center ${
            status === "active" ? "text-green-800" : "text-orange-500"
          }`}
        >
          {status}
        </p>
      ),
      sorter: (a, b) => a.status.localeCompare(b.status),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (record) => <p>${record}</p>,
    },
    {
      title: "Total Students",
      dataIndex: "enrollmentsID",
      key: "totalStudents",
      align: "center",
      render: (record) => <p>{record.length}</p>,
      sorter: (a, b) => a.enrollmentsID.length - b.enrollmentsID.length,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (record) => <p>{record || "N/A"}</p>,
      sorter: (a, b) => a.rating - b.rating,
    },
    {
      title: "Total Earned",
      dataIndex: "price",
      key: "totalEarned",
      align: "center",
      render: (price, record) => <p>${price * record.enrollmentsID.length}</p>,
      sorter: (a, b) =>
        a.price * a.enrollmentsID.length - b.price * b.enrollmentsID.length,
    },
  ];

  const filteredCourses = courseData.filter((course) => {
    const matchesSearch = course.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesTab =
      selectedTab === "all" || course.type.toLowerCase() === selectedTab;
    return matchesSearch && matchesTab;
  });

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
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
          <Tabs.TabPane tab="Platform" key="platform" />
          <Tabs.TabPane tab="Freelancer" key="freelancer" />
        </Tabs>
        <div className="space-x-7">
          <Input
            placeholder="Search by course title"
            value={searchQuery}
            onChange={handleSearch}
            className="w-96 py-2"
          />
        </div>
      </div>
      <Table
        dataSource={filteredCourses.map((course) => ({
          ...course,
          key: course.id,
        }))}
        columns={columns}
        pagination={{ pageSize: 7 }}
        bordered
        className="bg-white rounded-md"
        rowKey={(record) => record._id}
      />
    </div>
  );
};

export default ManageCourses;
