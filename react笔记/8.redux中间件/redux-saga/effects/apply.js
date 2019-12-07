import call from './call'

export function apply(context, fn, ...args){
    if(context){
        fn = [context, fn];
    }
    return call(fn, ...args);
}