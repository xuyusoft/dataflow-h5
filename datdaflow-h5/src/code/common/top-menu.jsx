/*!
 * jixiu-h5 Javascript Library
 * weiyining - v1.0.0 (2016)
 * https://www.jixiuapp.com/ | Released under MIT license
 */
'use strict'
import React,{Component,PropTypes } from 'react';
import {Link} from 'react-router';
import { FormattedMessage } from 'react-intl';

/**
 * 组件说明
 * @class TopMenu
 * @author Seven
 * @version 1.0
 */
export default class TopMenu extends Component {

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
    render() {
        try{
            if(!this.props.children.props.TopMenu.show){ return null; }
        }

        catch (e) {
            return null;
        }

        let defaultIcon ='icon ion-android-arrow-back';

        let [letButtons,rightButtons] = [null,null];
        try{

            letButtons = this.props.children.props.TopMenu.left.map((x,z)=>
            {
                if(!x.icon) { x.icon = defaultIcon;  }

                let to = `/${this.props.params.app}`;

                if(x.to != '^'){to +=`/${x.to}`; }

                return (
                        <Link key={z} to={to} className="button button-assertive">
                            <i className={x.icon}></i>
                        </Link>
                    );
            })
        }
        catch(e){}

        try{

            rightButtons = this.props.children.props.TopMenu.right.map((x,z)=>
            {
                if(!x.icon) { x.icon = defaultIcon;  }
                return (
                        <Link key={z} to={`/${this.props.params.app}/${x.to}`} className="button button-assertive">
                            <i className={x.icon}></i>
                        </Link>
                    );
            })
        }
        catch(e){}

        return (
            <div className="TopMenu bar bar-header bar-assertive">
                <div className="left">
                     {letButtons}
                </div>
                <h1 className="title"><FormattedMessage id="appname" /></h1>
                {rightButtons}
            </div>
            );
    }
    // #endregion
}