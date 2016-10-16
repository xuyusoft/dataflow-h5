/*!
 * jixiu-h5 Javascript Library
 * weiyining - v1.0.0 (2016)
 * https://www.jixiuapp.com/ | Released under MIT license
 */
'use strict'
import React,{Component,PropTypes } from 'react';

/**
 * 组件说明
 * @class NotFound
 * @author Seven
 * @version 1.0
 */
export default class NotFound extends Component {

    // #region Default Events
    /**
    * 构造函数
    * @constructor
    */
    constructor() {
        super();
    }

    /**
     * 渲染组件
     * @method
     * @return {Element} html元素
     */
    render() {
        return (
            <div className="NotFound">
                <h1>this is 404 - NotFound page</h1>
            </div>
            );
    }
    // #endregion
}