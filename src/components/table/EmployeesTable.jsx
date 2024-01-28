"use client";

import { Table } from "antd";

const EmployeesTable = ({ columns, data, loading = false }) => {
  return (
    <div style={{ maxWidth: "100%", overflow: "auto" }}>
      <Table
        loading={loading}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default EmployeesTable;
