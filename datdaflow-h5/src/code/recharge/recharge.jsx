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
 * @class Video
 * @author seven
 * @version 1.0
 */
export default class Recharge extends Component {

    // #region Default Events
    /**
    * 构造函数
    * @constructor
    */
    constructor() {
        super();
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

        let packages =  null;

        //<ion-radio ng-repeat="x in Packages" ref="Entity.data">
        //                    <font className="assertive">￥{{x.Amount}}</font> = {{x.Description}}
        //                </ion-radio>

        return (
            <div className="Recharge">
                <div className="list">
                    <label className="item item-input item-stacked-label">
                        <span className="input-label">流量卡号</span>
                        <input type="text" ref="Entity.FlowCardNo" placeholder="请输入流量卡号/手机号" />
                    </label>
                    <ion-list>
                    {packages}
                    </ion-list>
                    <br />
                    <button className="button button-block button-assertive">
                        确认充值
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
Recharge.propTypes = {
    TopMenu: PropTypes.object,
    Menu: PropTypes.object
};
Recharge.defaultProps = {
    TopMenu:{
        show:true,
        title: <FormattedMessage id="topmenu_recharge" />,
    left:[{to:'^'}],
        right:[]
    },
    Menu:
        {
            show:true
        }
};