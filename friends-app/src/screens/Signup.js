import React from 'react';
import { Form, Input, Button, Menu, Layout } from 'antd';
import { auth, createUserWithEmailAndPassword, db, doc, setDoc, } from '../config/firebase';
import "./Signup.css"
import { Link } from 'react-router-dom';

function SignUp() {
    const { Header } = Layout;
    let username = '';
    let email = '';
    let password = '';
    const onFinish = async (values) => {
        console.log('Success:', values);
        email = values.email;
        password = values.password;
        username = values.username;
     createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                let dataRef = doc(db, 'users', user.uid)
                setDoc(dataRef, {
                    email: email,
                    username: username,
                    uid:user.uid
                });
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error)
                // ..
            });
    
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <div>
                <Header>
                    <div className="logo" />
                    <h1 className="page-logo">Friends</h1>
                    <Menu theme="dark" mode="vertical" defaultSelectedKeys={['0']}>
                        {new Array(0).fill(null).map((_, index) => {
                            const key = index + 1;
                            return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
                        })}
                    </Menu>
                </Header>
            </div>
            <div className="signup-header"><h1>Sign Up</h1></div>
            <div className="sign-up-form">
                <Form
                    name="basic"
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
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
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                        ]}
                    >
                        <Input />
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
                        <Input.Password />
                    </Form.Item>
                    <p style={{ textAlign: 'center' }}>Already have an account?? <Link to="/Login">Login Here</Link></p>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 0,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Sign Up
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
};
export default SignUp;
