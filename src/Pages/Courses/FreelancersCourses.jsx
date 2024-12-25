import React, { useState } from "react";
import moment from "moment";
import { Button, Tabs } from "antd";
import { SlCalender } from "react-icons/sl";
import { IoTime } from "react-icons/io5";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import banner from "../../assets/Rectangle 5015 (1).png";

const coursesData = [
  {
    bannerImg: banner,
    title: "Complete English Course",
    teacherName: "Junayed Polok",
    price: 100,
    date: "01-09-2024",
    time: { startTime: "14:00", endTime: "16:00" },
    lectures: 10,
    isFreelancer: false,
    status: "active",
  },
  {
    bannerImg: banner,
    title: "Advanced Mathematics",
    teacherName: "Sara Ahmed",
    price: 120,
    date: "05-09-2024",
    time: { startTime: "10:00", endTime: "12:00" },
    lectures: 15,
    isFreelancer: true,
    status: "inactive",
  },
  {
    bannerImg: banner,
    title: "Basic Physics Concepts",
    teacherName: "Rahul Das",
    price: 90,
    date: "10-09-2024",
    time: { startTime: "09:00", endTime: "11:00" },
    lectures: 12,
    isFreelancer: false,
    status: "active",
  },
  {
    bannerImg: banner,
    title: "Introduction to Programming",
    teacherName: "Emily Green",
    price: 150,
    date: "12-09-2024",
    time: { startTime: "13:00", endTime: "15:00" },
    lectures: 20,
    isFreelancer: true,
    status: "active",
  },
  {
    bannerImg: banner,
    title: "Graphic Design Basics",
    teacherName: "Michael White",
    price: 80,
    date: "15-09-2024",
    time: { startTime: "16:00", endTime: "18:00" },
    lectures: 8,
    isFreelancer: false,
    status: "inactive",
  },
  {
    bannerImg: banner,
    title: "Digital Marketing Essentials",
    teacherName: "John Doe",
    price: 200,
    date: "18-09-2024",
    time: { startTime: "11:00", endTime: "13:00" },
    lectures: 25,
    isFreelancer: true,
    status: "active",
  },
  {
    bannerImg: banner,
    title: "SEO Crash Course",
    teacherName: "Alice Johnson",
    price: 50,
    date: "20-09-2024",
    time: { startTime: "17:00", endTime: "19:00" },
    lectures: 5,
    isFreelancer: false,
    status: "inactive",
  },
  {
    bannerImg: banner,
    title: "Intermediate Chemistry",
    teacherName: "Nina Brown",
    price: 110,
    date: "22-09-2024",
    time: { startTime: "12:00", endTime: "14:00" },
    lectures: 18,
    isFreelancer: true,
    status: "active",
  },
  {
    bannerImg: banner,
    title: "Web Development Bootcamp",
    teacherName: "Liam Scott",
    price: 250,
    date: "25-09-2024",
    time: { startTime: "09:00", endTime: "11:00" },
    lectures: 30,
    isFreelancer: false,
    status: "active",
  },
  {
    bannerImg: banner,
    title: "Photography Workshop",
    teacherName: "Sophia King",
    price: 70,
    date: "27-09-2024",
    time: { startTime: "14:00", endTime: "16:00" },
    lectures: 6,
    isFreelancer: true,
    status: "inactive",
  },
  {
    bannerImg: banner,
    title: "Mobile App Development",
    teacherName: "Oliver Reed",
    price: 300,
    date: "30-09-2024",
    time: { startTime: "10:00", endTime: "12:00" },
    lectures: 40,
    isFreelancer: false,
    status: "active",
  },
  {
    bannerImg: banner,
    title: "Public Speaking Skills",
    teacherName: "Mia Davis",
    price: 60,
    date: "02-10-2024",
    time: { startTime: "15:00", endTime: "17:00" },
    lectures: 7,
    isFreelancer: true,
    status: "active",
  },
  {
    bannerImg: banner,
    title: "Beginner's Yoga",
    teacherName: "James Hall",
    price: 40,
    date: "05-10-2024",
    time: { startTime: "08:00", endTime: "09:00" },
    lectures: 4,
    isFreelancer: false,
    status: "inactive",
  },
  {
    bannerImg: banner,
    title: "Machine Learning Basics",
    teacherName: "Lily Carter",
    price: 400,
    date: "07-10-2024",
    time: { startTime: "13:00", endTime: "15:00" },
    lectures: 35,
    isFreelancer: true,
    status: "active",
  },
  {
    bannerImg: banner,
    title: "Art of Negotiation",
    teacherName: "Benjamin Lee",
    price: 90,
    date: "09-10-2024",
    time: { startTime: "18:00", endTime: "20:00" },
    lectures: 10,
    isFreelancer: false,
    status: "active",
  },
  {
    bannerImg: banner,
    title: "Advanced Graphic Design",
    teacherName: "Ava Wilson",
    price: 150,
    date: "11-10-2024",
    time: { startTime: "09:00", endTime: "11:00" },
    lectures: 15,
    isFreelancer: true,
    status: "inactive",
  },
  {
    bannerImg: banner,
    title: "Personal Finance Management",
    teacherName: "Jack Walker",
    price: 50,
    date: "13-10-2024",
    time: { startTime: "12:00", endTime: "14:00" },
    lectures: 8,
    isFreelancer: false,
    status: "active",
  },
  {
    bannerImg: banner,
    title: "Cooking Basics",
    teacherName: "Emma Harris",
    price: 30,
    date: "15-10-2024",
    time: { startTime: "16:00", endTime: "18:00" },
    lectures: 5,
    isFreelancer: true,
    status: "inactive",
  },
  {
    bannerImg: banner,
    title: "Creative Writing Workshop",
    teacherName: "Lucas Martin",
    price: 85,
    date: "18-10-2024",
    time: { startTime: "14:00", endTime: "16:00" },
    lectures: 12,
    isFreelancer: false,
    status: "active",
  },
  {
    bannerImg: banner,
    title: "AI Fundamentals",
    teacherName: "Charlotte Moore",
    price: 350,
    date: "20-10-2024",
    time: { startTime: "11:00", endTime: "13:00" },
    lectures: 30,
    isFreelancer: true,
    status: "active",
  },
];

