import { Modal } from 'antd';


const MyModal = ({children, title, isModalOpen, handleOk, handleCancel}) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
  
//   const showModal = () => {
//     setIsModalOpen(true);
//   };
  
//   const submitOk = () => {
//     setIsModalOpen(false);
//   };
  
//   const submitCancel = () => {
//     setIsModalOpen(false);
//   };

//   <Button type="primary" onClick={showModal}>
//   Open Modal
// </Button>

  return (
      <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {children}
      </Modal>
    
  );
};
export default MyModal;