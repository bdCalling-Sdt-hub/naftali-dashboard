import { Button, Table, Tooltip } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";

// Dummy data for top courses
const dummyCourses = [
  {
    courseId: "C001",
    title: "Advanced React Development",
    price: 199,
    instructor: "John Doe",
    createdAt: "2024-12-01T10:00:00Z",
    students: 50, // Assuming 50 students enrolled
  },
  {
    courseId: "C002",
    title: "Intro to Web Development",
    price: 99,
    instructor: "Jane Smith",
    createdAt: "2024-12-03T14:00:00Z",
    students: 100, // Assuming 100 students enrolled
  },
  {
    courseId: "C003",
    title: "Mastering JavaScript",
    price: 150,
    instructor: "Alice Johnson",
    createdAt: "2024-12-05T09:30:00Z",
    students: 30, // Assuming 30 students enrolled
  },
  {
    courseId: "C004",
    title: "Python for Beginners",
    price: 120,
    instructor: "David Williams",
    createdAt: "2024-12-06T12:15:00Z",
    students: 60, // Assuming 60 students enrolled
  },
  {
    courseId: "C005",
    title: "Full Stack Web Development",
    price: 250,
    instructor: "Sarah Brown",
    createdAt: "2024-12-08T08:45:00Z",
    students: 40, // Assuming 40 students enrolled
  },
];

const data = dummyCourses.slice(0, 3).map((course, index) => ({
  ...course,
  key: course.courseId || index.toString(),
  totalEarned: course.price * course.students, // Calculate total earned for each course
}));

const columns = [
  {
    title: "ID",
    dataIndex: "courseId",
    key: "courseId",
  },
  {
    title: "Course Title",
    dataIndex: "title",
    key: "title",
    render: (record) => {
      return (
        <Tooltip title={record}>
          <p>{record.slice(0, 10)}...</p>
        </Tooltip>
      );
    },
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (text) => `$${text}`,
  },
  {
    title: "Instructor",
    dataIndex: "instructor",
    key: "instructor",
  },

  {
    title: "Earnings",
    dataIndex: "totalEarned",
    key: "totalEarned",
    render: (text) => `$${text}`,
  },
];

const TopCoursesTable = () => {
  return (
    <div className="border bg-white h-[300px] p-5 rounded-2xl">
      <div className="flex items-center justify-between">
        <h1 className="font-bold mb-2">Top Courses</h1>
        <Link to={"/manage-courses"}>
          <Button className="bg-secondary mb-4 border-secondary">
            View All
          </Button>
        </Link>
      </div>
      <Table columns={columns} pagination={false} dataSource={data} />
    </div>
  );
};

export default TopCoursesTable;
