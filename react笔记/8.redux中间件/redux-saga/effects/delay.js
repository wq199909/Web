import call from './call';
import { resolve } from 'dns';

export function delay(duration){
    return call(function(){
        return new Promise(resolve=>{
            setTimeout(()=>{
                resolve();
            }, duration)
        })
    })
}