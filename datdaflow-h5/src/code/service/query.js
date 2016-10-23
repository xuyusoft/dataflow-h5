/*!
 * jixiu-h5 Javascript Library
 * weiyining - v1.0.0 (2016)
 * https://www.jixiuapp.com/ | Released under MIT license
 */
'use strict';
import BasicService from './basic';

export default class QueryService extends BasicService
{
    constructor()
    {
        super();
        this.Get = this.Get;
    }

    async Get(cardNo)
    {
        let url  = `FlowCard/M2M_Data?cardNo=${cardNo}`;
        let r = await this.call({noToken:true,url:url});
        window.store.dispatch({type:"Query_Data",data:r});
        return r;
    }
}