"use client"

import { Layout } from "antd";
import Contents from "../../components/ui/Contents";
import SideBar from "../../components/ui/SideBar";



const DashboardLayout = ({ children }) => {
  return (
    <Layout hasSider>
      <SideBar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
