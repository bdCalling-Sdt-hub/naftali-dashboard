import { Button, Table, Tooltip } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";

// Dummy data for top courses

const columns = [
  {
    title: "ID",
    dataIndex: ["course", "_id"],
    key: "courseId",
    render: (record) => {
      return (
        <Tooltip title={record}>
          <p>{record.slice(0, 5)}...</p>
        </Tooltip>
      );
    },
  },
  {
    title: "Course Title",
    dataIndex: ["course", "name"],
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
    dataIndex: ["course", "price"],
    key: "price",
    render: (text) => `$${text}`,
  },
  {
    title: "Instructor",
    dataIndex: ["course", "teacherID"],
    key: "instructor",
    render: (record) => {
      return (
        <Tooltip title={"Obayedul Kader"}>
          <p>{"Obayedul Kader"}...</p>
        </Tooltip>
      );
    },
  },

  {
    title: "Earnings",
    dataIndex: "course",
    key: "course",
    render: (record) => {
      const earning = record?.price * record?.enrollmentsID?.length;
      return <p>{earning}</p>;
    },
  },
];

const TopCoursesTable = ({ topCourses }) => {
  // console.log(topCourses);

  const topThreeCourses = topCourses
    .map((course) => ({
      ...course,
      earnings:
        course.course.price * (course.course.enrollmentsID?.length || 0),
    }))
    .sort((a, b) => b.earnings - a.earnings)
    .slice(0, 3);

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
      <Table
        columns={columns}
        pagination={false}
        dataSource={topThreeCourses}
        rowKey={(record) => record.course._id}
      />
    </div>
  );
};

export default TopCoursesTable;
