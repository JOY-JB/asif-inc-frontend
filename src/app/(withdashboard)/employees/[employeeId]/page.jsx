"use client";

import { Breadcrumb } from "antd";
import Link from "next/link";
import EmployeeDetails from "../../../../components/ui/EmployeeDetails";

const EmployeeDetailsPage = ({ params }) => {
  const { employeeId } = params;

  return (
    <div>
      <Breadcrumb
        items={[
          {
            title: "Home",
          },
          {
            title: <Link href={"/employees"}>Employees List</Link>,
          },
          {
            title: "Employee Details",
          },
        ]}
        style={{ marginBottom: "2rem" }}
      />
      <EmployeeDetails employeeId={employeeId} />
    </div>
  );
};

export default EmployeeDetailsPage;