const FreelancersCourses = () => {
  const [filteredCourses, setFilteredCourses] = useState(
    coursesData.filter((course) => course.status === "active")
  );
  const [searchQuery, setSearchQuery] = useState("");
  const activeCoursesCount = coursesData.filter(
    (course) => course.status === "active"
  ).length;
  const inactiveCoursesCount = coursesData.filter(
    (course) => course.status === "inactive"
  ).length;

  const handleTabChange = (key) => {
    const updatedCourses = coursesData.filter(
      (course) => course.status === key
    );
    setFilteredCourses(updatedCourses);
    setSearchQuery(""); // Reset search when tab changes
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredCourses(
      coursesData.filter(
        (course) =>
          course.status === "active" &&
          (course.title.toLowerCase().includes(query) ||
            course.teacherName.toLowerCase().includes(query))
      )
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-bold my-5">Freelancer Courses</h1>
      <Tabs defaultActiveKey="active" onChange={handleTabChange}>
        <Tabs.TabPane tab={`Active (${activeCoursesCount})`} key="active" />
        <Tabs.TabPane
          tab={`Inactive (${inactiveCoursesCount})`}
          key="inactive"
        />
      </Tabs>
      <div className="flex justify-center my-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search by course name or teacher name"
          className="w-[400px] p-2 border rounded-md focus:outline-primary"
        />
      </div>
      <div className="flex justify-center flex-wrap gap-5">
        {filteredCourses.map((course, i) => (
          <div key={i} className="w-[400px] p-3 border rounded-2xl bg-white">
            <img
              className="w-full rounded-xl h-[230px]"
              src={course.bannerImg}
              alt="cardBanner"
            />
            <div className="flex items-center mt-2 justify-between">
              <h1 className="text-lg font-bold">{course.title}</h1>
              <p className="text-lg font-bold text-primary">${course.price}</p>
            </div>
            <h1 className="text-gray-500 my-1">{course.teacherName}</h1>
            <div className="flex items-center justify-between font-semibold text-sm">
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
                {course.time.startTime} - {course.time.endTime}
              </p>
              <p className="flex items-center gap-1">
                <span>
                  <LiaChalkboardTeacherSolid size={24} />
                </span>
                {course.lectures} Lectures
              </p>
            </div>
            <Button className="bg-primary w-full mt-3 text-white font-semibold">
              View Details
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreelancersCourses;
