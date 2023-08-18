// 递归过滤数组
export function filter(tree, fn) {
  // 递归过滤函数
  function listFilter(list) {
    return list
      .filter((node) => {
        node['children'] = node['children'] && listFilter(node['children'])
        return fn(node) 
      })
  }

  return listFilter(tree)
}
