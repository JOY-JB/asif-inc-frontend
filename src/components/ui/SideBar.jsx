"use client"

import { Grid, Layout, Menu } from "antd";
import { useState } from "react";
import { sidebarItems } from "../../app/constants/sidebarItems";
const { Sider } = Layout;

const { useBreakpoint } = Grid;


const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const screens = useBreakpoint();


    return (
      <section style={{display: screens.xs ? "none" : "block"}}>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}       style={{
            height: "100vh",
            overflow: "auto",
            position: "sticky",
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
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={sidebarItems()} style={{
            overflow: "auto",
            height: "calc(100vh - 112px)",
            position: "sticky",
            top: collapsed ? 64 : 48,
            bottom: 48,
          }} />
      </Sider>
      </section>
    );
};

export default SideBar;