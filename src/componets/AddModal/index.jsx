import { Wrapper } from './style';
import { Button, Form, Segmented, Input } from 'antd';
import { ReactComponent as EyeOff } from '../../icons/Eye_Off.svg';
import { ReactComponent as Eye } from '../../icons/Eye.svg';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addUser } from '../../redux/slice';
const AddModal = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState('User');
  const [form] = Form.useForm();
  const onFinish = (values) => {
    dispatch(
      addUser({
        ...values,
        status: state,
        key: `${Date.now()}`,
      })
    );
    form.resetFields();
  };
  return (
    <Wrapper>
      <Wrapper.Title>Add Customer</Wrapper.Title>
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 32 }}
        style={{ maxWidth: 600, marginTop: '40px' }}
        onFinish={onFinish}
        layout='vertical'
        requiredMark={false}
        form={form}
      >
        <Form.Item
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
        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            iconRender={(visible) => (visible ? <Eye /> : <EyeOff />)}
          />
        </Form.Item>

        <Wrapper.ButtonWrapper>
          <Button
            block
            htmlType='submit'
            type='primary'
          >
            Save
          </Button>
        </Wrapper.ButtonWrapper>
      </Form>
    </Wrapper>
  );
};

export default AddModal;
