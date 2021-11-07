import { Form, Input, Button } from 'antd'
import './App.css'
import React, { useState } from 'react'

function Register(){
    const[email, setEmail] = useState()
    const[password, setPassword] = useState()
    const[confirmPassword, setConfirmPassword] = useState()
    const[firstName, setFirstName ] = useState()
    const[lastName, setLastName] = useState()
    const[error, setError] = useState()
    
    async function userRegister(credentials) {
        const response = await fetch("http://localhost:8081/api/auth/signup", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        const data = await response.json()
        return({data})
    }

    const onFinish = async e => {
        if(confirmPassword === password){
            const registered = await userRegister({
                firstName,
                lastName,
                email,
                password
            })
            if(registered.error){
                setError(registered.error)
            }else if(registered.message){
                setError("Registered successfully")
            }else{
                setError(registered.msg['0'].msg)
            }
        } else {
            setError("Passwords must match!")
        }
    }

    return(
        <Form
            labelCol={{span:5}}
            wrapperCol={{span:15}}
            layout="horizontal"
            initialValues={{ remember:true }}
            onFinish={onFinish}
        >
            <div style={{ color: "orange", textAlign: "center" }}>
                {error}
            </div>

            <Form.Item
            label="First Name"
            name="firstName"
            rules={[{message:"First Name required!", required: true}]}
            >
            <Input onChange={e => setFirstName(e.target.value)} />
            </Form.Item>

            <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{message: 'Last Name required!', required: true }]}
            >
            <Input onChange={e => setLastName(e.target.value)} />
            </Form.Item>

            <Form.Item
            label="Email"
            name="email"
            rules={[{ message: 'Email required!', required: true }]}
            >
            <Input onChange={e => setEmail(e.target.value)} type = "email" />
            </Form.Item>

            <Form.Item
            label="Password"
            name="password"
            rules={[{ message: 'Password required!',  required: true }]}
            >
            <Input.Password onChange={e => setPassword(e.target.value)} />
            </Form.Item>

            <Form.Item
            label="Confirm password"
            name="confirmPassword"
            rules={[{ required: true, message: 'Password required!' }]}
          >
            <Input.Password onChange={e => setConfirmPassword(e.target.value)} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 11, span: 1}}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
    )
}

export default Register