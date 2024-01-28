"use client";

import { Button, Card, Col, Row } from "antd";

import Form from "../forms/Form";
import FormInput from "../forms/FormInput";

const EmployeeCard = ({ updateData = null }) => {

  const onSubmit = (data) => {
    try{
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Row
      align={"middle"}
      justify={"center"}
      
    >
      <Col xs={24} md={12} lg={10}>
        <Card
          title={`${updateData ? "Update" : "Create"} Employee`}
          style={{
            padding: "20px",
            border: "1.5px solid #17494E",
          }}
        >
          <Form submitHandler={onSubmit}>
            <FormInput name={"firstName"} label={"First Name"} placeholder={"Enter Employee First Name"}  />

            <FormInput name={"lastName"} label={"Last Name"} placeholder={"Enter Employee Last Name"}  />

            <FormInput name={"email"} label={"Email"} placeholder={"Enter Employee email address"}  />
            
            <FormInput name={"phone"} label={"Phone No."} placeholder={"Enter Employee Phone no."}  />

            <Button type="primary" htmlType="submit" style={{width: "100%"}}>{updateData ? "Update" : "Create"}</Button>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default EmployeeCard;
