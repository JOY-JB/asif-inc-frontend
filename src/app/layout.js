

import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from "antd";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Asif Inc || HRM",
  description: "Created by Joy Barua",
};

export default function RootLayout({ children }) {

  const customTheme = {
    token: {
      colorPrimary: "#17494E",
      colorInfo: "#B98C48",
    },
    components: {
      Layout: {
        triggerBg: "#B98C48",
      },
      Menu: {
        darkItemBg: "#17494E",
        darkSubMenuItemBg: "#B98C48",
      },
    },
  };


  return (
    <html lang="en">
      <ConfigProvider theme={customTheme}>
      <body className={inter.className}>
      <AntdRegistry>
        {children}
      </AntdRegistry>
        </body>
        </ConfigProvider>
    </html>
  );
}
