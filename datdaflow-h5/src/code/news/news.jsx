/*!
 * jixiu-h5 Javascript Library
 * weiyining - v1.0.0 (2016)
 * https://www.jixiuapp.com/ | Released under MIT license
 */
'use strict'
import React,{Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import {Link, browserHistory } from 'react-router';
import { FormattedMessage } from 'react-intl';

/**
 * 组件说明
 * @class News
 * @author seven
 * @version 1.0
 */
@connect(x =>{ return { News: x.News } })
export default class News extends Component {

    // #region Default Events
    /**
    * 构造函数
    * @constructor
    */
    constructor(props) {
        super(props);
    }

    /**
    * 插入DOM之前
    * @event
    */
    componentWillMount(){
    }

    /**
     * 渲染组件
     * @method
     * @return {Element} html元素
     */
    render() {
        return (
            <div className="list list-news">
                <div className="card" style={{marginTop:"5px"}}>
                    <div className="item item-divider">
                        充值须知
                    </div>
                    <div className="item item-text-wrap">
                        <p style={{color:"#ff0000"}}>
                            请实名激活、绑定个人信息，以便日后办理其他业务，未实名绑定的将停止使用。
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="item item-divider">
                        温馨提示
                    </div>
                    <div className="item item-text-wrap">
                        <p>1、带1GB卡----基础套餐为1GB（25-30号充值且次月1号到账），当月可叠加充值各种套餐，不限量且所有叠加套餐当月清零；</p>
                        <p>2、已欠费停机用户，可在充值后，在流量查询页面进行自助激活；</p>
                        <p>3、切记流量不要用超，用超后开通需要5个工作日或按0.15/1M，产生欠费自己承担；</p>
                        <p>4、一个实名手机号只能绑定一张物联卡，非实名制号码绑定的将作废处理；</p>
                        <p>5、严禁新疆、西藏销售使用，后果自负；</p>
                    </div>
                </div>
            </div>);
        }
    // #endregion
}

    /**
    * 属性集
    * @property
    */
News.propTypes = {
    TopMenu: PropTypes.object,
    Menu: PropTypes.object
};
News.defaultProps = {
    TopMenu:{
    show:true,
    title: <FormattedMessage id="topmenu_news" />,
    left:[{to:'^'}],
    right:[]
},
    Menu:
{
    show:true
}
};