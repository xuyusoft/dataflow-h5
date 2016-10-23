/*!
 * jixiu-h5 Javascript Library
 * weiyining - v1.0.0 (2016)
 * https://www.jixiuapp.com/ | Released under MIT license
 */
'use strict'
import React,{Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import IdentityService from '../service/identity';

/**
 * 组件说明
 * @class Identity
 * @author seven
 * @version 1.0
 */
@connect(x =>{return { data:  x.Identity } })
export default class Identity extends Component {

    // #region Default Events
    /**
    * 构造函数
    * @constructor
    */
    constructor() {
        super();
        this.api = new IdentityService();
        this.BindCard = ::this.BindCard;
    }


    BindCard()
    {
        let refs = this.refs.IdentifyForm.refs;

        let data = {
            CardNo:refs.CardNo.value,
            UserName:refs.UserName.value,
            Mobile:refs.Mobile.value,
            IDCard:refs.IDCard.value
        };

        this.api.Bind(data);
    }


    /**
     * 渲染组件
     * @method
     * @return {Element} html元素
     */
    render() {

        let [data,errmsg] = [this.props.data,null];
        if(data.code){
            if (data.code == 0) { errmsg = "绑定成功！"; }
            else {
                errmsg = data.msg;
            }
        }

        return (
            <div className="Photo">
                <h2>{errmsg}</h2>
                <div className="list">
                    <IdentifyForm ref='IdentifyForm' />
                    <br />
                    <button className="button button-block button-assertive" onClick={this.BindCard}>
                        <FormattedMessage id="buttons_bindcard" />
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
Identity.propTypes = {
    TopMenu: PropTypes.object,
    Menu: PropTypes.object
};
Identity.defaultProps = {
    TopMenu:{
        show:true,
        title: <FormattedMessage id="topmenu_identity" />,
    left:[{to:'^'}],
        right:[]
    },
    Menu:
        {
            show:true
        }
};

export class IdentifyForm extends Component
        {
            render()
            {
                return (
                    <div>
                     <label className="item item-input item-stacked-label">
                        <span className="input-label"><FormattedMessage id="identity_cardNo" /></span>
                        <input type="text" placeholder={this.context.intl.formatMessage({id:"identity_cardNo_placeholder"})} ref="CardNo" />
                    </label>
                    <label className="item item-input item-stacked-label">
                        <span className="input-label"><FormattedMessage id="identity_userName" /></span>
                        <input type="text" placeholder={this.context.intl.formatMessage({id:"identity_userName_placeholder"})} ref="UserName" />
                    </label>

                    <label className="item item-input item-stacked-label">
                        <span className="input-label"><FormattedMessage id="identity_mobile" /></span>
                        <input type="text" placeholder={this.context.intl.formatMessage({id:"identity_mobile_placeholder"})} ref="Mobile" />
                    </label>

                    <label className="item item-input item-stacked-label">
                        <span className="input-label"><FormattedMessage id="identity_IDCard" /></span>
                        <input type="text" placeholder={this.context.intl.formatMessage({id:"identity_IDCard_placeholder"})} ref="IDCard" />
                    </label>
                    </div>
                    );
            }
        }

        IdentifyForm.contextTypes =
            {
                intl:PropTypes.object.isRequired
            }