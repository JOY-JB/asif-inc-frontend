"use client"

import { Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/employees');
  }, []);

  return (
    <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spin size="large">
          <div className="content" />
        </Spin>
      </div>
  );
};

export default HomePage;