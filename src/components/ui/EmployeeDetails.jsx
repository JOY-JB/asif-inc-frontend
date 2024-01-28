// components/EmployeeDetails.js
import { Col, Row } from 'antd';
import Image from 'next/image';

const EmployeeDetails = ({ employeeId }) => {
  // Mock data for demonstration purposes
  const employeeDetails = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    // Add other details as needed
  };

  return (
//     <Row
//       align="middle"
//       justify="center"
//       style={{
//         minHeight: '85vh',
//         // backgroundColor: '#f0f2f5',
//       }}
//     >
//       {/* <Col xs={24} md={16} lg={12}>
//         <Card
//           title="Employee Details"
//           style={{
//             width: '100%',
//             borderRadius: '8px',
//             boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
//             marginBottom: '20px',
//           }}
//         >
//           <p style={{ fontSize: '18px', marginBottom: '10px' }}>
//             <strong>First Name:</strong> {employeeDetails.firstName}
//           </p>
//           <p style={{ fontSize: '18px', marginBottom: '10px' }}>
//             <strong>Last Name:</strong> {employeeDetails.lastName}
//           </p>
//           <p style={{ fontSize: '18px', marginBottom: '10px' }}>
//             <strong>Email:</strong> {employeeDetails.email}
//           </p>
//           <p style={{ fontSize: '18px', marginBottom: '10px' }}>
//             <strong>Phone:</strong> {employeeDetails.phone}
//           </p>
//           <Link href="/employees">
//             <Button type="primary" style={{ marginTop: '20px' }}>
//               Back to List
//             </Button>
//           </Link>
//         </Card>
//       </Col> */}

// {/* <Col md={10} className="w-full">
//   <div className="w-full rounded-3xl bg-white shadow-xl p-4 mx-auto">
//     <div className="object-cover object-center w-[250px] h-[250px] mx-auto">
//       <Image
//         src={"https://joesch.moe/api/v1/random"}
//         unoptimized
//         alt=""
//         height={500}
//         width={500}
//         className="mb-2"
//       />
//     </div>
//     <div className="text-center mt-2">
//       <h2 className="font-semibold text-4xl">
//         Joy Barua
//       </h2>

//       <p className="font-medium text-base my-1">
//         Employee
//       </p>
//     </div>

//     <div className="p-6 border-2 py-8 rounded-3xl border-[#a18dff] m-3 md:m-6 space-y-4">
//       <div className="text-lg font-normal mx-2 flex items-center justify-between">
//         <span>Phone :</span>
//         <span className="">
//           01580823080
//         </span>
//       </div>

//       <Divider className="bg-[#1890ff]" />

//       <div className="text-lg font-normal mx-2 flex items-center justify-between">
//         <span>UserId :</span>
//         <span className="">joybarua@gmail.com</span>
//       </div>

//       <Divider className="bg-[#1890ff]" />

//       <div className="text-lg font-normal mx-2 flex items-center justify-between">
//         <span>Address :</span>
//         <span className="">
//           oasg
//         </span>
//       </div>
//     </div>
//   </div>
// </Col> */}

//     </Row>

<section
  className=""
  style={{ minHeight: '80vh',}}
>
    <Row style={{ display: 'flex', justifyContent: 'center'  }}>
      <Col md={10} style={{ width: '100%' }}>
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
              Joy Barua
            </h1>
            <p style={{ fontWeight: '500', fontSize: '1rem', margin: '0.5rem 0' }}>
              employee
            </p>
          </div>
          <div style={{ padding: '1.5rem', border: '0.2rem solid #17494E', margin: '0.5rem', borderRadius: '1.5rem' }}>
            <div style={{ fontSize: '1.15rem', fontWeight: '400', display: 'flex', justifyContent: 'space-between', margin: '0.5rem 0' }}>
              <span>Phone :</span>
              <span>
                0158456123
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
