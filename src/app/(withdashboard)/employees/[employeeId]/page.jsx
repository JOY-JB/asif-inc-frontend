import { Breadcrumb } from "antd";
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
            title: "Employees Details",
          },
        ]}
        style={{ marginBottom: "2rem" }}
      />
      <EmployeeDetails employeeId={employeeId} />
    </div>
  );
};

export default EmployeeDetailsPage;
