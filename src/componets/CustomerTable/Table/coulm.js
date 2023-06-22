import { Wrapper } from './style';
import { ReactComponent as Avatar } from '../../../icons/Avatar.svg';
import { ReactComponent as Edit } from '../../../icons/Edit.svg';
import { ReactComponent as Trash } from '../../../icons/Trash.svg';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../../redux/slice';
import { switchModalName } from '../../../redux/slice';
import { switchSelectedUser } from '../../../redux/slice';

const HandleActions = (opt) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Edit
        onClick={() => {
          dispatch(switchModalName('edit'));
          dispatch(switchSelectedUser(opt));
        }}
      />
      <Trash onClick={() => dispatch(deleteUser(opt?.key))} />
    </Wrapper>
  );
};

export const columns = [
  {
    title: 'Name',
    dataIndex: 'firstName',
    key: 'firstName',
    render: (text, opt) => {
      return (
        <Wrapper>
          <Avatar />
          <Wrapper.Title>{`${text} ${opt.lastName}`}</Wrapper.Title>
        </Wrapper>
      );
    },
  },
  {
    title: 'Company',
    dataIndex: 'company',
    key: 'company',
    render: (text) => {
      return <Wrapper.Title>{text}</Wrapper.Title>;
    },
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (text) => {
      return <Wrapper.Title>{text}</Wrapper.Title>;
    },
  },
  {
    title: 'Admin',
    key: 'status',
    dataIndex: 'status',
    render: (text) => <Wrapper.Status admin={text} />,
  },
  {
    title: 'Actions',
    key: '',
    dataIndex: '',
    render: (_, opt) => HandleActions(opt),
  },
];
