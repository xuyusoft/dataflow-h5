/*!
 * jixiu-h5 Javascript Library
 * weiyining - v1.0.0 (2016)
 * https://www.jixiuapp.com/ | Released under MIT license
 */

import UserService from '../service/user';

/**
 * 验证组件，检测当前用户是否登陆，如没有登陆就跳转到登陆页
 * @function Auth
 * @author seven
 * @version 1.0
 */
const Auth = (nextState, replace, callback) => 
{
    if(!UserService.IsAuthenticated())
    {
        var api = new UserService();

        let userResult = api.activation();

        if(userResult==null) 
        {
            replace({
                pathname:`/${nextState.params.app}/login`,
                state: {nextPathname: nextState.location.pathname}
            });
        }

        //api.activation().then(r=>
        //{
        //    if(r==null) 
        //    {
        //        replace({
        //            pathname:`/${nextState.params.app}/login`,
        //            state: {nextPathname: nextState.location.pathname}
        //        });
        //    }
        //});
    }

    if(callback)
    {
        callback();
    }

};

export default Auth;