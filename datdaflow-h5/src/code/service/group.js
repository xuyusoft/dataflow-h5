/*!
 * jixiu-h5 Javascript Library
 * weiyining - v1.0.0 (2016)
 * https://www.jixiuapp.com/ | Released under MIT license
 */
'use strict';
import BasicService from './basic';

export default class GroupService extends BasicService
{
    constructor()
    {
        super();
        this.Rank = this.Rank;
    }

    Rank()
    {
        return this.call({ url: 'api/Personal/v200/Group/Rank/GroupPersonalRanking',method: 'GET'})
            .then(r=>{
                window.store.dispatch({type:"Group_Data",data:r});
                return r;
            });
    }
}