import {
  UserAddOutlined,
  UsergroupAddOutlined
} from "@ant-design/icons";
import Link from "next/link";

export const sidebarItems = () => {

  const defaultSidebarItems = [
    {
      label: <Link href={"/create-employee"}>Create Employee</Link>,
      key: "Create Employee",
      icon: <UserAddOutlined />,
    },
    {
      label: <Link href={"/employees"}>Employees List</Link>,
      key: "Employees List",
      icon: <UsergroupAddOutlined />,
    },
  ];


    return defaultSidebarItems;
  
};
