"use client";

import { Button, Card, Col, Row, message } from "antd";

import axiosApi from "../../helpers/axois";
import Form from "../forms/Form";
import FormInput from "../forms/FormInput";

const EmployeeCard = () => {

  const onSubmit = (data) => {
    try{
      axiosApi.post("/employees/create-employee", data)
      .then(({data}) => {
        if(data?.statusCode === 200){
          message.success(data?.message)
        }
      }).catch((error) => {
        message.error("Provide a unique email address")
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Row
      align={"middle"}
      justify={"center"}
      
    >
      <Col xs={24} md={12} lg={10}>
        <Card
          title={`Create Employee`}
          style={{
            padding: "20px",
            border: "1.5px solid #17494E",
          }}
        >
          <Form submitHandler={onSubmit}>
            <FormInput name={"firstName"} label={"First Name"} placeholder={"Enter Employee First Name"} required />

            <FormInput name={"lastName"} label={"Last Name"} placeholder={"Enter Employee Last Name"} required />

            <FormInput name={"email"} label={"Email"} placeholder={"Enter Employee email address"} required />
            
            <FormInput name={"phoneNo"} label={"Phone No."} placeholder={"Enter Employee Phone no."} required />

            <Button type="primary" htmlType="submit" style={{width: "100%"}}>Create</Button>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default EmployeeCard;
