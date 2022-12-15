import {useState} from 'react'
import { userRegister } from '../services/authService';
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button, Alert, Spin } from 'antd';

const RegisterPage = ({loading, error, ...props}) => {

    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        license: '',
        contact: ''
    });

    const handleSubmit = (e) => {
        values.firstName = e.firstName;
        values.lastName = e.lastName;
        values.username = e.username;
        values.email = e.email;
        values.password = e.password;
        values.contact = e.contact;
        values.license = e.license;

        userRegister(values).then((response) => {
            if(response.status === 200) {
                // props.setUser(response.data)
                navigate("/")
            }
            else {
                console.log("response error")
            }
        }).catch((error) => {
            console.log("caught error")
        });
    }

    return(
        <div className="form">
            <Form
        name="userForm"
        onFinish={handleSubmit}
        labelCol={{
            span: 8,
            padding: 20,
        }}
        wrapperCol={{
            span: 16,
        }}
          initialValues={{
            remember: true,
          }}
        //   onFinish={onFinish}
        //   onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
        <Form.Item
            label="First Name"
            name="firstName"
            rules={[
            {
                required: true,
                message: 'Please input your First Name!',
            },
            ]}
        >
            <Input placeholder="firstName" />
        </Form.Item>
        <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
            {
                required: true,
                message: 'Please input your Last Name!',
            },
            ]}
        >
            <Input placeholder="LastName" />
        </Form.Item>
        <Form.Item
            label="Username"
            name="username"
            rules={[
            {
                required: true,
                message: 'Please input your username!',
            },
            ]}
        >
            <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
            label="Email"
            name="email"
            rules={[
            {
                required: true,
                message: 'Please input your email!',
            },
            ]}
        >
            <Input placeholder="Email" />
        </Form.Item>


        <Form.Item
            label="Password"
            name="password"
            rules={[
            {
                required: true,
                message: 'Please input your password!',
            },
            ]}
        >
            <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item
            label="Contact"
            name="contact"
            rules={[
            {
                required: true,
                message: 'Please input your contact number!',
            },
            ]}
        >
            <Input placeholder="Contact Number" />
        </Form.Item>
        <Form.Item
            label="License"
            name="license"
            rules={[
            {
                required: true,
                message: 'Please input your license!',
            },
            ]}
        >
            <Input placeholder="License" />
        </Form.Item>
        <Form.Item
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
        >
            <Button type="primary" htmlType="submit">
            Register
            {loading && (<Spin animation="border" aria-hidden="true"/>)}
            </Button>
        </Form.Item>

        { error && <Alert type="warning">{error}</Alert> }

        </Form>
    </div>
    )
}

export default RegisterPage;