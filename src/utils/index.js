import { unionWith, mergeWith, intersectionWith, isEqual} from 'lodash-es'
import { isArray, isObject} from './is'

/**
 * 递归合并两个对象
 * 
 * @param {*} source 要合并的源对象
 * @param {*} target 目标对象，合并后结果在此
 * @param {*} mergeArrays 合并方法，默认为“replace”
 *      - "union"：对数组执行并集操作
 *      - "intersection"：对数组执行交集操作
 *      - "concat"：连接数组
 *      - "replace"：目标数组替换源数组
 * @returns 合并后的对象
 */
export function deepMerge(source, target, mergeArrays='replace'){
    if(!target){
        return source
    }
    if(!source){
        return target
    }
    return mergeWith(target, source, (targetValue, sourceValue)=>{
        // mergeWith的第三个参数customizer是一个函数，用于定制合并值，其输入参数为目标对象和来源对象的各属性值
        // 如果customizer返回undefined，将会由合并处理方法代替
        // 当属性值为array时，说明已经合并到了最深处
        if(isArray(targetValue) && isArray(sourceValue)){
            switch (mergeArrays) {
                case 'union':
                    return unionWith(sourceValue, targetValue)
                case 'intersection':
                    return intersectionWith(sourceValue, targetValue, isEqual)
                case 'concat':
                    return sourceValue.concat(targetValue)
                case 'replace':
                    return targetValue
                default:
                    throw new Error(`unknown merge array strategy: ${mergeArrays}`)
            }
        }
        // 当属性值仍为object时，
        if(isObject(targetValue) && isObject(sourceValue)){
            return deepMerge(targetValue, sourceValue, mergeArrays)
        }
        return undefined
    })
}