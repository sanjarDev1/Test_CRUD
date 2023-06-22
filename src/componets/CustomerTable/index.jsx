import { Wrapper } from './style';
import { Space, Table, Tag } from 'antd';
import { columns } from './Table/coulm';
import { useSelector } from 'react-redux';
const CustomerTable = () => {
  const { data } = useSelector((state) => state.customer);
  return (
    <Wrapper>
      <Wrapper.Title>Customers</Wrapper.Title>
      <Table
        columns={columns}
        pagination={false}
        dataSource={data}
        style={{ marginTop: '40px' }}
      />
    </Wrapper>
  );
};

export default CustomerTable;
