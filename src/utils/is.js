export function is(val, type){
    return Object.prototype.toString.call(val) === `[object ${type}]`;
}

export function isObject(val){
    return val !== null && is(val, 'Object')
}

export function isFunction(val){
    return typeof val === 'function'
}

export function isArray(val){
    return Array.isArray(val)
}