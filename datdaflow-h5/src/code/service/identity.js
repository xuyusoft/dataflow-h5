/*!
 * jixiu-h5 Javascript Library
 * weiyining - v1.0.0 (2016)
 * https://www.jixiuapp.com/ | Released under MIT license
 */
'use strict';
import BasicService from './basic';

export default class IdentityService extends BasicService
{
    constructor()
    {
        super();
        this.Bind = this.Bind;
    }

    async Bind(data)
    {
        let url  = `FlowCard/BindCard`;

        let r = await this.call({
            method:'POST',
            noToken:true,
            url:url,
            body:JSON.stringify(data)
        });

        window.store.dispatch({type:"Identity_Data",data:r});

        return r;
    }
}