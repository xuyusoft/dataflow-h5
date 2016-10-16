/*!
 * jixiu-h5 Javascript Library
 * weiyining - v1.0.0 (2016)
 * https://www.jixiuapp.com/ | Released under MIT license
 */
'use strict'
import React,{Component,PropTypes } from 'react';
import {Link, browserHistory } from 'react-router';

/**
 * 组件说明
 * @class Register
 * @author Seven
 * @version 1.0
 */
export default class Register extends Component {

    // #region Default Events
    /**
    * 构造函数
    * @constructor
    */
    constructor() {
        super();

        // 组件状态集合
        this.state={};

        // 绑定方法
        this.ToDoSomething = this.ToDoSomething.bind(this);

        // TODO 初始化的一些操作
    }

    /**
    * 插入DOM之前
    * @event 
    */
    componentWillMount(){

    }

    /**
    * 插入DOM之后
    * @event 
    */
    componentDidMount(){

    }

    /**
    * 重新渲染之前
    * @event 
    */
    componentWillUpdate(nextProps, nextState){

    }
    
    /**
    * 重新渲染之后
    * @event 
    */
    componentDidUpdate(prevProps, prevState){

    }
    
    /**
    * 移出DOM之前
    * @event 
    */
    componentWillUnmount(){

    }

    /**
     * 渲染组件
     * @method
     * @return {Element} html元素
     */
    render() {
        return (
            <div className="Register">
            <h1>Register</h1>
            <Link to={{pathname:`/${this.props.params.app}/register-end`}}>下一步</Link>
            </div>
            );
    }
    // #endregion

    /**
    * 方法 Demo
    * 需要同时在constructor事件中做绑定
    * @function
    */
    ToDoSomething(){
        // TO DO Something here
    }

}

/**
* 属性集
* @property OnLoad
*/
Register.propTypes = { 
    OnLoad: PropTypes.bool.isRequired
};
Register.defaultProps = {  
    OnLoad: true
};