export const actionTypes = {
    increase: "couter/increase",
    decrease: "couter/decrease"
}

export function increase(){
    return {
        type: actionTypes.increase
    }
}

export function decrease(){
    return {
        type: actionTypes.decrease
    }
}