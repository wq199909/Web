import runSaga from './runSaga';
import { Channel } from './Channel';

/**
 * 创建saga中间件的函数
 */
export default function (){
    function sagaMiddleware(store){
        const env = {
            store,
            channel: new Channel()
        }
        sagaMiddleware.run = runSaga.bind(null, env);
        return function(next){
            return function(action){
                const result = next(action);
                env.channel.put(action.type, action);
                return result;
            }
        }
    }
    return sagaMiddleware;
}