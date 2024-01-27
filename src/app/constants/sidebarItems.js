import {
  UsergroupAddOutlined
} from "@ant-design/icons";
import Link from "next/link";

export const sidebarItems = () => {

  const defaultSidebarItems = [
    {
      label: <Link href={"/employees"}>Employees List</Link>,
      key: "Employees List",
      icon: <UsergroupAddOutlined />,
    },
  ];


    return defaultSidebarItems;
  
};
