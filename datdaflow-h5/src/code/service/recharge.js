/*!
 * jixiu-h5 Javascript Library
 * weiyining - v1.0.0 (2016)
 * https://www.jixiuapp.com/ | Released under MIT license
 */
'use strict';
import BasicService from './basic';

export default class RechargeService extends BasicService
{
    constructor()
    {
        super();
        this.Get = this.Get;
    }

   async Get(app=1)
    {
        let url  = `Business/Get?key=${app}`;
        let r = await this.call({noToken:true,url:url});
        window.store.dispatch({type:"Recharge_Data",data:r});
        return r;
   }

    async CreateOrder(data)
    {
        let url  = `FlowCard/Recharge_BuyAlipay`;
        let r = await this.call(
            {
                noToken:true,
                url:url,
                body:JSON.stringify(data),
                method:'POST'});

        return r;
    }
}