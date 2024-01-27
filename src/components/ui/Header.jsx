
import { UserOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Dropdown,
  Layout,
  Row,
  Space,
  Typography
} from "antd";
const { Title } = Typography;

const { Header: AntDHeader } = Layout;

const Header = () => {

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
      }}
    >
      <Row style={{ height: "100%" }} align={"middle"} justify={"end"}>
        <Title level={5} style={{ margin: "auto 8px", color: "white" }} >
          Asif
        </Title>
        <Dropdown menu={{ items }} placement="bottomRight" arrow>
          <Space wrap size={16}>
            <Avatar size="large" icon={<UserOutlined />} />
          </Space>
        </Dropdown>
      </Row>
    </AntDHeader>
  );
};

export default Header;
