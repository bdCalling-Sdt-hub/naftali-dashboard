import React from "react";
import { Table, Dropdown, Menu, DatePicker } from "antd";
import { BiLeftArrowAlt } from "react-icons/bi";
import { render } from "react-dom";
import moment from "moment";

const offlineTeachersTransactions = [
  {
    key: "1",
    transactionId: "TXN001",
    courseName: "Advanced Mathematics",
    courseDuration: "3 months",
    studentName: "Alice Johnson",
    studentEmail: "alice.johnson@example.com",
    purchaseDate: "2024-12-01",
    amount: 50,
    paymentMethod: "Credit Card",
    status: "Completed",
    teacherName: "Mr. John Doe",
  },
  {
    key: "2",
    transactionId: "TXN002",
    courseName: "Physics for Beginners",
    courseDuration: "2 months",
    studentName: "Bob Smith",
    studentEmail: "bob.smith@example.com",
    purchaseDate: "2024-12-02",
    amount: 40,
    paymentMethod: "PayPal",
    status: "Completed",
    teacherName: "Ms. Jane Doe",
  },
  {
    key: "3",
    transactionId: "TXN003",
    courseName: "Chemistry 101",
    courseDuration: "1 month",
    studentName: "Charlie Brown",
    studentEmail: "charlie.brown@example.com",
    purchaseDate: "2024-12-05",
    amount: 60,
    paymentMethod: "Bank Transfer",
    status: "Completed",
    teacherName: "Dr. Alex Smith",
  },
  {
    key: "4",
    transactionId: "TXN004",
    courseName: "Algebra Basics",
    courseDuration: "6 weeks",
    studentName: "David Green",
    studentEmail: "david.green@example.com",
    purchaseDate: "2024-12-07",
    amount: 55,
    paymentMethod: "Credit Card",
    status: "Completed",
    teacherName: "Ms. Laura Miller",
  },
  {
    key: "5",
    transactionId: "TXN005",
    courseName: "English Literature",
    courseDuration: "2 months",
    studentName: "Eva White",
    studentEmail: "eva.white@example.com",
    purchaseDate: "2024-12-10",
    amount: 75,
    paymentMethod: "PayPal",
    status: "Completed",
    teacherName: "Mr. William James",
  },
  {
    key: "6",
    transactionId: "TXN006",
    courseName: "Advanced Chemistry",
    courseDuration: "1 month",
    studentName: "Frank Black",
    studentEmail: "frank.black@example.com",
    purchaseDate: "2024-12-12",
    amount: 80,
    paymentMethod: "Bank Transfer",
    status: "Completed",
    teacherName: "Dr. Natalie Adams",
  },
  {
    key: "7",
    transactionId: "TXN007",
    courseName: "Calculus 101",
    courseDuration: "3 months",
    studentName: "Grace Red",
    studentEmail: "grace.red@example.com",
    purchaseDate: "2024-12-13",
    amount: 65,
    paymentMethod: "Credit Card",
    status: "Completed",
    teacherName: "Mr. Robert Harris",
  },
  {
    key: "8",
    transactionId: "TXN008",
    courseName: "Psychology Basics",
    courseDuration: "2 months",
    studentName: "Hannah Yellow",
    studentEmail: "hannah.yellow@example.com",
    purchaseDate: "2024-12-14",
    amount: 70,
    paymentMethod: "PayPal",
    status: "Completed",
    teacherName: "Ms. Clara Smith",
  },
];

