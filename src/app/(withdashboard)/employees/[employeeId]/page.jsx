import EmployeeDetails from '../../../../components/ui/EmployeeDetails';
const EmployeeDetailsPage = ({params}) => {
    const {employeeId} = params


    return (
        <div>
            <EmployeeDetails employeeId={employeeId} />        
        </div>
    );
};

export default EmployeeDetailsPage;