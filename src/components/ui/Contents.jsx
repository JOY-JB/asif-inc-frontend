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
          padding: "1rem",
        }}
      >
        {children}
      </div>
    </Content>
  );
};

export default Contents;


