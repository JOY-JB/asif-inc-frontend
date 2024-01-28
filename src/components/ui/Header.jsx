"use client"

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined, UserOutlined
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Drawer,
  Dropdown,
  Grid,
  Layout,
  Menu,
  Row,
  Space,
  Typography
} from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { sidebarItems } from "../../app/constants/sidebarItems";
const { Title } = Typography;

const { useBreakpoint } = Grid;

const { Header: AntDHeader } = Layout;

const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const screens = useBreakpoint();


  const items = [
    {
      key: "0",
      label: (
        <Button type="text">
          Menu Items Coming Soon 
        </Button>
      ),
    },
  ];

  return (
    <AntDHeader
      style={{
        background: "#B98C48",
        padding: "0 25px",
      }}
    >
      <Row style={{ height: "100%" }} align={"middle"} justify={"space-between"}>
      <div style={{display: screens.xs ? "block" : "none"}}>
          <Button
            type="text"
            icon={!open ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={showDrawer}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              borderRadius: "0px",
              color: "white",
            }}
          />
        </div>

        <p style={{"fontWeight":700,"cursor":"pointer"}}></p>

        <Drawer
          placement={"left"}
          closable={false}
          onClose={onClose}
          open={open}
          key={"left"}
          width={270}
          style={{backgroundColor: "#17494E",}}
          bodyStyle={{ padding:'15px 5px' }}
        >
          <Sider
            width={270}
            style={{
              backgroundColor: "#17494E",
              padding: "0px",
            }}
          >

            <div
              style={{
                color: "#B98C48",
                fontSize: "2rem",
                fontWeight: "bold",
                textAlign: "center",
                padding: "10px 0",
                cursor: "pointer",
              }}
            >
              Asif
            </div>
            <Menu
              theme="Dark"
              defaultSelectedKeys={['1']}
              mode="inline"
              items={sidebarItems()}
              style={{
                overflow: "auto",
                height: "calc(100vh - 112px)",
                position: "sticky",
                color: "#B98C48"
              }}
            />
          </Sider>
        </Drawer>

        <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center"}}>
        <Title level={5} style={{ margin: "auto 8px", color: "white" }} >
          Asif
        </Title>
        <Dropdown menu={{ items }} placement="bottomRight" arrow>
          <Space wrap size={16}>
            <Avatar size="large" icon={<UserOutlined />} />
          </Space>
        </Dropdown>
        </div>
      </Row>
    </AntDHeader>
  );
};

export default Header;
