import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { auth, createUserWithEmailAndPassword, onAuthStateChanged, db, doc, setDoc, } from '../config/firebase';
import "./Signup.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

function SignUp() {
    const navigate = useNavigate();
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
                    uid: user.uid
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
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              console.log(`${uid}has Logged in`)
              navigate('/Home')
            } else {
                navigate('/')
                console.log("No user has logged in")
            }
          });
    },[])
    return (
        <>
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
