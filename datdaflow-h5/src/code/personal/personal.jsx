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
 * @class Personal
 * @author seven
 * @version 1.0
 */
@connect( x =>{ return { user :x.User }})
export default class Personal extends Component {

    // #region Default Events
    /**
    * 构造函数
    * @constructor
    */
    constructor(props)
    {
        super(props);

        this.logout = this.logout.bind(this);

        this.api_user = new UserService();
    }

    logout()
    {
        this.api_user.logout().then((r)=>{
            browserHistory.push(`/${this.props.params.app}`);
        });
    }

    /**
     * 渲染组件
     * @method
     * @return {Element} html元素
     */
    render() {
        return (
            <div className="Personal">
                <h1>我</h1>
                 <a className="button button-positive" onClick={this.logout}>退出系统</a>
            </div>
            );
    }
    // #endregion
}

/**
* 属性集
* @property
*/
Personal.propTypes = {
    TopMenu: PropTypes.object,
    Menu: PropTypes.object
};
Personal.defaultProps = {
    TopMenu:{
        show:true,
        title: <FormattedMessage id="topmenu_personal" />,
    left:[{to:'^'}],
        right:[]
    },
    Menu:
        {
            show:true
        }
};