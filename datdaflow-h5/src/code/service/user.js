/*!
 * jixiu-h5 Javascript Library
 * weiyining - v1.0.0 (2016)
 * https://www.jixiuapp.com/ | Released under MIT license
 */
'use strict';
import BasicService from './basic';
require("babel-polyfill");

let user ={};

export default class UserService extends BasicService
{
    constructor()
    {
        super();
        
        this.login = this.login.bind(this);
    }

    /**
     * 是否登陆
     * @function 
     */
    static IsAuthenticated()
    {
        // 如果对象为空，就去store获取
        if(_.isEmpty(user))
        {
            user = this.Get();

            return _.isEmpty(user)==false;
        }

        //不为空直接返回 true
        return true;
    }

    /**
     * 用户实体
     * @property
     */
   static Get()
    {
        try
        {
            if(_.isEmpty(user))
            {
                let state = window.store.getState();
                if(state&&state.User) 
                {
                    user = state.User;
                }
            }
        }
        catch(e) { }
        
        return user;
    }

    /**
     * 激活用户
     * @function
     * @description 登陆后刷新页面，从cookies里面的accessToken换取用户信息
     */
    async activation()
    {
        let r = await this.call({url:'/api/Core/v200/appUser/Get'});

        if(r!=null)
        {
            window.store.dispatch({type:"User_Data",User:r});
        }

        return r;
    }

    /**
     * 登陆系统
     * @function
     */
    login(mobile, pass) 
    {
        return this.call({
            url: 'api/Core/v200/appUser/Login',
            method: 'POST',
            noToken: true,
            body: JSON.stringify({
                DeviceId: Cookies.get('device'),
                DeviceType: 6,
                Email: mobile,
                Password: pass
            })
        }).then(r=>{
            if(r.AccessToken)
            {
                Cookies.set('accessToken', r.AccessToken);
                window.store.dispatch({type:"User_Data",User:r});
            }
            return r;
        });
    }

    /**
     * 退出系统
     * @function
     */
    logout() {
        return this.call({
            url: 'api/Core/v200/AppUser/Logout',
            method: 'POST'
        }).then((r)=>
        {
            if(r!=null)
            {
                Cookies.set('accessToken', r.Result);
                window.store.dispatch({type:"User_Data",User:{}});
                user = {};
            }
        });
    }
}