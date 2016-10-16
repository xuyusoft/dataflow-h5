/*!
 * jixiu-h5 Javascript Library
 * weiyining - v1.0.0 (2016)
 * https://www.jixiuapp.com/ | Released under MIT license
 */

'use strict'
import React from 'react';
import { Route } from 'react-router';
import Auth from '../service/auth';

// 我
import Personal from '../personal/personal';
// 登陆
import Login from '../authencation/login';
// 注册
import Register from '../authencation/register';
// 完成注册
import ReigsterEnd from '../authencation/register-end';
// 忘记密码
import ForgetPassword from '../authencation/forget-password';
// 重置密码
import ResetPassword from '../authencation/reset-password';

const PersonalRouter = (
    <Route>
        <Route path="personal" component={Personal} onEnter={Auth} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register}  />
        <Route path="register-end" component={ReigsterEnd} />
        <Route path="forget-password" component={ForgetPassword} />
        <Route path="reset-password" component={ResetPassword} />
    </Route>
);

export default PersonalRouter;