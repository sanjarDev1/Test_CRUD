import { Wrapper } from './style';
import { Button, Form, Segmented, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { switchUserUpdate } from '../../redux/slice';
import { useEffect } from 'react';
const EditModal = () => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.customer);
  const [state, setState] = useState('User');
  const [form] = Form.useForm();
  const onFinish = (values) => {
    form.resetFields();
    dispatch(
      switchUserUpdate({
        ...selectedUser,
        ...values,
        status: state,
      })
    );
  };
  return (
    <Wrapper>
      <Wrapper.Title>Edit Customer</Wrapper.Title>
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 32 }}
        style={{ maxWidth: 600, marginTop: '40px' }}
        onFinish={onFinish}
        initialValues={{
          firstName: selectedUser.firstName,
          company: selectedUser.company,
          email: selectedUser.email,
          lastName: selectedUser.lastName,
        }}
        layout='vertical'
        requiredMark={false}
      >
        <Form.Item
          // label='BirthDate'
          style={{
            marginBottom: 0,
            display: 'flex',
          }}
        >
          <Form.Item
            label='First Name'
            name='firstName'
            rules={[
              { required: true, message: 'Please input your first name!' },
            ]}
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              margin: 0,
            }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Last Name'
            name='lastName'
            rules={[
              {
                required: true,
                message: 'Please input your last name!',
              },
            ]}
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              margin: '0 8px',
            }}
          >
            <Input />
          </Form.Item>
        </Form.Item>
        <Form.Item
          label='Company'
          name='company'
          rules={[{ required: true, message: 'Please input your company!' }]}
          style={{ marginTop: '10px' }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Status'
          name='status'
          style={{
            marginBottom: 10,
          }}
        >
          <Segmented
            block
            onChange={(state) => setState(state)}
            options={['User', 'Administrator']}
            value={state}
          />
        </Form.Item>
        <Form.Item
          label='Email'
          name='email'
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            { required: true, message: 'Please input your email!' },
          ]}
        >
          <Input />
        </Form.Item>
        <Wrapper.ButtonWrapper>
          <Button block htmlType='submit' type='primary'>
            Save
          </Button>
        </Wrapper.ButtonWrapper>
      </Form>
    </Wrapper>
  );
};

export default EditModal;
