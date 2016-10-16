/*!
 * jixiu-h5 Javascript Library
 * weiyining - v1.0.0 (2016)
 * https://www.jixiuapp.com/ | Released under MIT license
 */
'use strict'
import React,{Component,PropTypes } from 'react';
import {Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import UserService from '../service/user';

/**
 * 组件说明
 * @author Seven
 * @version 1.0
 */
@connect( x =>{ return { user :x.User }})
export default class Login extends Component {

    // #region Default Events
    /**
    * 构造函数
    * @constructor
    */
    constructor(props) {
        
        // 如果登陆过了就跳转到目标页或首页
        if(UserService.IsAuthenticated())
        {
            try
            {
                browserHistory.push(props.location.state.nextPathname);
            }
            catch(e){
                browserHistory.push(`/${props.params.app}`);
            }
        }

        super(props);

        // 登陆
        this.login=this.login.bind(this);
    }

    login(event)
    {
        event.preventDefault();
        
        let [api,mobile,pass] = [new UserService(),this.refs.mobile.value,this.refs.password.value];

        api.login(mobile, pass).then((r) => 
        {
            if (r.ErrorCode) 
            {
                swal("提示", r.ErrorMessage, "error");
            }
            
            else
            {               
                try
                {
                    browserHistory.push(this.props.location.state.nextPathname);
                }
                catch(e) { browserHistory.push(`/${this.props.params.app}`);}
            }
        })
    }

    /**
     * 渲染组件
     * @method
     */
    render() {
        return (
            <form className="Login" style={{backgroundColor:'#f5f5f5'}} onSubmit={this.login}>
                <div className="userpic" style={{backgroundImage:'url("../images/authencation/userimage.png")'}}></div>
                <div className="list">
                  <label className="item item-input">
                    <span className="input-label"><FormattedMessage id="login_mobile" /></span>
                    <input type="text" ref="mobile" />
                  </label>
                  <label className="item item-input">
                    <span className="input-label"><FormattedMessage id="login_pass" /></span>
                    <input type="password" ref="password" />
                    <Link to={{pathname:`/${this.props.params.app}/forget-password`}} className="forget">忘记密码？</Link>
                  </label>              
                </div>
                <div className="padding">
                <button type="submit" className="button button-block button-assertive" style={{backgroundColor:'#ff5790'}}>登录</button>
                </div>              
                <fieldset> 
                  <legend>
                      <p>
                        不用注册，直接登录
                      </p>
                    </legend> 
                </fieldset>
                <div className="login-bot">
                    <Link to={{pathname:`/${this.props.params.app}/register`}}>
                    立即注册
                    <i className="icon ion-ios-arrow-thin-right"></i>
                    </Link>
                </div>
            </form>
            );
    }
    // #endregion
}