// Dummy Data for Freelancers Transactions (More Entries)
const freelancersTransactions = [
  {
    key: "1",
    transactionId: "TXN009",
    courseName: "Graphic Design Fundamentals",
    courseDuration: "4 weeks",
    studentName: "Daisy Green",
    studentEmail: "daisy.green@example.com",
    purchaseDate: "2024-12-03",
    amount: 45,
    paymentMethod: "Credit Card",
    status: "Completed",
    freelancerName: "Freelancer1",
  },
  {
    key: "2",
    transactionId: "TXN010",
    courseName: "Introduction to Digital Marketing",
    courseDuration: "6 weeks",
    studentName: "Eve White",
    studentEmail: "eve.white@example.com",
    purchaseDate: "2024-12-06",
    amount: 55,
    paymentMethod: "PayPal",
    status: "Completed",
    freelancerName: "Freelancer2",
  },
  {
    key: "3",
    transactionId: "TXN011",
    courseName: "Web Development Bootcamp",
    courseDuration: "2 months",
    studentName: "Frank Black",
    studentEmail: "frank.black@example.com",
    purchaseDate: "2024-12-07",
    amount: 70,
    paymentMethod: "Bank Transfer",
    status: "Completed",
    freelancerName: "Freelancer3",
  },
  {
    key: "4",
    transactionId: "TXN012",
    courseName: "SEO Optimization for Beginners",
    courseDuration: "5 weeks",
    studentName: "George Blue",
    studentEmail: "george.blue@example.com",
    purchaseDate: "2024-12-08",
    amount: 50,
    paymentMethod: "Credit Card",
    status: "Completed",
    freelancerName: "Freelancer4",
  },
  {
    key: "5",
    transactionId: "TXN013",
    courseName: "Python for Data Science",
    courseDuration: "2 months",
    studentName: "Helen Purple",
    studentEmail: "helen.purple@example.com",
    purchaseDate: "2024-12-09",
    amount: 85,
    paymentMethod: "PayPal",
    status: "Completed",
    freelancerName: "Freelancer5",
  },
  {
    key: "6",
    transactionId: "TXN014",
    courseName: "Digital Photography",
    courseDuration: "1 month",
    studentName: "Ivy Orange",
    studentEmail: "ivy.orange@example.com",
    purchaseDate: "2024-12-10",
    amount: 60,
    paymentMethod: "Bank Transfer",
    status: "Completed",
    freelancerName: "Freelancer6",
  },
  {
    key: "7",
    transactionId: "TXN015",
    courseName: "Advanced JavaScript",
    courseDuration: "4 weeks",
    studentName: "Jack Brown",
    studentEmail: "jack.brown@example.com",
    purchaseDate: "2024-12-11",
    amount: 90,
    paymentMethod: "Credit Card",
    status: "Completed",
    freelancerName: "Freelancer7",
  },
  {
    key: "8",
    transactionId: "TXN016",
    courseName: "UI/UX Design Fundamentals",
    courseDuration: "3 months",
    studentName: "Kate Grey",
    studentEmail: "kate.grey@example.com",
    purchaseDate: "2024-12-12",
    amount: 95,
    paymentMethod: "PayPal",
    status: "Completed",
    freelancerName: "Freelancer8",
  },
];

// Columns for Offline Teachers Transactions Table
const offlineColumns = [
  { title: "Transaction ID", dataIndex: "transactionId", key: "transactionId" },
  { title: "Course Name", dataIndex: "courseName", key: "courseName" },
  {
    title: "Course Duration",
    dataIndex: "courseDuration",
    key: "courseDuration",
  },
  { title: "Student Name", dataIndex: "studentName", key: "studentName" },
  { title: "Student Email", dataIndex: "studentEmail", key: "studentEmail" },
  {
    title: "Purchase Date",
    dataIndex: "purchaseDate",
    key: "purchaseDate",
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => {
      const handleMenuClick = (e) => {
        const year = e.key;
        setSelectedKeys([year]);
        confirm();
      };

      const years = ["2024", "2023", "2022", "2021"]; // Modify as needed

      const menu = (
        <Menu onClick={handleMenuClick}>
          {years.map((year) => (
            <Menu.Item key={year}>{year}</Menu.Item>
          ))}
        </Menu>
      );

      return (
        <div style={{ padding: 8 }}>
          <Dropdown overlay={menu} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              Filter by Year
            </a>
          </Dropdown>
        </div>
      );
    },
    onFilter: (value, record) => {
      const recordYear = moment(record.purchaseDate).year();
      return recordYear.toString() === value;
    },
  },
  { title: "Amount ($)", dataIndex: "amount", key: "amount" },
  { title: "Payment Method", dataIndex: "paymentMethod", key: "paymentMethod" },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (record) => {
      if (record === "Completed") {
        return (
          <span className="text-green-700 border-green-300 border-2 border-dashed bg-green-50 p-1 rounded-lg">
            {record}
          </span>
        );
      } else if (record === "Pending") {
        return (
          <span className="text-yellow-700 border-yellow-300 border-2 border-dashed bg-yellow-50 p-1 rounded-lg">
            {record}
          </span>
        );
      } else {
        return (
          <span className="text-red-700 border-red-300 border-2 border-dashed bg-red-50 p-1 rounded-lg">
            {record}
          </span>
        );
      }
    },
  },
  { title: "Teacher Name", dataIndex: "teacherName", key: "teacherName" },
];

