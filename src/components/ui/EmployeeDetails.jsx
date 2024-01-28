import { Col, Row } from 'antd';
import Image from 'next/image';

const EmployeeDetails = ({ employeeId }) => {
  const employeeDetails = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
  };

  return (

<section
  className=""
  style={{ minHeight: '80vh',}}
>
    <Row style={{ display: 'flex', justifyContent: 'center'  }}>
      <Col sm={24} md={8} style={{ width: '100%' }}>
        <div
          style={{
            width: '100%',
            borderRadius: '1.5rem',
            backgroundColor: '#ffffff',
            boxShadow: '0 0.25rem 1rem rgba(23, 73, 78, 0.4)',
            padding: '1rem',
            margin: '0 auto',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ width: '250px', height: '250px', margin: '0 auto'}}>
            <Image
              src={"https://joesch.moe/api/v1/random"}
              unoptimized
              alt=""
              height={500}
              width={500}
              style={{ marginBottom: '0.5rem', objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
          <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
            <h1 style={{ fontWeight: '600', fontSize: '2rem' }}>
              {employeeDetails?.firstName} {employeeDetails?.lastName}
            </h1>
            <p style={{ fontWeight: '500', fontSize: '1rem', margin: '0.5rem 0' }}>
              employee
            </p>
          </div>
          <div style={{ padding: '1.5rem', border: '0.2rem solid #17494E', margin: '0.5rem', borderRadius: '1.5rem' }}>
            <div style={{ fontSize: '1.15rem', fontWeight: '400', display: 'flex', justifyContent: 'space-between', margin: '0.5rem 0' }}>
              <span>Email :</span>
              <span>
                {employeeDetails?.email}
              </span>
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: '400', display: 'flex', justifyContent: 'space-between', margin: '0.5rem 0' }}>
              <span>Phone :</span>
              <span>
                {employeeDetails?.phone}
              </span>
            </div>
          </div>
        </div>
      </Col>
    </Row>
 
</section>
  );
};

export default EmployeeDetails;
