import React from 'react';
import CustomerTable from '../CustomerTable';
import AddModal from '../AddModal';
import EditModal from '../EditModal';
import { Container } from './style';
import { useSelector } from 'react-redux';

const Main = () => {
  const { modalName } = useSelector((state) => state.customer);

  return (
    <Container>
      {modalName == 'add' ? <AddModal /> : <EditModal />}

      <CustomerTable />
    </Container>
  );
};

export default Main;
