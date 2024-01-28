"use client";

import { Breadcrumb, Button, Space, Tag } from "antd";
import Link from "next/link";
import EmployeesTable from "../../../components/table/EmployeesTable";

const EmployeesPage = () => {
  const columns = [
    {
      title: "#",
      dataIndex: "",
      key: "sl",
      width: "5%",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Full Name",
      key: "name",
      width: "40%",
      render: (data) => data.firstName + " " + data.lastName,
    },
    {
      title: "Status",
      key: "isBlocked",
      dataIndex: "isBlocked",
      width: "30%",
      render: (data) => (
        <Tag color={data ? "red" : "green"} key={data}>
          {data ? "Blocked" : "Unblock"}
        </Tag>
      ),
    },
    {
      title: "Action",
      dataIndex: "_id",
      key: "action",
      render: (data = 123456) => (
        <Space size="small">
          <Link href={`/employees/${data}`}>
          <Button type="text">data</Button> 
          </Link>
          <Button type="text">Block</Button> 
          <Button type="text" danger>Delete</Button> 
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      firstName: "John",
      lastName: "Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      isBlocked: true,
    },
    {
      key: "2",
      firstName: "Jim",
      lastName: "Green",
      age: 42,
      address: "London No. 1 Lake Park",
      isBlocked: false,
    },
    {
      key: "3",
      firstName: "Joe",
      lastName: "Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      isBlocked: true,
    },
  ];
  return (
    <div>
      <Breadcrumb
    items={[
      {
        title: 'Home',
      },
      {
        title: 'Employees List',
      },
    ]}

    style={{marginBottom: "2rem"}}
  />

      <EmployeesTable columns={columns} data={data} />
    </div>
  );
};

export default EmployeesPage;
