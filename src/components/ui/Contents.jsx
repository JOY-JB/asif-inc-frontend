import { Layout } from "antd";
import Header from "./Header";
const { Content } = Layout;

const Contents = ({ children }) => {
  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      <Header />
      <div
        style={{
          padding: "2rem",
        }}
      >
        {children}
      </div>
    </Content>
  );
};

export default Contents;


