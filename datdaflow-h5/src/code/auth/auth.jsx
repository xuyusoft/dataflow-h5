/*!
 * jixiu-h5 Javascript Library
 * weiyining - v1.0.0 (2016)
 * https://www.jixiuapp.com/ | Released under MIT license
 */
'use strict'
import React,{Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

/**
 * 组件说明
 * @class Photo
 * @author seven
 * @version 1.0
 */
export default class Auth extends Component {

    // #region Default Events
    /**
    * 构造函数
    * @constructor
    */
    constructor() {
        super();

        // 组件状态集合
        this.state={};
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
            <div className="Photo">
                <div className="list">
                    <label className="item item-input item-stacked-label">
                        <span className="input-label">流量卡号</span>
                        <input type="text" placeholder="请输入19位流量卡的号码" ref="Entity.CardNo" />
                    </label>
                    <label className="item item-input item-stacked-label">
                        <span className="input-label">姓名</span>
                        <input type="text" placeholder="您的真实姓名" ref="Entity.UserName" />
                    </label>

                    <label className="item item-input item-stacked-label">
                        <span className="input-label">手机号码</span>
                        <input type="text" placeholder="联系手机号码" ref="Entity.Mobile" />
                    </label>

                    <label className="item item-input item-stacked-label">
                        <span className="input-label">身份证号</span>
                        <input type="text" placeholder="您的身份证号" ref="Entity.IDCard" />
                    </label>

                    <br />
                    <button className="button button-block button-assertive">
                        绑定流量卡
                    </button>
                </div>
            </div>
            );
    }
    // #endregion
}

/**
* 属性集
* @property
*/
Auth.propTypes = {
    TopMenu: PropTypes.object,
    Menu: PropTypes.object
};
Auth.defaultProps = {
    TopMenu:{
        show:true,
        title: <FormattedMessage id="topmenu_auth" />,
    left:[{to:'^'}],
        right:[]
    },
    Menu:
        {
            show:true
        }
};