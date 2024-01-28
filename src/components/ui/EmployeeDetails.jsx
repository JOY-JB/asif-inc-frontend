"use client";

import { Button, Col, Row } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
import axiosApi from "../../helpers/axois";
import Form from "../forms/Form";
import FormInput from "../forms/FormInput";

const EmployeeDetails = ({ employeeId }) => {
const [EmployeeDetails, setEmployeeDetails] = useState(null);

  const onSubmit = (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (employeeId) {
      axiosApi.get(`/employees/employee/${employeeId}`).then((res) => {
        setEmployeeDetails(res?.data?.data);
      });
    }
  }, [employeeId]);


  return (
    <section className="" style={{ minHeight: "80vh" }}>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Col sm={24} md={16} lg={8} style={{ width: "100%" }}>
          <div
            style={{
              width: "100%",
              borderRadius: "1.5rem",
              backgroundColor: "#ffffff",
              boxShadow: "0 0.25rem 1rem rgba(23, 73, 78, 0.4)",
              padding: "1rem",
              margin: "0 auto",
              boxSizing: "border-box",
            }}
          >
            <div style={{ width: "220px", height: "220px", margin: "0 auto" }}>
              <Image
                src={"https://joesch.moe/api/v1/random"}
                unoptimized
                alt=""
                height={500}
                width={500}
                style={{
                  marginBottom: "0.5rem",
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "1rem",
                  margin: "0.5rem 0",
                }}
              >
                Employee Details
              </p>
            </div>
            <div
              style={{
                padding: "1.5rem",
                border: "0.2rem solid #17494E",
                margin: "0.5rem",
                borderRadius: "1.5rem",
              }}
            >

              <Form submitHandler={onSubmit} defaultValues={EmployeeDetails} >
                <FormInput
                  name={"firstName"}
                  label={"First Name"}
                  placeholder={"Enter Employee First Name"}
                />

                <FormInput
                  name={"lastName"}
                  label={"Last Name"}
                  placeholder={"Enter Employee Last Name"}
                />

                <FormInput
                  name={"email"}
                  label={"Email"}
                  disabled={true}
                  placeholder={"Enter Employee email address"}
                />

                <FormInput
                  name={"phone"}
                  label={"Phone No."}
                  placeholder={"Enter Employee Phone no."}
                />

                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  Update
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default EmployeeDetails;
