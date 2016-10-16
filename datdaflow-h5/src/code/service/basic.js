/*!
 * jixiu-h5 Javascript Library
 * weiyining - v1.0.0 (2016)
 * https://www.jixiuapp.com/ | Released under MIT license
 */
'use strict';

import 'whatwg-fetch';

export default class BasicService
{
    constructor()
    {
        this.endpoint = 'http://jixiuapp-staging.cloudapp.net/';
    }

    call(_options)
    {
        var param = new URLSearchParams();
        param.set('appKey', Cookies.get('appKey'));
        param.set('accessToken', Cookies.get('accessToken'));
        
        if (_options.noToken){ param.delete('accessToken'); }

        if (_.isObject(_options.param))
        {
            for (var x in _options.param)
            {
                param.set(x, _options.param[x]);
            }

            delete _options.param;
        }

        var headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
                
        var options =
            {
                method: 'GET',
                headers: headers,
                mode: 'cors',
                cache: 'default'
            };

        _.merge(options, _options);
            
        var url = this.endpoint + _options.url+"?"+param.toString();
        delete options.url;

        return fetch(url, options)
            .then(r=> { 
                if(r.ok)
                {
                    return r.json(); 
                }
                else{
                    console.error(r)
                    return null;
                }

            },(e)=>{
                console.error("Fetch failed!", e);
            })
            .catch(e => console.error("Oops, error", e));
    }


    setup(app)
    {
        let device = Cookies.get('device');

        if (!device) 
        {
            device = 'KgXkUdEPo50KZ7d'; 
            Cookies.set('device', device, { expires: 365 });
        }
        
        let url  = `api/Core/v200/App/WebInit?app=${app}&device=${device}`;
        
        fetch(this.endpoint+url).then(r=>
        {
            return r.json().then(x=>
            {
                Cookies.set('appKey', x.AppKey);
                Cookies.set('accessToken', x.AccessToken);
            })
        })
    }
}