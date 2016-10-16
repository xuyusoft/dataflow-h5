/*!
 * jixiu-h5 Javascript Library
 * weiyining - v1.0.0 (2016)
 * https://www.jixiuapp.com/ | Released under MIT license
 */
'use strict'
import React,{Component,PropTypes } from 'react';
import {Link} from 'react-router';
import { FormattedMessage } from 'react-intl';
import API from '../service/basic';
/**
 * 组件说明
 * @class Menu
 * @author Seven
 * @version 1.0
 */
export default class Menu extends Component {

    // #region Default Events
    /**
    * 构造函数
    * @constructor
    */
    constructor(props) {
        super(props);
    }

    /**
     * 渲染组件
     * @method
     * @return {Element} html元素
     */
    render()
    {
        try {
            if(!this.props.children.props.Menu.show){ return null; }
        }

        catch (e) {
            return null;
        }

        let app = this.props.params.app;

        return (
              <div className="tabs-striped tabs-top tabs-background-assertive tabs-color-light">
                  <div className="tabs">
                       <Link className="tab-item" to={"/"+app+"/news"} activeClassName="active">
                            <i className='icon ion-ios-bell-outline'></i>
                           <FormattedMessage id="topmenu_news" />
                        </Link>

                          <Link className="tab-item" to={"/"+app+"/recharge"} activeClassName="active">
                            <i className='icon ion-social-yen-outline'></i>
                            <FormattedMessage id="topmenu_recharge" />
                        </Link>

                          <Link className="tab-item" to={"/"+app+"/query"} activeClassName="active">
                            <i className='icon ion-ios-analytics-outline'></i>
                            <FormattedMessage id="topmenu_query" />
                          </Link>

                          <Link className="tab-item" to={"/"+app+"/auth"} activeClassName="active">
                            <i className='icon ion-ios-bookmarks-outline'></i>
                            <FormattedMessage id="topmenu_auth" />
                          </Link>

                         <Link className="tab-item" to={"/"+app+"/personal"} activeClassName="active">
                            <i className='icon ion-ios-person'></i>
                            <FormattedMessage id="topmenu_personal" />
                         </Link>
                  </div>
              </div>
                );
        }
    // #endregion
}