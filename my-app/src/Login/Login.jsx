import React,{Component} from 'react'
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.css'
import Logo from './images/logo.png'

const FormItem = Form.Item;

class Login extends Component{
        
    render(){
        return(
            <div className="login">
                <div className="login-header">
                    <img src={Logo} alt="logo"></img>
                    <h1>登陆系统</h1>
                </div>
                <div className="login-content">
                    <h1>用户登录</h1>


                    <Form className="login-form">
                        <FormItem className="username"
                         rules={[
                            {required:true,whitespace:true,message:'请输入用户名'},
                            {min:4,message:'用户不能小于4'},
                            {max:12,message:'用户名不能大于12'},
                            {pattern:/^{a-zA-Z0-9_}+$/,message:'必须是英文、数字或下划线组成'}
                             ]}>
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username"></Input>
                        </FormItem>
                        <FormItem className="password" rules={[{required:true,message:'请输入密码'}]}>
                            <Input type="password" prefix={<LockOutlined className="site-form-item-icon"/>} placeholder="Password"></Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" html-type="submit">登录</Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        )
    }
}


export default Login

























/**
 * Form组件：包含<Form>的组件
 * 利用Form.create()包装Form组件生成一个新的组件
 * 新的组件会向form组件传递一个强大的属性：属性名：form，属性值对象
 * 
 * 高阶函数：
 *      接受的参数是函数，或者返回值是函数
 *      常见的：数组遍历相关的方法 / 定时器 / Promise / 高阶组件
 *      作用：实现一个更加强大，动态的功能
 * 高阶组件：
 *      本质是一个函数
 *      函数接受一个组件，返回一个新的组件
 *      Form.create()返回的就是一个高阶组件
 */

// const WrapperForm = Form.create()(Login)




/*
用户名/密码的合法性要求
1）必须输入
2）必须大于等于四位
3）必须小于等于12位
4）必须是英文、数字或下划线组成
*/

/**
 * 组件：组件类，本质就是一个构造函数
 * 组件对象：组件类的实例，也就是构造函数的实例
 */