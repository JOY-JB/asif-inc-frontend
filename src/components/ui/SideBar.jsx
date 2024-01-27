"use client"

import { sidebarItems } from "@/app/constants/sidebarItems";
import { Layout, Menu } from "antd";
import { useState } from "react";
const { Sider } = Layout;


const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}       style={{
            height: "100vh",
            overflow: "auto",
            position: "sticky",
            left: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "#17494E",
          }}>
              <div
        style={{
          color: "white",
          fontSize: collapsed ? "1rem" : "2rem",
          fontWeight: "bold",
          textAlign: "center",
          margin: "1rem 0",
        }}
      >
        Asif Inc
      </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={sidebarItems()} />
      </Sider>
    );
};

export default SideBar;