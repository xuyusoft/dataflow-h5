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
 * @class Game
 * @author seven
 * @version 1.0
 */

export default class Query extends Component {

    // #region Default Events
    /**
    * 构造函数
    * @constructor
    */
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
             <div className="list">
                    <label className="item item-input item-stacked-label">
                        <span className="input-label">流量卡号</span>
                        <input type="text" ref="Entity.FlowCardNo" placeholder="请输入流量卡号/手机号" />
                    </label>

                    <br />
                    <button className="button button-block button-assertive">
                        确认查询
                    </button>

                    <div><p style={{padding: "10px 20px",border: "solid 1px #e0e0e0"}}>剩余流量：MB</p></div>
                    <br />
                    <button className="button button-block button-light">
                        已停机卡自助激活
                    </button>
             </div>
            </div>
        );
    }
}

/**
* 属性集
* @property
*/
Query.propTypes = {
    TopMenu: PropTypes.object,
    Menu: PropTypes.object

};
Query.defaultProps = {
    TopMenu:{
        show:true,
        title: <FormattedMessage id="topmenu_query" />,
    left:[{to:'^'}],
        right:[]
    },
    Menu:{show:true}
};