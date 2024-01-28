"use client";

import {
  DeleteOutlined,
  IssuesCloseOutlined,
  ProfileOutlined,
  StopOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Grid, Space, Tag } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import EmployeesTable from "../../../components/table/employeesTable";
import MyModal from "../../../components/ui/MyModal";
import axiosApi from "../../../helpers/axois";

const { useBreakpoint } = Grid;

const EmployeesPage = () => {
  const [data, setData] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isBlockModalOpen, setIsBlockModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const screens = useBreakpoint();

  const showDeleteModal = (data) => {
    setSelectedEmployee(data);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteOk = () => {
    axiosApi.delete(`/employees/employee/${selectedEmployee._id}`)
    .then((res) => {
      if (res?.data?.statusCode === 200) {
        setData((prev) => prev.filter((item) => item._id !== selectedEmployee._id));
      }
    });

    setIsDeleteModalOpen(false);
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
  };
  const showBlockModal = (data) => {
    setSelectedEmployee(data);
    setIsBlockModalOpen(true);
  };

  const handleBlockOk = () => {
    setIsBlockModalOpen(false);
  };

  const handleBlockCancel = () => {
    setIsBlockModalOpen(false);
  };

  const columns = [
    {
      title: "#",
      dataIndex: "",
      key: "sl",
      width: "5%",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Full Name",
      key: "name",
      width: "40%",
      render: (data) => data.firstName + " " + data.lastName,
    },
    {
      title: "Status",
      key: "isBlocked",
      dataIndex: "isBlocked",
      width: "30%",
      responsive: ["sm"],
      render: (data) => (
        <Tag color={data ? "red" : "green"} key={data}>
          {data ? "Blocked" : "Unblock"}
        </Tag>
      ),
    },
    {
      title: "Action",
      width: "max-content",
      key: "action",
      render: (data) => {
        const content = data.isBlocked ? (
          screens.xs ? (
            <IssuesCloseOutlined />
          ) : (
            "Unblock"
          )
        ) : screens.xs ? (
          <StopOutlined />
        ) : (
          "Block"
        );
        return (
          <Space size="small">
            <Link href={`/employees/${data._id}`}>
              <Button
                type="text"
                style={{ padding: screens.xs ? "0 5px" : "0 10px" }}
              >
                {screens.xs ? <ProfileOutlined /> : "Details"}
              </Button>
            </Link>
            <Button
              type="text"
              style={{ padding: screens.xs ? "0 5px" : "0 10px" }}
              onClick={() => showBlockModal(data)}
            >
              {content}
            </Button>
            <Button
              type="text"
              style={{ padding: screens.xs ? "0 5px" : "0 10px" }}
              danger
              onClick={() => showDeleteModal(data)}
            >
              {screens.xs ? <DeleteOutlined /> : "Delete"}
            </Button>
          </Space>
        );
      },
    },
  ];

  useEffect(() => {
    axiosApi.get("/employees").then((res) => {
      setData(res?.data?.data);
    });
  }, []);

  return (
    <>
      <div style={{ maxWidth: "100%" }}>
        <Breadcrumb
          items={[
            {
              title: "Home",
            },
            {
              title: "Employees List",
            },
          ]}
          style={{ marginBottom: "2rem" }}
        />

        <EmployeesTable
          columns={columns}
          data={data}
          loading={!data || false}
        />
      </div>
      <MyModal
        title={"Confirm Delete"}
        handleOk={handleDeleteOk}
        handleCancel={handleDeleteCancel}
        isModalOpen={isDeleteModalOpen}
      >
        Confirm to Delete this Employee
      </MyModal>
      
      <MyModal
        title={"Confirm Block"}
        handleOk={handleBlockOk}
        handleCancel={handleBlockCancel}
        isModalOpen={isBlockModalOpen}
      >
        Confirm to Block this Employee
      </MyModal>
    </>
  );
};

export default EmployeesPage;
