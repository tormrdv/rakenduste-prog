import { Form, Input, Button } from 'antd'
import React, { useState } from 'react';
import PropTypes from 'prop-types'

export default function Login ({setuser}){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState("")



    async function loginUser(credentials){
        const response = await fetch("http://localhost:8081/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        const data = await response.json()
        return data
    }

    const onFinish = async e => {
        const token = await loginUser({
            email,
            password
        })
        if(token.token) {
            setError('')
            setuser(token)
        } else if(token.error) {
            setError(token.error)
        } else {
            setError(token.msg['0'].msg)
        }
    }

    return(
        <>
            <Form
            labelCol = {{ span:5 }}
            wrapperCol = {{ span: 15 }}
            initialValues = {{ remember: false }}
            onFinish = { onFinish } 
            autoComplete = "off"
            >
                <div style={{color:"orange", textAlign: "center"}}>{error}</div>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ message: 'Email required!', required: true}]}
                >
                    <Input onChange={e => setEmail(e.target.value)} type="email" />
                </Form.Item>
                <Form.Item 
                    label="Password"
                    name="password"
                    rules={[{ message: 'Password required!', required: true}]}
                >
                    <Input.Password onChange={e => setPassword(e.target.value)}/>
                </Form.Item>
                <Form.Item
                    wrapperCol={{ span:15, offset:10}}
                >
                    <Button type="primary" htmlType="submit">
                        Log in 
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

Login.propTypes = {
    setUser: PropTypes.func.isRequired
}