// Columns for Freelancers Transactions Table
const freelancersColumns = [
  { title: "Transaction ID", dataIndex: "transactionId", key: "transactionId" },
  { title: "Course Name", dataIndex: "courseName", key: "courseName" },
  {
    title: "Course Duration",
    dataIndex: "courseDuration",
    key: "courseDuration",
  },
  { title: "Student Name", dataIndex: "studentName", key: "studentName" },
  { title: "Student Email", dataIndex: "studentEmail", key: "studentEmail" },
  {
    title: "Purchase Date",
    dataIndex: "purchaseDate",
    key: "purchaseDate",
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => {
      const handleMenuClick = (e) => {
        const year = e.key;
        setSelectedKeys([year]);
        confirm();
      };

      const years = ["2024", "2023", "2022", "2021"]; // Modify as needed

      const menu = (
        <Menu onClick={handleMenuClick}>
          {years.map((year) => (
            <Menu.Item key={year}>{year}</Menu.Item>
          ))}
        </Menu>
      );

      return (
        <div style={{ padding: 8 }}>
          <Dropdown overlay={menu} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              Filter by Year
            </a>
          </Dropdown>
        </div>
      );
    },
    onFilter: (value, record) => {
      const recordYear = moment(record.purchaseDate).year();
      return recordYear.toString() === value;
    },
  },
  { title: "Amount ($)", dataIndex: "amount", key: "amount" },
  { title: "Payment Method", dataIndex: "paymentMethod", key: "paymentMethod" },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (record) => {
      if (record === "Completed") {
        return (
          <span className="text-green-700 border-green-300 border-2 border-dashed bg-green-50 p-1 rounded-lg">
            {record}
          </span>
        );
      } else if (record === "Pending") {
        return (
          <span className="text-yellow-700 border-yellow-300 border-2 border-dashed bg-yellow-50 p-1 rounded-lg">
            {record}
          </span>
        );
      } else {
        return (
          <span className="text-red-700 border-red-300 border-2 border-dashed bg-red-50 p-1 rounded-lg">
            {record}
          </span>
        );
      }
    },
  },
  {
    title: "Freelancer Name",
    dataIndex: "freelancerName",
    key: "freelancerName",
  },
];

const OurTransactions = () => {
  return (
    <div className="p-6">
      {/* Page Heading */}
      <h1 className="text-2xl text-center my-10 font-bold">Transactions</h1>

      {/* Transactions Table */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Offline Teachers Transactions
        </h2>
        <Table
          columns={offlineColumns}
          dataSource={offlineTeachersTransactions}
          pagination={{ pageSize: 5 }}
        />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Freelancers Transactions</h2>
        <Table
          columns={freelancersColumns}
          dataSource={freelancersTransactions}
          pagination={{ pageSize: 5 }}
        />
      </div>
    </div>
  );
};

export default OurTransactions;
