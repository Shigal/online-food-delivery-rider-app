
import React, {useState} from "react"
import {connect} from 'react-redux'
import { authenticate, authSuccess, authFailure } from "../redux/authActions";
import { userLogin } from "../services/authService"
import { Form, Input, Button, Checkbox, Alert, Spin } from 'antd';
import { useNavigate } from "react-router-dom";



const LoginPage = ({loading, error, ...props}) => {

    const navigate = useNavigate();

    const [values, setValues] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = (e) => {
        
        console.log("onFinish", e);
        values.username = e.username;
        values.password = e.password;
        props.authenticate();
        // e.preventDefault();
        // props.authenticate();

        userLogin(values).then((response) => {
            console.log("response:", response.data);
            
            if(response.status === 200) {
                console.log("response:data--", response.data);
                props.setUser(response.data);
                // props.setUser(values);
                navigate("/dashboard");

            }
            else {
                props.loginFailure("Something went wrong, Try again!")
            }
        }).catch((error) => {
            if(error && error.response) {
                if(error.response.status === 401) {
                    console.log("Status: 401");
                    props.loginFailure("Bad credentials, authentication failed !");
                }
                else {
                    props.loginFailure("Something went wrong, Try again!");
                }
            }
            else {
                props.loginFailure("Something went wrong, Try again!");
            }

        });
    }

    console.log("errorrrrrrrrr", error);


    const handleRegister = () => {
        navigate("/register")
    }

    // const handleChange = (e) => {
    //     e.persist();
    //     setValues(values => ({
    //     ...values,
    //     [e.target.name]: e.target.value
    //     }));
    // };

    // const handleChange = (e) => {
    //     setValues(values => {
    //         return {...values, [e.target.name]: e.target.value}
    //     });
    // }

    console.log("Loading ",loading);

//     const error = error ? <Row>
//     <Col span="8"></Col>
//     <Col span="8">
//       <Alert message="Authentication Failed" type="warning"></Alert>
//     </Col>
//   </Row> : ''

    return(
        <div className="form">
            <Form
        name="basic"
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
          autoComplete="off"
        >
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
            name="remember"
            valuePropName="checked"
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
        >
            <Checkbox>Remember me</Checkbox>    
        </Form.Item>

        <Form.Item
            wrapperCol={{
            offset: 8,
            span: 16,
            }}
        >
            <Button type="primary" htmlType="submit">
            Login
            {loading && (<Spin animation="border" aria-hidden="true"/>)}
            </Button>
            <Button id="signup" type="primary" htmlType="submit" onClick={handleRegister}>
            sign up
            {loading && (<Spin animation="border" aria-hidden="true"/>)}
            </Button>
        </Form.Item>
        </Form>
        {/* <p>error-----{error}</p> */}
        { error && <Alert message="Error" type="error" description={error} showIcon closable/>}
    </div>
    )
    
}

const mapStateToProps=({auth})=>{
    console.log("state ",auth)
    return {
        loading:auth.loading,
        error:auth.error
}}

const mapDispatchToProps=(dispatch)=>{

    return {
        authenticate :()=> dispatch(authenticate()),
        setUser:(data)=> dispatch(authSuccess(data)),
        loginFailure:(message)=>dispatch(authFailure(message))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);

// export default LoginPage;