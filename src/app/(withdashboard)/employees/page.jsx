"use client";

import {
  DeleteOutlined,
  IssuesCloseOutlined,
  ProfileOutlined,
  StopOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Grid, Space, Tag, message } from "antd";
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
    .then(({data}) => {
      if (data?.statusCode === 200) {
        message.success(data?.message)
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
    axiosApi.patch(`/employees/employee/${selectedEmployee._id}`, {
      isBlocked: !selectedEmployee.isBlocked,
    }).then(({data}) => {

      if (data?.statusCode === 200) {
        message.success(`Employee ${data?.data?.isBlocked ? "Blocked" : "Unblocked"} Successfully`)
        setData((prev) => prev.map((item) => {
          if (item._id === selectedEmployee._id) {
            return {
              ...item,
              isBlocked: !item.isBlocked
            }
          }
          return item;
        }));
      }    
    });
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
      width: "30%",
      responsive: ["sm"],
      render: (itemData) => {
        const newData = data.find((item) => item._id === itemData._id )  


        return <Tag color={newData.isBlocked ? "red" : "green"} key={newData._id}>
          {newData.isBlocked ? "Blocked" : "Unblock"}
        </Tag>
      },
    },
    {
      title: "Action",
      width: "max-content",
      key: "action",
      render: (itemData) => {
        const newData = data.find((item) => item._id === itemData._id )  

        const content =  newData.isBlocked ? (
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
            <Link href={`/employees/${itemData._id}`}>
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
              onClick={() => showBlockModal(itemData)}
            >
              {content}
            </Button>
            <Button
              type="text"
              style={{ padding: screens.xs ? "0 5px" : "0 10px" }}
              danger
              onClick={() => showDeleteModal(itemData)}
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
        title={"Confirm Action"}
        handleOk={handleBlockOk}
        handleCancel={handleBlockCancel}
        isModalOpen={isBlockModalOpen}
      >
        Confirm to Action this Employee
      </MyModal>
    </>
  );
};

export default EmployeesPage;
