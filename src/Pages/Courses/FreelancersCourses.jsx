import React, { useState, useEffect } from "react";
import { Tabs, Select } from "antd";
import { useGetAllCoursesQuery } from "../../redux/apiSlices/courseSlice";
import { SlCalender } from "react-icons/sl";
import { IoTime } from "react-icons/io5";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import moment from "moment";
const { Option } = Select;

const FreelancerCourses = () => {
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [activeTab, setActiveTab] = useState("active");

  const { data: courses, isLoading } = useGetAllCoursesQuery();

  useEffect(() => {
    if (courses) {
      const courseData = courses?.data?.filter(
        (course) => course.type === "freelancer"
      );
      setFilteredCourses(
        courseData.filter((course) => course.status === activeTab)
      );
    }
  }, [courses, activeTab]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const courseData = courses?.data || [];

  const activeCoursesCount = courseData.filter(
    (course) => course.status === "active" && course.type === "freelancer"
  ).length;
  const inactiveCoursesCount = courseData.filter(
    (course) => course.status === "completed" && course.type === "freelancer"
  ).length;

  const handleTabChange = (key) => {
    setActiveTab(key);
    setSearchQuery("");
    setSelectedLanguage("All");
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const updatedCourses = courseData.filter((course) => {
      const isMatchingTitle = course.name.toLowerCase().includes(query);
      const isMatchingTeacher = course.teacherName
        .toLowerCase()
        .includes(query);
      const isLanguageMatch =
        selectedLanguage === "All" || course.language === selectedLanguage;
      const isStatusMatch = course.status === activeTab;

      return (
        isStatusMatch &&
        (isMatchingTitle || isMatchingTeacher) &&
        isLanguageMatch
      );
    });

    setFilteredCourses(updatedCourses);
  };

  const handleLanguageChange = (value) => {
    setSelectedLanguage(value);
    const updatedCourses = courseData.filter(
      (course) =>
        course.status === activeTab && // Only filter based on the current tab
        (value === "All" || course.language === value)
    );
    setFilteredCourses(updatedCourses);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold my-5">Freelancer Courses</h1>
      <Tabs
        defaultActiveKey="active"
        activeKey={activeTab}
        onChange={handleTabChange}
      >
        <Tabs.TabPane tab={`Active (${activeCoursesCount})`} key="active" />
        <Tabs.TabPane
          tab={`Completed (${inactiveCoursesCount})`}
          key="completed"
        />
      </Tabs>

      <div className="flex justify-end gap-5 mb-6 2xl:mx-20 items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search by title or teacher"
          className="w-[300px] p-2 border rounded-md focus:outline-primary"
        />

        <Select
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className="w-[200px] border rounded-md focus:outline-primary"
        >
          <Option value="All">All Languages</Option>
          <Option value="ENGLISH">English</Option>
          <Option value="SPANISH">Spanish</Option>
          <Option value="HEBREW">Hebrew</Option>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:mx-20 gap-6">
        {filteredCourses.map((course, index) => (
          <div
            key={index}
            className="border rounded-md p-4 shadow-md flex flex-col h-full"
          >
            <img
              src={`${import.meta.env.VITE_BASE_URL}${course.banner}`}
              alt={course.title}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <div className="flex items-start justify-between w-full">
              <h3 className="text-lg font-semibold mb-2 w-[80%]">
                {course.name}
              </h3>
              <p className="text-xl font-bold text-primary">${course.price}</p>
            </div>
            <p className="text-sm text-gray-600 mb-1">{course.teacherName}</p>
            <div className="flex-grow" />
            <div className="flex items-center justify-between font-semibold text-xs mt-auto">
              <p className="flex items-center gap-1">
                <span>
                  <SlCalender size={16} />
                </span>
                {moment(course.date).format("ll")}
              </p>
              <p className="flex items-center gap-1">
                <span>
                  <IoTime size={20} />
                </span>
                {course.startTime} - {course.endTime}
              </p>
              <p className="flex items-center gap-1">
                <span>
                  <LiaChalkboardTeacherSolid size={24} />
                </span>
                {course.lectures.length} Lectures
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreelancerCourses;
