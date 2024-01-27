"use client"

import { Table } from "antd";

const EmployeesTable = ({ columns, data, loading = false }) => {
  return <Table loading={loading} columns={columns} dataSource={data} />;
};

export default EmployeesTable;
