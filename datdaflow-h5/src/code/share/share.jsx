/*!
 * jixiu-h5 Javascript Library
 * weiyining - v1.0.0 (2016)
 * https://www.jixiuapp.com/ | Released under MIT license
 */
'use strict'
import React,{Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import TopMenuComponent from '../common/top-menu';
import MenuComponent from '../common/menu';
import BasicService from '../service/basic';
import UserService from '../service/user';

// #region 多语言
import { IntlProvider, addLocaleData } from 'react-intl';
import zhLocaleData from 'react-intl/locale-data/zh';
import enLocaleData from 'react-intl/locale-data/en';
import en_us from '../locale/en_us.js';
import zh_cn from '../locale/zh_cn.js';

addLocaleData(enLocaleData);
addLocaleData(zhLocaleData);

let defaultLocale = "zh_cn";

if(typeof window !== 'undefined')
{
    let _sysLoc = (navigator.language || navigator.browserLanguage).toLowerCase();
    console.log('system locale is', _sysLoc);
    if( _sysLoc === 'en_us') { defaultLocale = 'en_us'; }
}
// #endregion

/**
 * 组件说明
 * @class Share
 * @author seven
 * @version 1.0
 */
@connect(state =>{ return { Language: state.Language,intl:{} } })
export default class Share extends Component {

    // #region Default Events
    /**
    * 构造函数
    * @constructor
    */
    constructor(props)
    {
        super(props);

        this.renderMessage = this.renderMessage.bind(this);

        let [api_basic] = [new BasicService()];

        //api_basic.setup(this.props.params.app);
    }


    /**
    * 插入DOM之前
    * @event
    */
    componentWillMount(){
        window.document.body.clientHeight
    }

    /**
     * 渲染组件
     * @method
     * @return {Element} html元素
     */
    render() {
        let [TopMenu,Menu]=[null,null];
        try{
            if(this.props.children.props.TopMenu.show===true)
            {
                TopMenu = <TopMenuComponent {...this.props} />;
            }
        }catch(e){}

        try{
            if(this.props.children.props.Menu.show ===true)
            {
                Menu = <MenuComponent {...this.props} />;
            }
        }catch(e){}

        return (
                 <IntlProvider locale="en" messages={this.renderMessage()}>
                    <div className="Share">
                        {TopMenu}
                            <div className="padding scroll-content has-tabs-top" style={{height:(window.screen.height - 99)+'px',overflowY:"scroll"}}>
                             {this.props.children}
                            </div>
                        {Menu}
                    </div>
             </IntlProvider>
            );
    }
    // #endregion

renderMessage() {
        switch(this.props.Language) {
            case 'en_us':
                return en_us;
            default:
                return zh_cn;
        }
    }
}