// 路径处理
export function joinParentPath(menus, parentPath=''){
    for(let i = 0; i<menus.length; i++){
        const menu = menus[i];
        if(!(menu.path.startsWith('/'))){
            menu.path = `${parentPath}/${menu.path}`
        }
        if(menu?.children?.length){
            joinParentPath(menu.children, menu.path)
        }
    }
    
}

export function transformRouteToMenu(routes, arr){
    routes.forEach((item, index) => {
        arr.push({
            name: item.name,
            path: item.path,
            icon: item.icon,
            children: []
        })

        if(item.children){
            const childArr = transformRouteToMenu(item.children,[]);
            arr[index].children = childArr;
        }
    });
    return arr
}