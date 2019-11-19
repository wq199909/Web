function ConstructorProxy(Class, ...propNames) {
    return new Proxy(Class, {
        construct(target, argumentsList) {
            const obj = Reflect.construct(target, argumentsList)
            propNames.forEach((name, i) => {
                obj[name] = argumentsList[i];
            })
            return obj;
        }
    })
}