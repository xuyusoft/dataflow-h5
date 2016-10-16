/*!
 * jixiu-h5 Javascript Library
 * weiyining - v1.0.0 (2016)
 * https://www.jixiuapp.com/ | Released under MIT license
 */
'use strict';
import BasicService from './basic';

export default class NewsService extends BasicService
{
    constructor()
    {
        super();
        this.Get = this.Get;
        this.Detail = this.Detail;
    }

    Get()
    {
        return this.call({ url: 'api/Personal/v200/post/List',param:{categoryId:46,take:15,skip:0},method: 'GET'})
            .then(r=>{
                window.store.dispatch({type:"News_Data",data:r});
                return r;
            });
    }

    Detail(postId){

        var vm = window.store.getState().News;

        if(!_.isEmpty(vm))
        {
            let item = _.find(vm.data,(x)=>{ return x.PostId == postId });

            if(!_.isEmpty(item))
            {
                window.store.dispatch({type:"News_Detail",data:item});

                return item;
            }
        }

        return this.call({ url: 'api/Personal/v200/Post/Get',param:{postId:postId},method: 'GET'})
                    .then(r=>{
                        window.store.dispatch({type:"News_Detail",data:r});
                        return r;
                    });
    }
}