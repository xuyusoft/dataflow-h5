/*!
 * jixiu-h5 Javascript Library
 * weiyining - v1.0.0 (2016)
 * https://www.jixiuapp.com/ | Released under MIT license
 */
'use strict'
import React,{Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import QueryService from '../service/query';
import {RechargeCardNoInput} from '../recharge/recharge';

/**
 * 组件说明
 * @class Game
 * @author seven
 * @version 1.0
 */
@connect(x =>{ return { data : x.Query } })
export default class Query extends Component {

    // #region Default Events
    /**
    * 构造函数
    * @constructor
    */
    constructor(props, context) {
        super(props, context);
        this.getData=::this.getData;
    }

    componentDidMount() {
    }

    getData()
    {
        this.api = new QueryService();

        this.api.Get(this.refs.RechargeCardNoInput.refs.CardNo.value);
    }

    render() {

        let [data,left] = [this.props.data,null];

        if(data.code==1){
            left='接口繁忙中，请稍后重试。';
        }

        else if(data.code==2){
            left='不存在的卡号。';
        }


        else if(data.code==0)
        {
            left =  <div>
                        <p style={{padding: "10px 20px",border: "solid 1px #e0e0e0"}}>剩余流量：{data.msg}MB</p>
                    </div>
        }

        return (
            <div>
             <div className="list">
                    <RechargeCardNoInput ref='RechargeCardNoInput' />
                    <br />
                    <button className="button button-block button-assertive" onClick={this.getData}>
                        <FormattedMessage id="buttons_query" />
                    </button>
                    {left}
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