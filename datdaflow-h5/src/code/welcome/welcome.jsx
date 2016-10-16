/*!
 * jixiu-h5 Javascript Library
 * weiyining - v1.0.0 (2016)
 * https://www.jixiuapp.com/ | Released under MIT license
 */
'use strict'
import React,{Component,PropTypes } from 'react';
import {Link,browserHistory} from 'react-router';

/**
 * 组件说明
 * @class Welcome
 * @author 作者
 * @version 1.0
 */
export default class Welcome extends Component {

    // #region Default Events
    /**
    * 构造函数
    * @constructor
    */
    constructor() {
        super();
        // 绑定方法
        this.onChange = this.onChange.bind(this);
    }

    /**
    * 插入DOM之前
    * @event
    */
    componentWillMount(){
    }

    onChange(lan)
    {
        window.store.dispatch({type:'CHANGE_LANGUAGE',language:lan});

        browserHistory.push(`/${this.props.params.app}/news`);
    }


    /**
     * 渲染组件
     * @method
     * @return {Element} html元素
     */
    render() {
        return (
            <div className="Welcome">
                welcome
            <br /><br /><br /><br /><br /><br /><br /><br />

            <ul className='list'>
                <li><a className="button button-full  button-positive" onClick={this.onChange.bind(this, 'zh_cn')}>简体中文</a></li>
                <li><a className="button button-full  button-positive" onClick={this.onChange.bind(this, 'en_us')}>English</a></li>
             </ul>
            </div>
            );
    }
    // #endregion
}