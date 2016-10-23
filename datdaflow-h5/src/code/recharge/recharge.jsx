/*!
 * jixiu-h5 Javascript Library
 * weiyining - v1.0.0 (2016)
 * https://www.jixiuapp.com/ | Released under MIT license
 */
'use strict'
import React,{Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import RechargeService from '../service/recharge';

/**
 * 组件说明
 * @class Video
 * @author seven
 * @version 1.0
 */
@connect(x =>{ return { data : x.Recharge } })
export default class Recharge extends Component {

    // #region Default Events
    /**
    * 构造函数
    * @constructor
    */
    constructor(props) {
        super(props);

        this.Buy=::this.Buy;
        this.Selected =::this.Selected;

        this.api = new RechargeService();
        let app = parseInt(props.params.app);
            this.api.Get(isNaN(app)?1:app);

    }

    Selected(data)
    {
        this.selected = data;
    }


    Buy()
    {
        let cardNo = this.refs.RechargeCardNoInput.refs.CardNo.value;

        let data = {
            uid:parseInt(this.props.params.app),
            FlowCardNo:cardNo,
            data:this.selected
        };

        if(isNaN(data.uid)){data.uid=1;}

        this.api.CreateOrder(data).then(r=>{
            if(r.code!=0)
            {
                alert(r.msg);
            }
            else{
                let child = document.createElement('div');
                child.innerHTML = r.msg;
                document.body.appendChild(child);
                document.forms['alipaysubmit'].submit();
            }
        });
    }


    /**
     * 渲染组件
     * @method
     * @return {Element} html元素
     */
    render() {

        let data = this.props.data;

        if(!data){return null;}

        let packages =
           _.map(data.msg,(a,b)=>{
               return (
               <label key={b} className="item item-radio ng-valid ng-not-empty" onClick={()=>{this.Selected(a.Data)}}>
                 <input type="radio" name="radio-group" className="ng-not-empty ng-dirty ng-touched ng-valid-parse" />
                    <div className="radio-content">
                        <div className="item-content disable-pointer-events">
                                <font className="assertive">￥{a.Amount}</font>
                                <span> = {a.Description}</span>
                        </div>
                        <i className="radio-icon disable-pointer-events icon ion-checkmark"></i>
                    </div>
            </label>)

            });

        return (
            <div className="Recharge">
                <div className="list">
                    <RechargeCardNoInput ref='RechargeCardNoInput' />
                     <div className="list">
                    {packages}
                    </div>
                    <button className="button button-block button-assertive" onClick={this.Buy}>
                        <FormattedMessage id="buttons_recharge" />
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


export class RechargeCardNoInput extends Component
{
    render()
    {
        return (<label className="item item-input item-stacked-label">
                      <span className="input-label"><FormattedMessage id="recharge_cardNo" /></span>
                      <input type="text" ref="CardNo" placeholder={this.context.intl.formatMessage({id:"recharge_cardNo_placeholder"})} />
                  </label>);
    }
}

RechargeCardNoInput.contextTypes =
    {
        intl:PropTypes.object.isRequired
    }