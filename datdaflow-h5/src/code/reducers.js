import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'


/**
 * 语言包
 */
const Language = function (state = 'zh_cn', action) 
    {
        let _lan = action.language;

        switch(action.type) {
            case 'CHANGE_LANGUAGE':
                return  action.language;
            default:
                return state;
        }
    }


/**
 * 青柠团
 */
const Group = function(state = [], action) 
    {
        switch (action.type) 
        {
            case 'Group_Data':
                return Object.assign({}, state, { data: action.data })
            default:
                return state
        }
    }

    /**
    * 资讯
    */
    const News = function(state = [], action) 
        {
            switch (action.type) 
            {
                case 'News_Data':
                    return Object.assign({}, state, { data: action.data })
                case 'News_Detail':
                    // 访问详情时，返回当前获取的列表，和新闻详情
                    return { data:state.data, detail:action.data };
                default:
                    return state
            }
        }



    /**
     * 当前登陆的用户
     */
    const User = function(state = null,action)
        {
        switch(action.type)
        {
            case 'User_Data':
                return action.User;
            default:
                return state;
        }
    }



        const Reducers = combineReducers({
            Language,
            Group,
            News,
            User,
            routing:routerReducer
        });

    export default Reducers;