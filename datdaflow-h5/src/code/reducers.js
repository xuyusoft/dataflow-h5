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
     * 充值
     */
    const Recharge = function(state = [], action)
        {
            switch (action.type)
            {
                case 'Recharge_Data':
                    return action.data;
                default:
                    return state
            }
        }

        /**
         * 查询
         */
        const Query = function(state = {}, action)
            {
                switch (action.type)
                {
                    case 'Query_Data':
                        return action.data;
                    default:
                        return state
                }
            }

            /**
            * 认证
            */
            const Identity = function(state = {}, action)
                {
                    switch (action.type)
                    {
                        case 'Identity_Data':
                            return action.data;
                        default:
                            return state
                    }
                }


        const Reducers = combineReducers({
            Language,
            Recharge,
            Query,
            Identity,
            routing:routerReducer
        });

    export default Reducers;