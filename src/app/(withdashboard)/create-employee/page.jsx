
import { Breadcrumb } from "antd";
import EmployeeCard from "../../../components/ui/EmployeeCard";

const CreateEmployeePage = () => {
  return (
    <div>
      <Breadcrumb
        items={[
          {
            title: "Home",
          },
          {
            title: "Create Employee",
          },
        ]}
        style={{ marginBottom: "2rem" }}
      />
        <EmployeeCard />
    </div>
  );
};

export default CreateEmployeePage;  



